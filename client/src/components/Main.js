import React, { useState, useEffect } from "react";
import MainCard from "./MainCard";
import { NavLink } from "react-router-dom";
import axios from "axios";
import "./style/Main.scss";
function Main() {
  const [lastWorkoutDate, setLastWorkoutDate] = useState("");

  const getLastWorkoutDate = () => {
    axios
      .post("http://localhost:3001/getLastWorkoutDate", {
        userUuid: localStorage.getItem("uuid"),
      })
      .then((response) => {
        setLastWorkoutDate(response.data);
      });
  };
  useEffect(getLastWorkoutDate, []);

  return (
    <>
      <main className="home">
        <NavLink to="/newWorkout">
          <MainCard
            header="Add Workout"
            subHeader={"Last wokrout: " + lastWorkoutDate}
          />
        </NavLink>
        <NavLink to="/profile">
          <MainCard
            header="Workout history"
            subHeader="View your done workouts"
          />
        </NavLink>
        <NavLink to="/">
          <MainCard header="Add exercise" subHeader="Add yor custom exercise" />
        </NavLink>
        <NavLink to="/ok">
          <MainCard header="About" subHeader="App description" />
        </NavLink>
      </main>
    </>
  );
}

export default Main;
