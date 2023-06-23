import React, { useState, useEffect } from "react";
import axios from "axios";
import closeIcon from "../assets/closeIconWhite.svg";
import bin from "../assets/binWhite.png";

function ProfileFullWorkout(props) {
  const data = props.data;
  const [exercises, setExercises] = useState([]);
  const [sure, setSure] = useState(false);
  const getWorkoutDetails = () => {
    axios
      .post("http://localhost:3001/getFullWorkout", {
        userUuid: localStorage.getItem("uuid"),
        workoutId: data.id,
      })
      .then((response) => {
        console.log(response.data);
        generateWorkoutState(response.data);
      });
  };
  useEffect(getWorkoutDetails, []);

  const deleteWorkout = () => {
    axios
      .post("http://localhost:3001/deleteWorkout", {
        userUuid: localStorage.getItem("uuid"),
        workoutId: data.id,
      })
      .then(() => {
        window.location.reload(false);
      });
  };

  const generateWorkoutState = (data) => {
    let exercises = [];
    data.forEach((exercise) => {
      let index = exercises.findIndex((x) => x.id === exercise.exercise_id);
      if (index !== -1) {
        exercises[index].sets.push({
          reps: exercise.reps,
          weight: exercise.weight,
          rpe: exercise.rpe,
        });
      } else {
        exercises.push({
          name: exercise.name,
          id: exercise.exercise_id,
          sets: [
            {
              reps: exercise.reps,
              weight: exercise.weight,
              rpe: exercise.rpe,
            },
          ],
        });
      }
    });
    setExercises(exercises);
  };
  let i = 1;
  const resetCounter = () => {
    i = 1;
  };
  const renderExercises = () => {
    const e = exercises.map((exercise) => (
      <div key={exercise.id} className="exercise">
        {resetCounter()}
        <h4>{exercise.name}</h4>
        <table>
          <tbody>
            <tr>
              <th></th>
              <th>Weight</th>
              <th>Reps</th>
              <th>RPE</th>
            </tr>
            {exercise.sets.map((set) => (
              <tr key={i}>
                <td>{i++}</td>
                <td>{set.weight} Kg</td>
                <td>{set.reps}</td>
                <td>{set.rpe === 0 ? "<7" : set.rpe}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    ));
    return e;
  };

  const areYouSure = () => {
    setSure(true);
  };

  const renderAreYouSure = () => {
    return (
      <div className="sureWrapper">
        <div className="sure">
          <h1>Are you sure you want to delete this workout?</h1>
          <div className="buttonWrapper">
            <button onClick={() => setSure(false)}>No</button>
            <button onClick={() => deleteWorkout()}>Yes</button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="ProfileFullWorkout">
      <div className="main">
        <div className="buttonWrapper">
          <button className="deleteButton" onClick={() => areYouSure()}>
            <img src={bin} alt="Close Selector" />
          </button>
          <button className="closeButton" onClick={() => props.closeWorkout()}>
            <img src={closeIcon} alt="Close Selector" />
          </button>
        </div>
        <h1>{data.name}</h1>
        <h3>{data.date2}</h3>
        {renderExercises()}
      </div>
      {sure ? renderAreYouSure() : ""}
    </div>
  );
}

export default ProfileFullWorkout;
