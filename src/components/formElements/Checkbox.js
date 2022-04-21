import React from "react";

const Checkbox = (props) => {
  return (
    <div class="form-group">
      <label class="container_check version_2">
        {props.name}
        <input
          type="checkbox"
          name={props.name}
          checked={props.checked}
          onChange={props.onChange}
        />
        <span class="checkmark"></span>
      </label>
    </div>
  );
};

export default Checkbox;
