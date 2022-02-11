import React from "react";

const UrlInput = (props) => {
  return (
    <div className="form-group">
      <input
        type="url"
        name={props.name}
        className="form-control required"
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
};

export default UrlInput;
