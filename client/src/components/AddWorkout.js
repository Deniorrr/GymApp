import React, { useState, useEffect } from "react";
import "./style/AddWorkout.scss";
import BackButton from "./BackButton";
import WorkoutExercise from "./WorkoutExercise";
import ExerciseSelector from "./ExerciseSelector";
import axios from "axios";

function AddWorkout() {
	const [exercises, setExercises] = useState([]);
	const [displayExerciseList, setDisplayExerciseList] = useState(false);
	const [exerciseCount, setExerciseCount] = useState(0);
	const [exerciseList, setExerciseList] = useState([])
	const displayExerciseSelector = () => {
		setDisplayExerciseList(true);
		//
		// setExercises(
		// 	[...exercises, { id: exerciseCount, sets: [] }],
		// 	setExerciseCount(exerciseCount + 1)
		// );
	};

	
	const getExercisesFromDB = ()=>{
		axios.post("http://localhost:3001/getexercises", {
			userUuid: localStorage.getItem("uuid"),
			workoutData: exercises
		}).then((response) => {
			response.data.forEach(x=>{
				console.log({key: x.id, name: x.name});
				setExerciseList(y=>[...y, {key: x.id, name: x.name}])
				//exerciseList.push({key: x.id, name: x.name})
			})
		})
	};
	useEffect(()=>{
		getExercisesFromDB();
	}, [])
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
	const userId = 0;

	const submitData = () => {
		axios.post("http://localhost:3001/addworkout", {
			userId: userId,//potem ssid
			workoutData: exercises
		})
		// .then((response) => {
		// 	if (response.data.error == undefined) {
		// 		navigate("/login");
		// 	} else {
		// 		setRequestError(response.data.error);
		// 	}
		// })
		// .catch((error) => {
		// 	console.log(error);
		// });
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
						exerciseList={exerciseList}
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
					<div className="bottomButtons">
						<button
							className="acceptButton"
							onClick={() => displayExerciseSelector()}
						>
							Add exercise
						</button>

						<button className="redButton">Cancel workout</button>

						<button
							className="acceptButton endWorkoutButton"
							onClick={() => submitData()}
						>
							End workout
						</button>
					</div>
				</div>
			</div>
		</>
	);
}

export default AddWorkout;
