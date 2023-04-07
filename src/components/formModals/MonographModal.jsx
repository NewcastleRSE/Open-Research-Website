import React, { useState } from "react";
import Monograph from "../forms/Monograph";
import MonographHelp from "../formHelp/MonographHelp";
import Toggle from "../formElements/Toggle";

const MonographModal = ({
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
                  ? "Monographs, Books, Book Chapters and Edited Volumes"
                  : "Additional Information"}
              </h1>
              <Toggle
                onClick={toggleShowForm}
                text={showForm ? "More Info" : "Show Form"}
              />
            </div>
            {showForm ? (
              <Monograph
                formData={formData}
                setFormData={setFormData}
                handleCancel={handleCancel}
                handleSubmit={handleSubmit}
                errors={errors}
              />
            ) : (
              <MonographHelp />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default MonographModal;
