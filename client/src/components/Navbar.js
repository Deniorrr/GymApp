import React from "react";
import "./style/Navbar.scss";
import logo from "../assets/logo.png";
import { Outlet } from "react-router-dom";

export default function Navbar() {
	return (
		<>
			<nav>
				<aside>
					<img src={logo} alt="logo" />
					<h1>Gym App</h1>
				</aside>
				{/* <ul>
				<li>
				<a href="/">asd</a>
				</li>
				<li>
				<a href="/">asd</a>
				</li>
				<li>
				<a href="/">asd</a>
				</li>
			</ul> */}
			</nav>
			<Outlet />
		</>
	);
}
