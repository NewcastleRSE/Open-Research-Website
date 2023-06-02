import React from "react";

const ModalButtons = (props) => {
  return (
    <div className="button-container">
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
    </div>
  );
};

export default ModalButtons;
