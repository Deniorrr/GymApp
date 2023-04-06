import React from "react";
import "./style/Navbar.scss";
import logo from "../assets/logo.png";
import logoutIcon from "../assets/logout1.png";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const logout = () => {
    navigate("/login");
  };
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
        <div id="logout">
          <button onClick={() => logout()}>
            <img src={logoutIcon} alt="Logout" />
          </button>
        </div>
      </nav>
      <Outlet />
    </>
  );
}
