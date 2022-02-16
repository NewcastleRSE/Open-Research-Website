import React from "react";

const BooleanInput = (props) => {
  return (
    <div>
      <label>{props.label}</label>

      <div class="form-group radio_input">
        <label class="container_radio">
          {props.a}
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
