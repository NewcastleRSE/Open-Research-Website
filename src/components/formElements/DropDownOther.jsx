import React from "react";
import TextInput from "./TextInput";

// Usage
// Props:
//  > name - name in form data
//  > placeholder
//  > options
//  > value - value of default options e.g. formData.school
//  > onChange - onChange for value
//  > otherValue - value of other option e.g. formData.otherSchool
//  > otherOnChange - onChange for otherValue

const DisplayOther = (props) => {
  if (props.value === "other") {
    return (
      <TextInput
        name={props.name}
        placeholder={"Other " + props.placeholder}
        value={props.otherValue}
        onChange={props.otherOnChange}
        error={props.otherError}
      />
    );
  }
};

const DropDownOther = (props) => {
  return (
    <div>
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
            <option value="" data-testid="select-option" disabled>
              {props.placeholder}
            </option>
            {props.options.map((option) => (
              <option
                key={option.value}
                value={option.value}
                data-testid="select-option"
              >
                {option.value}
              </option>
            ))}
            <option value="other" data-testid="select-option">
              Other
            </option>
          </select>
        </div>
      </div>
      {DisplayOther(props)}
    </div>
  );
};

export default DropDownOther;
