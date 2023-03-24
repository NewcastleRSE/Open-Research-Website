import React from "react";

const BooleanInput = (props) => {
  return (
    <div>
      <div class="form-group radio_input">
        <label>{props.label}</label>
        <label class="container_radio">
          {props.a}
          <span className={`error ${!props.error ? "hidden" : ""}`}>
            {props.error}
          </span>
          <input
            type="radio"
            name={props.name}
            value={props.a}
            class="required"
            checked={props.value === props.a}
            onChange={props.onChange}
          />
          <span class="checkmark"></span>
        </label>
        <label class="container_radio">
          {props.b}
          <input
            type="radio"
            name={props.name}
            value={props.b}
            class="required"
            checked={props.value === props.b}
            onChange={props.onChange}
          />
          <span class="checkmark"></span>
        </label>
      </div>
    </div>
  );
};

export default BooleanInput;
