import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import Undraw_image from "../assets/undraw1.svg";
import "./style/Register.scss";
function Login() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const submitForm = () => {
		axios
			.post("http://localhost:3001/login", {
				username: username,
				password: password,
			})
			.then((response) => {
				console.log(response);
			});
	};
	return (
		<div className="container" id="registerPanel">
			<aside>
				<div className="logo">
					<img src={logo} alt="logo" />
					<h1>Gym App</h1>
				</div>
				<figure>
					<img src={Undraw_image} alt="Mobile phone" />
				</figure>
				<p className="caption">Soon on mobile!</p>
			</aside>
			<main>
				<h2>Login</h2>
				<p id="registerLink">
					No account?<NavLink to="/profile"> Register</NavLink>
				</p>
				<div className="form">
					<label htmlFor="username">
						<p>Username</p>
					</label>
					<input
						type="text"
						id="username"
						onChange={(e) => {
							setUsername(e.target.value);
						}}
					/>

					<label for="password">
						<p>Password</p>
					</label>
					<input 
						type="password" 
						id="password" 
						onChange={(e) => {
							setPassword(e.target.value);
						}}/>
					<button>Login</button>
				</div>
			</main>
		</div>
	);
}

export default Login;
