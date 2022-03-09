import React from "react";

const DropDown = (props) => {
  return (
    <div className="form-group">
      <span className={`error ${!props.error ? "hidden" : ""}`}>
        {props.error}
      </span>
      <div className=" styled-select clearfix">
        <select
          className={`nice-select wide ${props.error ? "red-outline" : ""}`}
          name={props.name}
          value={props.value}
          onChange={props.onChange}
          data-testid={props.id}
        >
          <option data-testid="select-option" value="">
            {props.placeholder}
          </option>
          {props.options.map((option) => (
            <option
              data-testid="select-option"
              key={option.value}
              value={option.value}
            >
              {option.value}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default DropDown;
