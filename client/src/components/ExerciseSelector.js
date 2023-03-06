import React from "react";
import closeIcon from "../assets/closeIcon.svg";
import plusSymbol from "../assets/plusSymbol.png";
function ExerciseSelector(props) {
	const exercisesDatabase = [
		{ key: 1, name: "Bench press", type: "free-weight" },
		{ key: 2, name: "pull up", type: "bodyweight" },
	];

	const renderExerciseList = () => {
		const exerciseList = exercisesDatabase.map((exercise) => (
			<div className="exercise" key={exercise.key}>
				<p>{exercise.name}</p>
				<button
					onClick={() => {
						props.addExercise(exercise);
						props.closeSelector();
					}}
				>
					<img src={plusSymbol} />
				</button>
			</div>
		));
		return exerciseList;
	};
	return (
		<div className="selectorWrapper">
			<div className="exerciseSelector">
				<div className="buttonWrapper">
					<button className="closeButton" onClick={() => props.closeSelector()}>
						<img src={closeIcon} alt="Close Selector" />
					</button>
				</div>
				<div className="exerciseList">{renderExerciseList()}</div>
			</div>
		</div>
	);
}

export default ExerciseSelector;
