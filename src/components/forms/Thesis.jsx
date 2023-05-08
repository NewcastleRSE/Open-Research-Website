import React from "react";

import UrlInput from "../formElements/UrlInput";
import TextInput from "../formElements/TextInput";
import BooleanInput from "../formElements/BooleanInput";
import ModalButtons from "../formElements/ModalButtons";

function Thesis({
  formData,
  setFormData,

  handleCancel,
  handleSubmit,
  errors,
}) {
  return (
    <>
      <h3 className="main_question">Please fill with your details</h3>
      <TextInput
        name="thesisTitle"
        placeholder="Thesis Title"
        value={formData.thesisTitle}
        onChange={(event) => {
          setFormData({ ...formData, thesisTitle: event.target.value });
        }}
        error={errors.title}
      />
      <UrlInput
        name="thesisURL"
        placeholder="Thesis URL"
        value={formData.thesisURL}
        onChange={(event) => {
          setFormData({ ...formData, thesisURL: event.target.value });
        }}
        error={errors.URL}
      />
      <TextInput
        name="thesisDOI"
        placeholder="Thesis DOI"
        value={formData.thesisDOI}
        onChange={(event) => {
          setFormData({ ...formData, thesisDOI: event.target.value });
        }}
        error={errors.DOI}
      />
      <TextInput
        name="thesisLicense"
        placeholder="License"
        value={formData.thesisLicense}
        onChange={(event) => {
          setFormData({ ...formData, thesisLicense: event.target.value });
        }}
        error={errors.license}
      />
      <BooleanInput
        name="thesisEmargo"
        label="Was there an embargo period?"
        a="Yes"
        b="No"
        value={formData.thesisEmbargo}
        onChange={(event) => {
          setFormData({ ...formData, thesisEmbargo: event.target.value });
        }}
        error={errors.embargo}
      />
      <ModalButtons handleSubmit={handleSubmit} handleCancel={handleCancel} />
    </>
  );
}

export default Thesis;
