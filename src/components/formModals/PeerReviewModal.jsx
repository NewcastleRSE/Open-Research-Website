import React, { useState } from "react";
import PeerReview from "../forms/PeerReview";
import PeerReviewHelp from "../formHelp/PeerReviewHelp";
import Toggle from "../formElements/Toggle";

const PeerReviewModal = ({
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
                {showForm ? "Open Peer Review" : "Additional Information"}
              </h1>
              <Toggle
                onClick={toggleShowForm}
                text={showForm ? "More Info" : "Show Form"}
              />
            </div>
            {showForm ? (
              <PeerReview
                formData={formData}
                setFormData={setFormData}
                handleCancel={handleCancel}
                handleSubmit={handleSubmit}
                errors={errors}
              />
            ) : (
              <PeerReviewHelp />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default PeerReviewModal;
