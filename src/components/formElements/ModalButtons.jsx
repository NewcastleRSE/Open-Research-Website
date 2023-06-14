import React from "react";

const ModalButtons = (props) => {
  return (
    <div className="button-container">
      {props.handleCancel && (
        <button
          type="button"
          className="cancel float-left"
          onClick={(e) => {
            console.log("Cancel clicked");
            props.handleCancel(e);
          }}
        >
          Cancel
        </button>
      )}

      {props.handleSubmit && (
        <button
          type="button"
          className="forward float-right"
          onClick={(e) => {
            console.log("Submit clicked");
            props.handleSubmit(e);
          }}
        >
          Submit
        </button>
      )}

      {props.handleSave && (
        <button
          type="button"
          className="forward float-right"
          onClick={(e) => {
            console.log("Save clicked");
            props.handleSave(e);
          }}
        >
          Save
        </button>
      )}
    </div>
  );
};

export default ModalButtons;
