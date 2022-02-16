import React from "react";

function LeftContent(props) {
  return (
    <div>
      <figure>
        <img src={props.img} alt="" className="img-fluid" />
      </figure>
      <h2>{props.heading}</h2>
      <p>{props.subtext}</p>
      <a href="#0" className="btn_1 rounded">
        Start Now!
      </a>
    </div>
  );
}

export default LeftContent;
