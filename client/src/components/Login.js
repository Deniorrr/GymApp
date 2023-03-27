import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import Undraw_image from "../assets/undraw1.svg";
import "./style/Register.scss";
function Login() {
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
				<p className="caption">Soon on mobile!</p>
			</aside>
			<main>
				<h2>Login</h2>
				<p id="registerLink">
					No account?<NavLink to="/profile"> Register</NavLink>
				</p>
				<div className="form">
					<label for="nickname">
						<p>Nickname</p>
					</label>
					<input type="text" id="nickname" />

					<label for="password">
						<p>Password</p>
					</label>
					<input type="password" id="password" />
					<button>Login</button>
				</div>
			</main>
		</div>
	);
}

export default Login;
