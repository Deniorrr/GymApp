import React, { useState } from "react";
import WorkoutSet from "./WorkoutSet";
function WorkoutExercise(props) {
	const [sets, setSets] = useState([{ id: 0 }]);
	const [setCount, setSetCount] = useState(1);
	const addSet = () => {
		setSets([...sets, { id: setCount }], setSetCount(setCount + 1));
	};
	const renderSets = () => {
		const elements = sets.map((set) => (
			<WorkoutSet
				key={set.id}
				id={set.id}
				deleteSet={(id) => deleteSet(id)}
				onSave={(inputData, id) => addInputData(inputData, id)}
				onDelete={(id) => deleteData(id)}
			/>
		));
		return elements;
	};
	const deleteSet = (id) => {
		setSets(sets.filter((set) => set.id !== id));
	};
	const addInputData = (inputData, id) => {
		props.onSave(inputData, id, props.id);
	};
	const deleteData = (id) => {
		props.deleteData(id, props.id);
	};
	return (
		<div className="exercise">
			<h4>{props.name}</h4>
			<table className="WorkoutExercise">
				<tbody>
					<tr>
						<th className="weight">weight</th>
						<th className="reps">reps</th>
						<th className="rpe">RPE</th>
					</tr>
					{renderSets()}
				</tbody>
			</table>
			<div className="exerciseButtons">
				<div className="DeleteExercise">
					<button
						className="redButton"
						onClick={() => props.deleteExercise(props.id)}
					>
						Delete Exercise
					</button>
				</div>
				<div>
					<button className="addSetButton" onClick={() => addSet()}>
						Add set
					</button>
				</div>
			</div>
		</div>
	);
}

export default WorkoutExercise;
