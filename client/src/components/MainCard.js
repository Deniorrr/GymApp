import React from "react";
import profileIcon from "../assets/profile.png";

function MainCard(props) {
	return (
		<div className="mainCard">
			<aside>
				<figure className="profileIcon">
					<img src={profileIcon} alt="profile Icon" />
				</figure>
			</aside>
			<article>
				<h1>{props.header}</h1>
				<h3>Overall informations</h3>
			</article>
		</div>
	);
}

export default MainCard;
