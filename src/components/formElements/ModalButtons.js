import React from "react";

const ModalButtons = (props) => {
  return (
    <div className="button-container">
      <button
        type="button"
        className="cancel float-left"
        onClick={() => props.setDisplay()}
      >
        Cancel
      </button>

      <button
        type="button"
        className="forward float-right"
        onClick={(e) => props.handleSubmit(e)}
      >
        Submit
      </button>
    </div>
  );
};

export default ModalButtons;
