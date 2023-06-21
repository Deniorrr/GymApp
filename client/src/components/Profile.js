import React, { useState, useEffect } from "react";
import "./style/Profile.scss";
import ProfileWorkout from "./ProfileWorkout";
import axios from "axios";
import BackButton from "./BackButton";
import ProfileFullWorkout from "./ProfileFullWorkout";
function Profile() {
  const [workoutslist, setworkoutslist] = useState([]);
  const [displayWorkout, setDisplayWorkout] = useState(false);
  const [fullWorkoutElements, setFullWorkoutElements] = useState();
  const getWorkouts = () => {
    axios
      .post("http://localhost:3001/getWorkouts", {
        userUuid: localStorage.getItem("uuid"),
      })
      .then((response) => {
        generateWorkoutState(response.data);
      });
  };

  const generateWorkoutState = (data) => {
    let workouts = [];
    data.forEach((workout) => {
      let index = workouts.findIndex((x) => x.id === workout.id);
      if (index !== -1) {
        workouts[index].exercises.push({
          name: workout.exercise_name,
          count: workout.ecount,
          key: workout.eid,
        });
      } else {
        workouts.push({
          id: workout.id,
          name: workout.name,
          date: workout.wdate,
          date2: workout.wdate2,
          exercises: [
            {
              name: workout.exercise_name,
              count: workout.ecount,
              key: workout.eid,
            },
          ],
        });
      }
    });
    console.log(workouts);
    setworkoutslist(workouts);
  };
  useEffect(getWorkouts, []);

  const renderWorkouts = () => {
    const workouts = workoutslist.map((workout) => (
      <ProfileWorkout
        workout={workout}
        key={workout.id}
        onClick={() => {
          renderFullWorkout(workout);
          setDisplayWorkout(true);
        }}
      />
    ));
    return workouts;
  };
  const closeWorkout = () => {
    setDisplayWorkout(false);
  };

  const renderFullWorkout = (workout) => {
    console.log(workout);
    setFullWorkoutElements(
      <ProfileFullWorkout
        data={workout}
        closeWorkout={() => {
          closeWorkout();
        }}
      />
    );
  };

  return (
    <>
      <BackButton />
      <div className="container profile">
        {displayWorkout && fullWorkoutElements}
        <h1>Workout history</h1>
        {renderWorkouts()}
      </div>
    </>
  );
}

export default Profile;
