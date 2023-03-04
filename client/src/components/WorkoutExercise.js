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
		<>
			<h4>{props.name}</h4>
			<table className="WorkoutExercise">
				<tbody>
					<tr>
						<td className="weight">weight</td>
						<td className="reps">reps</td>
						<td className="rpe">RPE</td>
					</tr>
					{renderSets()}
				</tbody>
			</table>
			<div className="AddSet">
				<button onClick={() => addSet()}>Add set</button>
			</div>
			<div className="DeleteExercise">
				<button onClick={() => props.deleteExercise(props.id)}>
					Delete Exercise
				</button>
			</div>
		</>
	);
}

export default WorkoutExercise;
