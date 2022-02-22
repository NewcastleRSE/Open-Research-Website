import React from "react";

import UrlInput from "../formElements/UrlInput";
import BooleanInput from "../formElements/BooleanInput";
import TextInput from "../formElements/TextInput";
import ModalButtons from "../formElements/ModalButtons";

function DigitalScholarship({
  show,
  formData,
  setFormData,
  setDisplay,
  handleSubmit,
  handleCancel,
  errors,
}) {
  if (show) {
    return (
      <div className="modal-container" onClick={() => setDisplay(!show)}>
        <div
          className="step modal-content"
          onClick={(e) => e.stopPropagation()}
        >
          <h2>Digital Scholarship</h2>
          <h3 className="main_question">
            Please fill with details about your project
          </h3>
          <UrlInput
            name="dsURL"
            placeholder="Digital Scholarship URL"
            value={formData.dsURL}
            onChange={(event) => {
              setFormData({ ...formData, dsURL: event.target.value });
            }}
            error={errors.URL}
          />
          <TextInput
            name="dsLicence"
            placeholder="Licence"
            value={formData.dsLicence}
            onChange={(event) => {
              setFormData({ ...formData, dsLicence: event.target.value });
            }}
            error={errors.licence}
          />
          <BooleanInput
            name="dsEmargo"
            label="Was there an embargo period?"
            a="Yes"
            b="No"
            value={formData.dsEmbargo}
            onChange={(event) => {
              setFormData({ ...formData, dsEmbargo: event.target.value });
            }}
            error={errors.embargo}
          />
          <ModalButtons
            handleSubmit={handleSubmit}
            handleCancel={handleCancel}
          />
        </div>
      </div>
    );
  } else {
    return null;
  }
}

export default DigitalScholarship;
