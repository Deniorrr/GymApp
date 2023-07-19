import React from "react";
import BackButton from "./BackButton";
import "./style/About.scss";
import register_screen from "../assets/register_screen.png";
import login_screen from "../assets/login_screen.png";
import main_screen from "../assets/main_screen.png";
import addExercise_screen from "../assets/AddExercise_screen.png";
import addWorkout_screen from "../assets/newWorkout_screen.png";
import history_screen from "../assets/WorkoutHistory_screen.png";
import historyDetails_screen from "../assets/WorkoutDetails_screen.png";

function About() {
  return (
    <>
      <div className="container" id="about">
        <header>
          <h1>About</h1>
        </header>
        <section>
          <p>
            Gym app is a place, where you can register your workout sessions and
            view them later to track your progress.
          </p>
        </section>
        <section>
          <h1>How to use?</h1>
          <p>
            First of all you have to register and log in using a form after
            opening the app, but I guess you have already done this, because
            otherwise you wouldn't see this.
          </p>
          <p>
            Don't worry about your personal data! It is encrypted, so even we
            can't see, what is your password.
          </p>
          <div className="images">
            <figure>
              <img src={register_screen} alt="Register screenshot"></img>
            </figure>
            <figure>
              <img src={login_screen} alt="Login screenshot"></img>
            </figure>
          </div>
          <p>
            Then you will see the main page, where you can choose to add your
            workout, add custom exercise, or view your workouts history. You can
            also navigate to this page from there.
          </p>
          <figure>
            <img src={main_screen} alt="Main screenshot"></img>
          </figure>
          <p>
            First i recommend opening "Add exercise" to make sure that all of
            the exercises, you're interested in, are on the list. If not, then
            feel free to add them there.
          </p>
          <figure>
            <img src={addExercise_screen} alt="Add exercise screenshot"></img>
          </figure>
          <div className="vertical">
            <p>
              After choosing "Add Workout" you will see a list of your exercises
              from which you can select your first exercise of the workout. then
              you can add new sets, select weight of your equipment, reps, RPE
              and another exercise.
              <br />
              <span>
                Remember to confirm every set clicking by clicking the tick on
                the right side!
              </span>
            </p>
            <figure>
              <img src={addWorkout_screen} alt="Add workout screenshot"></img>
            </figure>
          </div>
          <p>
            After ending your workout you can view it later in your history.
            There you can also click the workout to see the details and delete
            it if you want.
          </p>
          <div className="images">
            <figure>
              <img src={history_screen} alt="History screenshot"></img>
            </figure>
            <figure>
              <img
                src={historyDetails_screen}
                alt="History detailed screenshot"
              ></img>
            </figure>
          </div>
        </section>
      </div>

      <BackButton />
    </>
  );
}

export default About;
