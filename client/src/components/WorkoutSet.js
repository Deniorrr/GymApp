import React from "react";

function WorkoutSet() {
	return (
		<tr className="WorkoutSet">
			<td className="weight">
				<input type="number" placeholder="weight"></input>
			</td>
			<td className="reps">
				<input type="number" placeholder="reps"></input>
			</td>
			<td className="rpe">
				<select>
					<option>10</option>
					<option>9.5</option>
					<option>9</option>
					<option>8.5</option>
					<option>8</option>
					<option>7.5</option>
					<option>7</option>
				</select>
			</td>
			<td>
				<button>delete set</button>
			</td>
			<td>
				<button>Confirm set</button>
			</td>
		</tr>
	);
}

export default WorkoutSet;
