import React from "react";

const TextInput = (props) => {
  return (
    <div className="form-group">
      <input
        type="text"
        name={props.name}
        value={props.value}
        className="form-control required"
        placeholder={props.placeholder}
        onChange={props.onChange}
      />
    </div>
  );
};

export default TextInput;
