import React from "react";

const NumberInput = (props) => {
  return (
    <div class="col-4">
      <div class="form-group">
        <span className={`error ${!props.error ? "hidden" : ""}`}>
          {props.error}
        </span>
        <input
          type="number"
          name={props.name}
          class="form-control"
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
