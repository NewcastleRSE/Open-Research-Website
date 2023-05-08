import React from "react";

const Checkbox = (props) => {
  return (
    <div className="form-group">
      <label className="container_check version_2">
        {props.name}
        <input
          type="checkbox"
          name={props.name}
          checked={props.checked}
          onChange={props.onChange}
        />
        <span className="checkmark"></span>
      </label>
    </div>
  );
};

export default Checkbox;
