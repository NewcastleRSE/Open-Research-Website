import React from "react";
import { useParams } from "react-router-dom";

function LeftContent(props) {
  let { id } = useParams();

  const displayUuid = () => {
    if (id) {
      return (
        <>
          <h3>Your UUID is:</h3>
          <p>{id}</p>
        </>
      );
    } else {
      return null;
    }
  };

  return (
    <div>
      {displayUuid()}
      <figure>
        <img src={props.img} alt="" className="img-fluid" />
      </figure>
      <h2>{props.heading}</h2>
      <p>{props.subtext}</p>
      <a href="/about" className="btn_1 rounded">
        About Us
      </a>
    </div>
  );
}

export default LeftContent;
