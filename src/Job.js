import React from "react";
import "./job.css";

function Job(props) {
  return (
    <div className={props.className}>
      <div className="container">
        <p>{props.title}</p>
        <div>
          <span>{props.contractType}</span>
          <span> - </span>
          <span>{props.country}</span>
          <span> - </span>
          <span>{props.city}</span>
        </div>
      </div>
    </div>
  );
}

export default Job;
