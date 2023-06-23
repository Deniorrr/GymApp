const express = require("express");
const app = express();
const bcrypt = require("bcrypt");
const mysql = require("mysql");
const cors = require("cors");
const bodyParser = require("body-parser");
const { v4: uuidv4 } = require("uuid");

class UserSession {
  constructor(uuid, nickname, userid) {
    this.uuid = uuid;
    this.nickname = nickname;
    this.userId = userid;
  }
}

let userSessionActive = [];

const getUserId = (_uuid) => {
  let i = -1;
  userSessionActive.forEach((x) => {
    if (x.uuid == _uuid) {
      i = x.userId;
    }
  });
  return i;
};

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "gymapp",
});

app.get("/redirect", (req, res) => {
  res.redirect("https://example.com");
});

app.post("/register", async (req, res) => {
  try {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    const username = req.body.username;
    const email = req.body.email;
    if (username.length < 3) {
      res.send({ error: "Username must contain at least 3 characters" });
    } else if (req.body.password.length < 3) {
      res.send({ error: "Password must contain at least 3 characters" });
    } else if (email.indexOf("@") == -1) {
      res.send({ error: "Incorrect email" });
    } else {
      const sqlSelect = "SELECT * FROM users WHERE username = ? OR email = ?";
      db.query(sqlSelect, [username, email], (err, result) => {
        if (result.length > 0) {
          if (result[0].username == username) {
            res.send({ error: "Username is taken!" });
          } else {
            res.send({ error: "Email adress is already registered!" });
          }
        } else {
          const sqlInsert =
            "INSERT INTO `users` (`id`, `username`, `email`, `password`) VALUES (NULL, ?, ?, ?);";
          db.query(
            sqlInsert,
            [username, email, hashedPassword],
            (err, result) => {
              res.status(201).send("ok");
            }
          );
        }
      });
    }
  } catch {
    res.status(500).send("error has occured");
  }
});

app.post("/login", async (req, res) => {
  const username = req.body.username;
  const sqlSelect = "SELECT * FROM users WHERE username = ?";
  db.query(sqlSelect, [username], async (err, result) => {
    if (result.length == 0) {
      return res.send({ error: "This username does not exist!" });
    }
    const hashedPassword = result[0].password;
    try {
      if (await bcrypt.compare(req.body.password, hashedPassword)) {
        const user_id = result[0].id;
        const username = result[0].username;
        const uuid = uuidv4();
        userSessionActive.push(new UserSession(uuid, username, user_id));
        res.send(["Successful login", uuid]);
      } else {
        res.send({ error: "Wrong password!" });
      }
    } catch {
      res.status(500).send("error has occured");
    }
  });
});

app.post("/addworkout", async (req, res) => {
  const userId = getUserId(req.body.userUuid);
  const workoutData = req.body.workoutData;
  const workoutName = req.body.workoutName;
  db.getConnection((err, connection) => {
    if (err) {
      throw err;
    }
    connection.beginTransaction((err2) => {
      if (err2) {
        console.log(err2);
        connection.release();
        throw err;
      }
      //Your transaction logic goes here
      connection.query(
        "INSERT INTO workouts(name, user_id, workout_date) VALUES(?, ?, NOW())",
        [workoutName, userId],
        (err, results) => {
          if (err) {
            console.log(err);
            connection.rollback(() => {
              connection.release();
              throw err;
            });
          }
        }
      );
      connection.query(
        "SET @workout_id = LAST_INSERT_ID();",
        (err, results) => {
          if (err) {
            console.log(err);
            connection.rollback(() => {
              connection.release();
              throw err;
            });
          }
        }
      );

      workoutData.forEach((x) => {
        connection.query(
          "INSERT INTO exercises(workout_exercise_id, workout_id) VALUES(?,@workout_id);",
          [x.exerciseId],
          (err, results) => {
            if (err) {
              console.log(err);
              connection.rollback(() => {
                connection.release();
                throw err;
              });
            }
          }
        );
        connection.query(
          "SET @exercise_id = LAST_INSERT_ID();",
          [x.exerciseId],
          (err, results) => {
            if (err) {
              console.log(err);
              connection.rollback(() => {
                connection.release();
                throw err;
              });
            }
          }
        );
        x.sets.forEach((y) => {
          connection.query(
            "INSERT INTO sets(exercise_id, weight, reps, rpe) VALUES (@exercise_id,?,?,?);",
            [y.inputData.weight, y.inputData.reps, y.inputData.rpe],
            (err, results) => {
              if (err) {
                console.log(err);
                connection.rollback(() => {
                  connection.release();
                  throw err;
                });
              }
            }
          );
        });
      });

      connection.commit((err3) => {
        if (err3) {
          console.log(err3);
          connection.rollback(() => {
            connection.release();
            throw err3;
          });
        }
      });

      connection.release();
      console.log("Transaction completed successfully.");
    });
  });
  res.send("ok");
});

