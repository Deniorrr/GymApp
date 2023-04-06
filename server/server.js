const express = require("express");
const app = express();
const bcrypt = require("bcrypt");
const mysql = require("mysql");
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "gymapp",
});

app.get("/", (req, res) => {
  res.send("<h2>hi</h2>");
});

app.get("/redirect", (req, res) => {
  res.redirect("https://example.com");
});

app.post("/register", async (req, res) => {
  try {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    // console.log(salt);
    // console.log(hashedPassword);
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
          console.log(result);
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
              console.log("not taken");
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
        res.send("Successful login");
      } else {
        res.send({ error: "Wrong password!" });
      }
    } catch {
      res.status(500).send("error has occured");
    }
  });
});

app.listen(3001);
console.log("app Started on localhost:3001");
