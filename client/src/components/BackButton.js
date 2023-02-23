import React from "react";
import { NavLink } from "react-router-dom";
import backArrow from "../assets/backArrow.svg";
function BackButton() {
	return (
		<NavLink to="/">
			<button className="backButton">
				<img src={backArrow} alt="backButton" />
			</button>
		</NavLink>
	);
}

export default BackButton;
