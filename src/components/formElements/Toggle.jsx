import React from "react";
const Toggle = ({ text, onClick }) => {
  return (
    <div>
      <button type="button" className="float-right forward" onClick={onClick}>
        {text}
      </button>
    </div>
  );
};

export default Toggle;
