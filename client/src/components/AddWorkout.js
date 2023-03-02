import React, { useState } from "react";
import "./style/AddWorkout.scss";
import BackButton from "./BackButton";
import WorkoutExercise from "./WorkoutExercise";

function AddWorkout() {
	const [exercises, setExercises] = useState([]);
	const [exerciseCount, setExerciseCount] = useState(0);
	const addExercise = () => {
		setExercises(
			[...exercises, { id: exerciseCount, sets: [] }],
			setExerciseCount(exerciseCount + 1)
		);
	};
	const deleteExercise = (id) => {
		setExercises(exercises.filter((exercise) => exercise.id !== id));
	};
	const addInputData = (inputData, id, exerciseId) => {
		//adds data from row of inputs into one collectible state
		//console.log(`id: ${id}, data: ${inputData}, exerciseId ${exerciseId}`);
		let exercise = exercises.find((x) => x.id === exerciseId).sets;
		exercise[id] = { id, inputData };
		setExercises([
			...exercises.filter((x) => x.id !== exerciseId),
			{
				id: exerciseId,
				sets: exercise,
			},
		]);
	};
	const renderExercises = () => {
		const elements = exercises.map((exercise) => (
			<WorkoutExercise
				key={exercise.id}
				id={exercise.id}
				deleteExercise={(id) => deleteExercise(id)}
				onSave={(inputData, id, exerciseId) =>
					addInputData(inputData, id, exerciseId)
				}
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
