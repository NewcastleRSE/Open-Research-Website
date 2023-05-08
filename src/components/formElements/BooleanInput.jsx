import React from "react";

const BooleanInput = (props) => {
  return (
    <div>
      <div className="form-group radio_input">
        <label>{props.label}</label>
        <label className="container_radio">
          {props.a}
          <span className={`error ${!props.error ? "hidden" : ""}`}>
            {props.error}
          </span>
          <input
            type="radio"
            name={props.name}
            value={props.a}
            className="required"
            checked={props.value === props.a}
            onChange={props.onChange}
          />
          <span className="checkmark"></span>
        </label>
        <label className="container_radio">
          {props.b}
          <input
            type="radio"
            name={props.name}
            value={props.b}
            className="required"
            checked={props.value === props.b}
            onChange={props.onChange}
          />
          <span className="checkmark"></span>
        </label>
      </div>
    </div>
  );
};

export default BooleanInput;
