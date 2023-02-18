import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import Profile from "./components/Profile";
import "./App.scss";

function App() {
	return (
		<div>
			<Navbar />
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Main />} />
					<Route path="profile" element={<Profile />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;

// checklist:
// design frontend
// main App
// 	Navbar
// 		login/logout
// 	My profile
// 	History
// 	Start Workout
// 	measurments

// create frontend
// design backend
// create backend
