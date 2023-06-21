import React from "react";
import axios from "axios";
import closeIcon from "../assets/closeIcon.svg";

function ProfileFullWorkout(props) {
  const data = props.data;
  const getWorkoutDetails = () => {
    axios
      .post("http://localhost:3001/getFullWorkout", {
        userUuid: localStorage.getItem("uuid"),
      })
      .then((response) => {
        //generateWorkoutState(response.data);
      });
  };

  return (
    <div className="ProfileFullWorkout">
      <div className="main">
        <div className="buttonWrapper">
          <button className="closeButton" onClick={() => props.closeWorkout()}>
            <img src={closeIcon} alt="Close Selector" />
          </button>
          <button className="closeButton" onClick={() => props.closeWorkout()}>
            <img src={closeIcon} alt="Close Selector" />
          </button>
        </div>
        <h3>{data.name}</h3>
        <p>{data.date2}</p>
      </div>
    </div>
  );
}

export default ProfileFullWorkout;
