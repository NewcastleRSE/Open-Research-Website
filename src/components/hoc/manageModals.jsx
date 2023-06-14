import React, { useState } from "react";
import Toggle from "../formElements/Toggle";

// This function returns a new component
const manageModals = (FormComponent, HelpComponent) => {
  // The returned component receives all of its props from its parent component
  return ({
    show,
    setDisplay,
    formData,
    setFormData,
    handleCancel,
    handleSubmit,
    handleSave,
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
                  {showForm ? FormComponent.name : "Additional Information"}
                </h1>
                <Toggle
                  onClick={toggleShowForm}
                  text={showForm ? "More Info" : "Show Form"}
                />
              </div>
              {showForm ? (
                <FormComponent
                  formData={formData}
                  setFormData={setFormData}
                  handleCancel={handleCancel}
                  handleSave={handleSave}
                  handleSubmit={handleSubmit}
                  errors={errors}
                />
              ) : (
                <HelpComponent />
              )}
            </div>
          </div>
        )}
      </div>
    );
  };
};

export default manageModals;
