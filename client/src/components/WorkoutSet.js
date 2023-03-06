import React, { useState } from "react";
import acceptIcon from "../assets/tickIcon.svg";
import bin from "../assets/bin.png";

function WorkoutSet(props) {
	const [confirmed, setConfirmed] = useState(false);
	const [weight, setWeight] = useState(0);
	const [reps, setReps] = useState(0);
	const [rpe, setRpe] = useState(10);
	const switchConfirm = () => {
		if (!confirmed) {
			saveRecord();
		} else {
			deleteRecord();
		}
		setConfirmed(!confirmed);
	};

	const onChangeWeight = (e) => {
		if (confirmed) {
			setConfirmed(false);
			deleteRecord();
		}
		setWeight(e.target.value);
	};
	const onChangeReps = (e) => {
		if (confirmed) {
			setConfirmed(false);
			deleteRecord();
		}
		setReps(e.target.value);
	};
	const onChangeRpe = (e) => {
		if (confirmed) {
			setConfirmed(false);
			deleteRecord();
		}
		setRpe(e.target.value);
	};

	const saveRecord = () => {
		props.onSave({ weight, reps, rpe }, props.id);
	};
	const deleteRecord = () => {
		props.onDelete(props.id);
	};
	return (
		<tr className={"WorkoutSet " + (confirmed ? "confirmed" : "")}>
			<td className="weight">
				<input
					value={weight}
					onChange={(e) => onChangeWeight(e)}
					type="number"
					placeholder={props.id}
				></input>
			</td>
			<td className="reps">
				<input
					value={reps}
					onChange={(e) => onChangeReps(e)}
					type="number"
					placeholder="reps"
				></input>
			</td>
			<td className="rpe">
				<select value={rpe} onChange={(e) => onChangeRpe(e)}>
					<option value="10">10</option>
					<option value="9.5">9.5</option>
					<option value="9">9</option>
					<option value="8.5">8.5</option>
					<option value="8">8</option>
					<option value="7.5">7.5</option>
					<option value="7">7</option>
				</select>
			</td>
			<td>
				<button
					onClick={() => {
						props.deleteSet(props.id);
						deleteRecord();
					}}
				>
					<img src={bin} alt="Delete Set" />
				</button>
			</td>
			<td>
				<button onClick={() => switchConfirm()}>
					<img src={acceptIcon} alt="Accept Set" />
				</button>
			</td>
		</tr>
	);
}

export default WorkoutSet;
