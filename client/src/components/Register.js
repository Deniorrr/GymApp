import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import Undraw_image from "../assets/undraw2.svg";
import axios from "axios";
import "./style/Register.scss";

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [requestError, setRequestError] = useState(false);
  const navigate = useNavigate();
  const submitForm = () => {
    axios
      .post("http://localhost:3001/register", {
        username: username,
        email: email,
        password: password,
      })
      .then((response) => {
        if (response.data.error == undefined) {
          navigate("/login");
        } else {
          setRequestError(response.data.error);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const renderError = () => {
    if (requestError) {
      return <div id="error">{requestError}</div>;
    }
  };
  return (
    <div className="container" id="registerPanel">
      <aside>
        <div className="logo">
          <img src={logo} alt="logo" />
          <h1>Gym App</h1>
        </div>
        <figure>
          <img src={Undraw_image} alt="People exercising" />
        </figure>
        <p className="caption">Start documenting your progress today!</p>
      </aside>
      <main>
        <h2>Register</h2>
        <p id="loginLink">
          Already registered? <NavLink to="/login"> Log In</NavLink>
        </p>
        {renderError()}
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

          <label htmlFor="email">
            <p>Email address</p>
          </label>
          <input
            type="email"
            id="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />

          <label htmlFor="password">
            <p>Password</p>
          </label>
          <input
            type="password"
            id="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button onClick={() => submitForm()}>Register</button>
        </div>
      </main>
    </div>
  );
}

export default Register;
