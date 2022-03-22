import React from "react";

import UrlInput from "../formElements/UrlInput";
import TextInput from "../formElements/TextInput";
import BooleanInput from "../formElements/BooleanInput";
import ModalButtons from "../formElements/ModalButtons";

function Preprint({
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
          <h2>Preprint</h2>
          <h3 className="main_question">
            Please fill with details about your preprint
          </h3>
          <TextInput
            name="preprintTitle"
            placeholder="Preprint Title"
            value={formData.preprintTitle}
            onChange={(event) => {
              setFormData({ ...formData, preprintTitle: event.target.value });
            }}
            error={errors.title}
          />
          <UrlInput
            name="preprintURL"
            placeholder="Preprint URL"
            value={formData.preprintURL}
            onChange={(event) => {
              setFormData({ ...formData, preprintURL: event.target.value });
            }}
            error={errors.URL}
          />
          <TextInput
            name="preprintDOI"
            placeholder="Preprint DOI"
            value={formData.preprintDOI}
            onChange={(event) => {
              setFormData({ ...formData, preprintDOI: event.target.value });
            }}
            error={errors.DOI}
          />
          <BooleanInput
            name="preprintRelease"
            label="Was the preprint released at the time of first submission to a journal?"
            a="Yes"
            b="No"
            value={formData.preprintRelease}
            onChange={(event) => {
              setFormData({ ...formData, preprintRelease: event.target.value });
            }}
            error={errors.preprintRelease}
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

export default Preprint;
