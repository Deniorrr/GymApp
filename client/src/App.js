import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import Profile from "./components/Profile";
import AddWorkout from "./components/AddWorkout";
import Register from "./components/Register";
import Login from "./components/Login";
import "./App.scss";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route path="/" element={<Main />} />
            <Route path="profile" element={<Profile />} />
            <Route path="newWorkout" element={<AddWorkout />} />
          </Route>
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

// create small exercise database
// select exercise while adding it
// create custom layouts for different types of exercise
// create register and login
// design database
// create register and login backend with password encrypting
// add workout backend
// view records
