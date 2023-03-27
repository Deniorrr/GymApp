import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import Undraw_image from "../assets/undraw2.svg";
import "./style/Register.scss";
function Register() {
	return (
		<div className="container" id="registerPanel">
			<aside>
				<div className="logo">
					<img src={logo} alt="logo" />
					<h1>Gym App</h1>
				</div>
				<figure>
					<img src={Undraw_image} alt="stock Image" />
				</figure>
				<p className="caption">Start documenting your progress today!</p>
			</aside>
			<main>
				<h2>Register</h2>
				<p id="loginLink">
					Already registered? <NavLink to="/profile"> Log In</NavLink>
				</p>
				<div className="form">
					<label for="nickname">
						<p>Nickname</p>
					</label>
					<input type="text" id="nickname" />

					<label for="email">
						<p>Email address</p>
					</label>
					<input type="email" id="email" />

					<label for="password">
						<p>Password</p>
					</label>
					<input type="password" id="password" />
					<button>Register</button>
				</div>
			</main>
		</div>
	);
}

export default Register;
