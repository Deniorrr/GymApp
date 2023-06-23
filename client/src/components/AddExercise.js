import React, { useState, useEffect } from "react";
import "./style/AddExercise.scss";
import BackButton from "./BackButton";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddExercise() {
  const navigate = useNavigate();
  const [exerciseList, setExerciseList] = useState([]);
  const [exerciseInput, setExerciseInput] = useState("");
  const getExercisesFromDB = () => {
    axios
      .post("http://localhost:3001/getexercises", {
        userUuid: localStorage.getItem("uuid"),
      })
      .then((response) => {
        let exercises = [];
        response.data.forEach((x) => {
          exercises.push({ key: x.id, name: x.name, user_id: x.user_id });
        });
        setExerciseList(exercises);
      });
  };
  useEffect(() => {
    getExercisesFromDB();
  }, []);

  const addExercise = () => {
    console.log(exerciseInput);
    axios
      .post("http://localhost:3001/addExercise", {
        userUuid: localStorage.getItem("uuid"),
        exerciseName: exerciseInput,
      })
      .then(() => {
        window.location.reload(false);
      })
      .catch((error) => {
        if (error.response.status === 401) navigate("/login");
      });
  };
  useEffect(() => {
    getExercisesFromDB();
  }, []);

  const renderExerciseList = (i) => {
    let exercises;
    if (i === 0) {
      exercises = exerciseList.filter((exercise) => exercise.user_id === 0);
    } else {
      exercises = exerciseList.filter((exercise) => exercise.user_id !== 0);
    }
    const elements = exercises.map((exercise) => <li>{exercise.name}</li>);
    return elements;
  };

  return (
    <>
      <BackButton />
      <div className="container" id="addExercise">
        <div className="list">
          <h2>Global exercises</h2>
          <ul>{renderExerciseList(0)}</ul>

          <h2>Your exercises</h2>
          <ul>{renderExerciseList(1)}</ul>
        </div>
        <div className="form">
          <h2>Add you exercise here</h2>
          <input
            type="text"
            onChange={(e) => {
              setExerciseInput(e.target.value);
            }}
          />
          <button onClick={() => addExercise()}>Add</button>
        </div>
      </div>
    </>
  );
}

export default AddExercise;