app.post("/getexercises", async (req, res) => {
  const userId = getUserId(req.body.userUuid);
  if (userId == -1) return res.send(401);
  const sqlSelect =
    "SELECT id, name, user_id FROM workout_exercises WHERE user_id = 0 OR user_id = ?";
  db.query(sqlSelect, [userId], async (err, result) => {
    res.send(result);
  });
});

app.post("/getWorkouts", async (req, res) => {
  const userId = getUserId(req.body.userUuid);
  if (userId == -1) return res.send(401);
  const sqlSelect =
    "SELECT workout_exercises.name as exercise_name, workouts.*,DATE_FORMAT(workout_date,'%D %M %Y') as wdate, DATE_FORMAT(workout_date,'%H:%i %D %M %Y') as wdate2, exercises.id as eid, COUNT(sets.id) as ecount FROM workouts JOIN exercises ON workouts.id = exercises.workout_id JOIN workout_exercises ON exercises.workout_exercise_id = workout_exercises.id JOIN sets ON exercises.id = sets.exercise_id WHERE workouts.user_id = ? GROUP BY exercises.id ORDER BY workouts.workout_date DESC;";
  db.query(sqlSelect, [userId], async (err, result) => {
    res.send(result);
  });
});

app.post("/getLastWorkoutDate", async (req, res) => {
  const userId = getUserId(req.body.userUuid);
  if (userId == -1) return res.send(401);
  const sqlSelect =
    "SELECT DATE_FORMAT(workout_date,'%D %M %Y') as workout_date FROM workouts WHERE workouts.user_id = ? ORDER BY workout_date DESC LIMIT 1";
  db.query(sqlSelect, [userId], async (err, result) => {
    res.send(result[0].workout_date);
  });
});

app.post("/getFullWorkout", async (req, res) => {
  const userId = getUserId(req.body.userUuid);
  if (userId == -1) return res.send(401);
  const workoutId = req.body.workoutId;
  const sqlSelect =
    "SELECT *, sets.id as set_id FROM exercises JOIN sets ON exercises.id = sets.exercise_id JOIN workout_exercises ON exercises.workout_exercise_id = workout_exercises.id WHERE exercises.workout_id = ?;";
  db.query(sqlSelect, [workoutId], async (err, result) => {
    res.send(result);
  });
});

app.post("/addExercise", async (req, res) => {
  const userId = getUserId(req.body.userUuid);
  if (userId == -1) return res.send(401);
  const exerciseName = req.body.exerciseName;
  const sqlSelect = "INSERT INTO workout_exercises(name,user_id) VALUES (?,?)";
  db.query(sqlSelect, [exerciseName, userId], async (err, result) => {
    res.send(result);
  });
});

app.post("/deleteWorkout", (req, res) => {
  const userId = getUserId(req.body.userUuid);
  if (userId == -1) return res.send(401);
  const workoutId = req.body.workoutId;
  db.getConnection((err, connection) => {
    if (err) {
      console.log(err);
      throw err;
    }
    connection.beginTransaction((err2) => {
      if (err2) {
        console.log(err2);
        connection.release();
        throw err;
      }
      //Your transaction logic goes here
      connection.query(
        "DELETE sets FROM sets, exercises WHERE exercises.id = sets.exercise_id AND exercises.workout_id = ?",
        [workoutId],
        (err, results) => {
          if (err) {
            console.log(err);
            connection.rollback(() => {
              connection.release();
              throw err;
            });
          }
        }
      );
      connection.query(
        "DELETE FROM exercises WHERE exercises.workout_id = ?",
        [workoutId],
        (err, results) => {
          if (err) {
            console.log(err);
            connection.rollback(() => {
              connection.release();
              throw err;
            });
          }
        }
      );
      connection.query(
        "DELETE FROM workouts WHERE workouts.id = ?",
        [workoutId],
        (err, results) => {
          if (err) {
            console.log(err);
            connection.rollback(() => {
              connection.release();
              throw err;
            });
          }
        }
      );
      connection.commit((err3) => {
        if (err3) {
          console.log(err3);
          connection.rollback(() => {
            connection.release();
            throw err3;
          });
        }
      });
      connection.release();
      console.log("Transaction completed successfully.");
    });
  });
  res.send("OK");
});

app.listen(3001);
console.log("app Started on localhost:3001");
