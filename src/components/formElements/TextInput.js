import React from "react";

const TextInput = (props) => {
  return (
    <div className="form-group">
      <span className={`error ${!props.error ? "hidden" : ""}`}>
        {props.error}
      </span>
      <input
        type="text"
        name={props.name}
        value={props.value}
        className={`form-control ${props.error ? "red-outline" : ""}`}
        placeholder={props.placeholder}
        onChange={props.onChange}
      />
    </div>
  );
};

export default TextInput;
