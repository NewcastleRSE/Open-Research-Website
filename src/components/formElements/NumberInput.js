import React from "react";

const NumberInput = (props) => {
  return (
    <div class="col-4">
      <div class="form-group">
        <input
          type="number"
          name={props.name}
          class="form-control"
          placeholder={props.placeholder}
          value={props.value}
          onChange={props.onChange}
        />
      </div>
    </div>
  );
};

export default NumberInput;
