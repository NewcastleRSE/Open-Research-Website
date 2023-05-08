import React, { useState } from "react";
import Preprint from "../forms/Preprint";
import PreprintHelp from "../formHelp/PreprintHelp";
import Toggle from "../formElements/Toggle";

const PreprintModal = ({
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
              <h1>{showForm ? "Preprint" : "Additional Information"}</h1>
              <Toggle
                onClick={toggleShowForm}
                text={showForm ? "More Info" : "Show Form"}
              />
            </div>
            {showForm ? (
              <Preprint
                formData={formData}
                setFormData={setFormData}
                handleCancel={handleCancel}
                handleSubmit={handleSubmit}
                errors={errors}
              />
            ) : (
              <PreprintHelp />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default PreprintModal;
