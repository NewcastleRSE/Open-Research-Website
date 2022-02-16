import React from "react";

const DropDown = (props) => {
  return (
    <div className="form-group">
      <div className=" styled-select clearfix">
        <select
          className="nice-select wide required"
          name={props.name}
          value={props.value}
          onChange={props.onChange}
        >
          <option value="">{props.placeholder}</option>
          {props.options.map((option) => (
            <option value={option.value}>{option.value}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default DropDown;
