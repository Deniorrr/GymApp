import React from "react";

function ProfileWorkout(props) {
  const data = props.workout;
  const renderExercises = () => {
    const elements = data.exercises.map((exercise) => (
      <div key={exercise.key} className="exercise">
        <p>{exercise.name}</p>
        <p>{exercise.count}</p>
      </div>
    ));
    return elements;
  };

  return (
    <div className="workout" onClick={() => props.onClick()}>
      <div className="workoutTitle">
        <h1>{data.name}</h1>
        <h3>{data.date}</h3>
      </div>

      {renderExercises()}
    </div>
  );
}

export default ProfileWorkout;
