import React, { useRef } from "react";
import "./style/AddWorkout.scss";
import BackButton from "./BackButton";
import WorkoutExercise from "./WorkoutExercise";

function AddWorkout() {
	const editableTitle = useRef(null);

	const handleKeyPress = (event) => {
		if (event.key === "Enter") {
			editableTitle.current.blur();
		}
	};
	//eslint-disable-next-line
	return (
		<>
			<BackButton />
			<div className="container AddWorkout">
				<h3
					ref={editableTitle}
					contentEditable="true"
					onKeyDown={handleKeyPress}
				>
					Midday workout
				</h3>
				<WorkoutExercise />
				<WorkoutExercise />
				<WorkoutExercise />
				<button>Add exercise</button>
				<button>Cancel workout</button>
				<button>End workout</button>
			</div>
		</>
	);
}

export default AddWorkout;
