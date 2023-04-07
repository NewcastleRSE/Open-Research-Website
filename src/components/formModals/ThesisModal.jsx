import React, { useState } from "react";
import Thesis from "../forms/Thesis";
import ThesisHelp from "../formHelp/ThesisHelp";
import Toggle from "../formElements/Toggle";

const ThesisModal = ({
  show,
  setDisplay,
  formData,
  setFormData,
  handleCancel,
  handleSubmit,
  errors,
}) => {
  const [showForm, setShowForm] = useState(true);

  const toggleShowForm = (e) => {
    e.preventDefault();
    setShowForm((prev) => !prev);
  };

  return (
    <div>
      {show && (
        <div className="modal-container" onClick={() => setDisplay(!show)}>
          <div
            className="step modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="form-header">
              <h1>{showForm ? "Thesis Form" : "Additional Information"}</h1>
              <Toggle
                onClick={toggleShowForm}
                text={showForm ? "More Info" : "Show Form"}
              />
            </div>
            {showForm ? (
              <Thesis
                formData={formData}
                setFormData={setFormData}
                handleCancel={handleCancel}
                handleSubmit={handleSubmit}
                errors={errors}
              />
            ) : (
              <ThesisHelp />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ThesisModal;
