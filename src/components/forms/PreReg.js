import React from "react";

import TextInput from "../formElements/TextInput";
import UrlInput from "../formElements/UrlInput";
import BooleanInput from "../formElements/BooleanInput";
import ModalButtons from "../formElements/ModalButtons";

function PreReg({
  show,
  formData,
  setFormData,
  setDisplay,
  handleCancel,
  handleSubmit,
  errors,
}) {
  if (show) {
    return (
      <div className="modal-container" onClick={() => setDisplay(!show)}>
        <div
          className="step modal-content"
          onClick={(e) => e.stopPropagation()}
        >
          <h2>Pre-registration Analysis Plans</h2>
          <h3 className="main_question">
            Please fill with details of your your pre-registration analysis
            plans
          </h3>
          <TextInput
            name="preRegTitle"
            placeholder="Pre-registration Analysis Plan Title"
            value={formData.preRegTitle}
            onChange={(event) => {
              setFormData({ ...formData, preRegTitle: event.target.value });
            }}
            error={errors.title}
          />
          <UrlInput
            name="preRegURL"
            placeholder="Pre-registration Analysis Plan URL"
            value={formData.preRegURL}
            onChange={(event) => {
              setFormData({ ...formData, preRegURL: event.target.value });
            }}
            error={errors.URL}
          />
          <BooleanInput
            name="preRegDistinction"
            label="Is there a clear distinction between the planned research and any unplanned reseach/ analysis that was conducted?"
            a="Yes"
            b="No"
            value={formData.preRegDistinction}
            onChange={(event) => {
              setFormData({
                ...formData,
                preRegDistinction: event.target.value,
              });
            }}
            error={errors.preRegDistinction}
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

export default PreReg;
