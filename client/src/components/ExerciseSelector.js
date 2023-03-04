import React from "react";

function ExerciseSelector(props) {
	const exercisesDatabase = [
		{ key: 1, name: "Bench press", type: "free-weight" },
		{ key: 2, name: "pull up", type: "bodyweight" },
	];

	const renderExerciseList = () => {
		const exerciseList = exercisesDatabase.map((exercise) => (
			<div className="exercise" key={exercise.key}>
				{exercise.name}
				<button
					onClick={() => {
						props.addExercise(exercise);
						props.closeSelector();
					}}
				>
					Add exercise
				</button>
			</div>
		));
		return exerciseList;
	};
	return (
		<div>
			<button onClick={() => props.closeSelector()}>close</button>
			<div className="exerciseList">{renderExerciseList()}</div>
		</div>
	);
}

export default ExerciseSelector;
