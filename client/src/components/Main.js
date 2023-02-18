import React from "react";
import MainCard from "./MainCard";
import { NavLink } from "react-router-dom";
import "./style/Main.scss";
function Main() {
	return (
		<>
			<main>
				<NavLink to="/profile">
					<MainCard header="My Profile" subHeader="Overall informations" />
				</NavLink>
				<NavLink to="/ok">
					<MainCard header="My Profile" subHeader="Overall informations" />
				</NavLink>
				<NavLink to="/">
					<MainCard header="My Profile" subHeader="Overall informations" />
				</NavLink>
				<NavLink to="/ok">
					<MainCard header="My Profile" subHeader="Overall informations" />
				</NavLink>
			</main>
		</>
	);
}

export default Main;
