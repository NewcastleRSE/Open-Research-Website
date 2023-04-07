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
        value={formData.monographTitle}
        onChange={(event) => {
          setFormData({ ...formData, monographTitle: event.target.value });
        }}
        error={errors.title}
      />
      <UrlInput
        name="monographURL"
        placeholder="Monograph URL"
        value={formData.monographURL}
        onChange={(event) => {
          setFormData({ ...formData, monographURL: event.target.value });
        }}
        error={errors.URL}
      />
      <TextInput
        name="monographDOI"
        placeholder="Monograph DOI"
        value={formData.monographDOI}
        onChange={(event) => {
          setFormData({ ...formData, monographDOI: event.target.value });
        }}
        error={errors.DOI}
      />
      <TextInput
        name="monographLicense"
        placeholder="License"
        value={formData.monographLicense}
        onChange={(event) => {
          setFormData({
            ...formData,
            monographLicense: event.target.value,
          });
        }}
        error={errors.license}
      />
      <BooleanInput
        name="monographEmargo"
        label="Was there an embargo period?"
        a="Yes"
        b="No"
        value={formData.monographEmbargo}
        onChange={(event) => {
          setFormData({
            ...formData,
            monographEmbargo: event.target.value,
          });
        }}
        error={errors.embargo}
      />
      <ModalButtons handleSubmit={handleSubmit} handleCancel={handleCancel} />
    </>
  );
}

export default Monograph;
