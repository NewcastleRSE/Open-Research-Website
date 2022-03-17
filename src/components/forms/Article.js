import React from "react";

import UrlInput from "../formElements/UrlInput";
import TextInput from "../formElements/TextInput";
import BooleanInput from "../formElements/BooleanInput";
import ModalButtons from "../formElements/ModalButtons";

const Article = ({
  show,
  formData,
  setFormData,
  setDisplay,
  handleCancel,
  handleSubmit,
  errors,
}) => {
  if (show) {
    return (
      <div className="modal-container" onClick={() => setDisplay(!show)}>
        <div
          className="step modal-content"
          onClick={(e) => e.stopPropagation()}
        >
          <h3 className="main_question">
            Please fill with your details about your article
          </h3>
          <UrlInput
            name="articleURL"
            placeholder="Article URL"
            value={formData.articleURL}
            onChange={(event) => {
              setFormData({ ...formData, articleURL: event.target.value });
            }}
            error={errors.URL}
          />
          <TextInput
            name="articleDOI"
            placeholder="Article DOI"
            value={formData.articleDOI}
            onChange={(event) => {
              setFormData({ ...formData, articleDOI: event.target.value });
            }}
            error={errors.DOI}
          />
          <TextInput
            name="articleLicense"
            placeholder="License"
            value={formData.articleLicense}
            onChange={(event) => {
              setFormData({ ...formData, articleLicense: event.target.value });
            }}
            error={errors.license}
          />
          <BooleanInput
            name="articleEmargo"
            label="Was there an embargo period?"
            a="Yes"
            b="No"
            value={formData.articleEmbargo}
            onChange={(event) => {
              setFormData({ ...formData, articleEmbargo: event.target.value });
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
};

export default Article;
