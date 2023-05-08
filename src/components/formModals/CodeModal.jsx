import React, { useState } from "react";
import Code from "../forms/Code";
import CodeHelp from "../formHelp/CodeHelp";
import Toggle from "../formElements/Toggle";

const CodeModal = ({
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
              <h1>{showForm ? "Code Form" : "Additional Information"}</h1>
              <Toggle
                onClick={toggleShowForm}
                text={showForm ? "More Info" : "Show Form"}
              />
            </div>
            {showForm ? (
              <Code
                formData={formData}
                setFormData={setFormData}
                handleCancel={handleCancel}
                handleSubmit={handleSubmit}
                errors={errors}
              />
            ) : (
              <CodeHelp />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CodeModal;
