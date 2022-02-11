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
      />
    );
  }
};

const DropDownOther = (props) => {
  return (
    <div>
      <div className="form-group">
        <div className="styled-select clearfix">
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
            <option value="other">Other</option>
          </select>
        </div>
      </div>
      {DisplayOther(props)}
    </div>
  );
};

export default DropDownOther;
