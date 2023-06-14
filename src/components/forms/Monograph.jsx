import React from "react";

import UrlInput from "../formElements/UrlInput";
import TextInput from "../formElements/TextInput";
import BooleanInput from "../formElements/BooleanInput";
import ModalButtons from "../formElements/ModalButtons";

function Monograph({
  formData,
  setFormData,
  handleCancel,
  handleSubmit,
  errors,
}) {
  return (
    <>
      <h3 className="main_question"></h3>
      <TextInput
        name="monographTitle"
        placeholder="Monograph Title"
        value={formData.title}
        onChange={(event) => {
          setFormData({ ...formData, title: event.target.value });
        }}
        error={errors.title}
      />
      <UrlInput
        name="monographURL"
        placeholder="Monograph URL"
        value={formData.url}
        onChange={(event) => {
          setFormData({ ...formData, url: event.target.value });
        }}
        error={errors.URL}
      />
      <TextInput
        name="monographDOI"
        placeholder="Monograph DOI"
        value={formData.doi}
        onChange={(event) => {
          setFormData({ ...formData, doi: event.target.value });
        }}
        error={errors.DOI}
      />
      <TextInput
        name="monographLicense"
        placeholder="License"
        value={formData.license}
        onChange={(event) => {
          setFormData({
            ...formData,
            license: event.target.value,
          });
        }}
        error={errors.license}
      />
      <BooleanInput
        name="monographEmargo"
        label="Was there an embargo period?"
        a="Yes"
        b="No"
        value={formData.embargo}
        onChange={(event) => {
          setFormData({
            ...formData,
            embargo: event.target.value,
          });
        }}
        error={errors.embargo}
      />
      <ModalButtons handleSubmit={handleSubmit} handleCancel={handleCancel} />
    </>
  );
}

export default Monograph;
