import React from "react";
import WorkoutSet from "./WorkoutSet";
function WorkoutExercise() {
	return (
		<>
			<table className="WorkoutExercise">
				<tbody>
					<tr>
						<td className="weight">weight</td>
						<td className="weight">reps</td>
						<td className="weight">RPE</td>
					</tr>
					<WorkoutSet />
					<WorkoutSet />
					<WorkoutSet />
				</tbody>
			</table>
			<div className="AddSet">
				<button>Add set</button>
			</div>
		</>
	);
}

export default WorkoutExercise;
