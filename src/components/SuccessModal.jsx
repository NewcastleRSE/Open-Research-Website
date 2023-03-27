import React from "react";

const SuccessModal = ({ show, setDisplay, name }) => {
  const handleSave = () => {
    alert("Saved.");
  };

  if (show) {
    return (
      <div className="modal-container" onClick={() => setDisplay(!show)}>
        <div
          className="step modal-content"
          onClick={(e) => e.stopPropagation()}
        >
          <h1>Success!</h1>
          <p>Thanks {name} for your response!</p>
          <p>Click below to save your results.</p>
          <div className="button-container">
            <button
              type="button"
              className="cancel float-left"
              onClick={(e) => setDisplay(!show)}
            >
              Close
            </button>

            <button
              type="button"
              className="forward float-right"
              onClick={(e) => handleSave(e)}
            >
              Save Results
            </button>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default SuccessModal;
