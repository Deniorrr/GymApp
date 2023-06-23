import React, { useState, useEffect } from "react";
import MainCard from "./MainCard";
import { NavLink } from "react-router-dom";
import axios from "axios";
import "./style/Main.scss";
import history from "../assets/history.png";
import plus from "../assets/plusSymbol.png";
import { useNavigate } from "react-router-dom";
function Main() {
  const [lastWorkoutDate, setLastWorkoutDate] = useState("");
  const navigate = useNavigate();
  const getLastWorkoutDate = () => {
    axios
      .post("http://localhost:3001/getLastWorkoutDate", {
        userUuid: localStorage.getItem("uuid"),
      })
      .then((response) => {
        setLastWorkoutDate(response.data);
      })
      .catch((error) => {
        if (error.response.status === 401) navigate("/login");
      });
  };
  useEffect(getLastWorkoutDate, []);

  return (
    <>
      <main className="home">
        <NavLink to="/newWorkout">
          <MainCard
            header="Add Workout"
            subHeader={"Last workout: " + lastWorkoutDate}
            image={plus}
          />
        </NavLink>
        <NavLink to="/profile">
          <MainCard
            header="Workout history"
            subHeader="View your done workouts"
            image={history}
          />
        </NavLink>
        <div className="trzeci">
          <NavLink to="/AddExercise">
            <MainCard
              header="Add exercise"
              subHeader="Add yor custom exercise"
              image={plus}
            />
          </NavLink>
        </div>
        {/* <NavLink to="/about">
          <MainCard header="About" subHeader="App description" />
        </NavLink> */}
      </main>
      <footer>&copy; Denis Poczęty 2023</footer>
    </>
  );
}

export default Main;
