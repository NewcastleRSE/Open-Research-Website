import React from "react";
const DropDown = (props) => {
  const displayOptions = (options) => {
    return options.map((option, index) => {
      return (
        <option
          key={index}
          data-testid="select-option"
          value={option.value}
          style={{ color: "black" }}
        >
          {option.value}
        </option>
      );
    });
  };
  return (
    <div className="form-group">
      <span className={`error ${!props.error ? "hidden" : ""}`}>
        {props.error}
      </span>
      <div className="styled-select clearfix">
        <select
          className={`nice-select wide ${props.error ? "red-outline" : ""}`}
          name={props.name}
          value={props.value}
          onChange={props.onChange}
          data-testid={props.id}
        >
          <option value="" disabled>
            {props.placeholder}
          </option>
          {displayOptions(props.options)}
        </select>
      </div>
    </div>
  );
};

export default DropDown;
