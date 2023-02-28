import React, { useState } from "react";
import "./style/AddWorkout.scss";
import BackButton from "./BackButton";
import WorkoutExercise from "./WorkoutExercise";

function AddWorkout() {
	const [exercises, setExercises] = useState([]);
	const [exerciseCount, setExerciseCount] = useState(0);
	const addExercise = () => {
		setExercises(
			[...exercises, { id: exerciseCount, sets: {} }],
			setExerciseCount(exerciseCount + 1)
		);
	};
	const deleteExercise = (id) => {
		setExercises(exercises.filter((exercise) => exercise.id !== id));
	};
	const renderExercises = () => {
		const elements = exercises.map((exercise) => (
			<WorkoutExercise
				key={exercise.id}
				id={exercise.id}
				deleteExercise={(id) => deleteExercise(id)}
			/>
		));
		return elements;
	};

	// const editableTitle = useRef(null);

	// const handleKeyPress = (event) => {
	// 	if (event.key === "Enter") {
	// 		editableTitle.current.blur();
	// 	}
	// };

	const collectData = () => {
		console.log(exercises);
	};
	return (
		<>
			<BackButton />
			<div className="container AddWorkout">
				<h3
				// ref={editableTitle}
				// contentEditable="true"
				// onKeyDown={handleKeyPress}
				>
					Midday workout
				</h3>
				<div className="form">
					{renderExercises()}
					<div className="ButtonWrapper">
						<button className="" onClick={() => addExercise()}>
							Add exercise
						</button>
					</div>
					<div className="ButtonWrapper">
						<button>Cancel workout</button>
					</div>
					<div className="ButtonWrapper">
						<button onClick={() => collectData()}>End workout</button>
					</div>
				</div>
			</div>
		</>
	);
}

export default AddWorkout;
