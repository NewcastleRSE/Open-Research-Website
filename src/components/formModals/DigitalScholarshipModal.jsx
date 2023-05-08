import React, { useState } from "react";
import DigitalScholarship from "../forms/DigitalScholarship";
import DigitalScholarshipHelp from "../formHelp/DigitalScholarshipHelp";
import Toggle from "../formElements/Toggle";

const DigitalScholarshipModal = ({
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
                {showForm ? "Digital Scholarship" : "Additional Information"}
              </h1>
              <Toggle
                onClick={toggleShowForm}
                text={showForm ? "More Info" : "Show Form"}
              />
            </div>
            {showForm ? (
              <DigitalScholarship
                formData={formData}
                setFormData={setFormData}
                handleCancel={handleCancel}
                handleSubmit={handleSubmit}
                errors={errors}
              />
            ) : (
              <DigitalScholarshipHelp />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default DigitalScholarshipModal;
