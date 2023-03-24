import React from "react";

const NumberInput = (props) => {
  return (
    <div className="col-4">
      <div className="form-group">
        <span className={`error ${!props.error ? "hidden" : ""}`}>
          {props.error}
        </span>
        <input
          type="number"
          name={props.name}
          placeholder={props.placeholder}
          value={props.value}
          onChange={props.onChange}
          min="0"
          className={`form-control ${props.error ? "red-outline" : ""}`}
        />
      </div>
    </div>
  );
};

export default NumberInput;
