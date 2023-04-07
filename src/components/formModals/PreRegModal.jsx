import React, { useState } from "react";
import PreReg from "../forms/PreReg";
import PreRegHelp from "../formHelp/PreRegHelp";
import Toggle from "../formElements/Toggle";

const PreRegModal = ({
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
              <h1>
                {showForm
                  ? "Pre-registration Analysis Plans"
                  : "Additional Information"}
              </h1>
              <Toggle
                onClick={toggleShowForm}
                text={showForm ? "More Info" : "Show Form"}
              />
            </div>
            {showForm ? (
              <PreReg
                formData={formData}
                setFormData={setFormData}
                handleCancel={handleCancel}
                handleSubmit={handleSubmit}
                errors={errors}
              />
            ) : (
              <PreRegHelp />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default PreRegModal;
