import React from "react";

function LeftContent() {
  return (
    <div>
      <figure>
        <img
          src={`${import.meta.env.VITE_LOCAL_URL}/img/info_graphic_1.svg`}
          alt=""
          className="img-fluid"
        />
      </figure>
      <h2>Open Research Tool</h2>
      <p>
        Using this tool you can learn how to increase the openess of your
        research. As you fill out the forms on the right, our system will take
        all of your input and provide advise on how best you can increase it's
        openess. Please be honest and include as much information as possible so
        that we can provide you with an accurate assessment.
      </p>
      <a href="/about" className="btn_1 rounded">
        About Us
      </a>
    </div>
  );
}

export default LeftContent;
