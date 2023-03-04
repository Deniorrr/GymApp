import React, { useState } from "react";
import "./style/AddWorkout.scss";
import BackButton from "./BackButton";
import WorkoutExercise from "./WorkoutExercise";
import ExerciseSelector from "./ExerciseSelector";

function AddWorkout() {
	const [exercises, setExercises] = useState([]);
	const [displayExerciseList, setDisplayExerciseList] = useState(false);
	const [exerciseCount, setExerciseCount] = useState(0);
	const displayExerciseSelector = () => {
		setDisplayExerciseList(true);
		//
		// setExercises(
		// 	[...exercises, { id: exerciseCount, sets: [] }],
		// 	setExerciseCount(exerciseCount + 1)
		// );
	};
	const closeExerciseSelector = () => {
		setDisplayExerciseList(false);
	};
	const addExerciseToForm = (exercise) => {
		setExercises(
			[...exercises, { id: exerciseCount, sets: [], name: exercise.name }],
			setExerciseCount(exerciseCount + 1)
		);
	};
	const deleteExercise = (id) => {
		setExercises(exercises.filter((exercise) => exercise.id !== id));
	};
	const addInputData = (inputData, id, exerciseId) => {
		let exerciseCopy = exercises.find((x) => x.id === exerciseId);
		exerciseCopy.sets[id] = { id, inputData };
		setExercises(
			exercises.map((x) => {
				if (x.id !== exerciseId) {
					return x;
				} else {
					return exerciseCopy;
				}
			})
		);
		console.log("data added");
	};
	const deleteSet = (id, exerciseId) => {
		let exerciseCopy = exercises.find((x) => x.id === exerciseId);
		delete exerciseCopy.sets[id];
		setExercises(
			exercises.map((x) => {
				if (x.id !== exerciseId) {
					return x;
				} else {
					return exerciseCopy;
				}
			})
		);
		console.log("data deleted");
	};
	const renderExercises = () => {
		const elements = exercises.map((exercise) => (
			<WorkoutExercise
				key={exercise.id}
				id={exercise.id}
				name={exercise.name}
				deleteExercise={(id) => deleteExercise(id)}
				onSave={(inputData, id, exerciseId) =>
					addInputData(inputData, id, exerciseId)
				}
				deleteData={(id, exerciseId) => {
					deleteSet(id, exerciseId);
				}}
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
				{displayExerciseList && (
					<ExerciseSelector
						addExercise={(exercise) => addExerciseToForm(exercise)}
						closeSelector={() => closeExerciseSelector()}
					/>
				)}
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
						<button className="" onClick={() => displayExerciseSelector()}>
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
