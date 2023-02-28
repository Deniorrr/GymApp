import React, { useState } from "react";
import WorkoutSet from "./WorkoutSet";
function WorkoutExercise(props) {
	const [sets, setSets] = useState([{ id: 0 }]);
	const [setCount, setSetCount] = useState(1);
	const addSet = () => {
		setSets([...sets, { id: setCount }], setSetCount(setCount + 1));
	};
	const renderSets = () => {
		const elements = sets.map((set) => <WorkoutSet key={set.id} id={set.id} />);
		return elements;
	};
	return (
		<>
			<h4>{props.id}</h4>
			<table className="WorkoutExercise">
				<tbody>
					<tr>
						<td className="weight">weight</td>
						<td className="weight">reps</td>
						<td className="weight">RPE</td>
					</tr>
					{renderSets()}
				</tbody>
			</table>
			<div className="AddSet">
				<button onClick={() => addSet()}>Add set</button>
			</div>
		</>
	);
}

export default WorkoutExercise;
