import React from "react";

function MainCard(props) {
  return (
    <div className="mainCard">
      <aside>
        <figure className="profileIcon">
          <img src={props.image} alt="profile Icon" />
        </figure>
      </aside>
      <article>
        <h1>{props.header}</h1>
        <h3>{props.subHeader}</h3>
      </article>
    </div>
  );
}

export default MainCard;
