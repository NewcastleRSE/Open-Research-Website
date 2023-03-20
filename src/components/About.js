import React from "react";

function About() {
  return (
    <div className="container-fluid full-height">
      <div className="content-left-wrapper">
        <a href="/" id="logo">
          <img src="img/ncl_logo.png" alt="" width="48" height="56" />
        </a>
        <div className="copy">
          <a href="https://www.ncl.ac.uk" target="_blank">
            © 2023 Newcastle University
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
