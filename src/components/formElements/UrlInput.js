import React from "react";

const UrlInput = (props) => {
  return (
    <div className="form-group">
      <span className={`error ${!props.error ? "hidden" : ""}`}>
        URL is required
      </span>
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
