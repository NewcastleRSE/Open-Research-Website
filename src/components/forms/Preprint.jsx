import React from "react";

import UrlInput from "../formElements/UrlInput";
import TextInput from "../formElements/TextInput";
import BooleanInput from "../formElements/BooleanInput";
import ModalButtons from "../formElements/ModalButtons";

function Preprint({
  formData,
  setFormData,
  handleSubmit,
  handleCancel,
  errors,
}) {
  return (
    <>
      <h3 className="main_question">
        Please fill with details about your preprint
      </h3>
      <TextInput
        name="preprintTitle"
        placeholder="Preprint Title"
        value={formData.title}
        onChange={(event) => {
          setFormData({ ...formData, title: event.target.value });
        }}
        error={errors.title}
      />
      <UrlInput
        name="preprintURL"
        placeholder="Preprint URL"
        value={formData.url}
        onChange={(event) => {
          setFormData({ ...formData, url: event.target.value });
        }}
        error={errors.URL}
      />
      <TextInput
        name="preprintDOI"
        placeholder="Preprint DOI"
        value={formData.doi}
        onChange={(event) => {
          setFormData({ ...formData, doi: event.target.value });
        }}
        error={errors.DOI}
      />
      <TextInput
        name="preprintLicense"
        placeholder="Preprint License"
        value={formData.license}
        onChange={(event) => {
          setFormData({ ...formData, license: event.target.value });
        }}
      />
      <BooleanInput
        name="preprintRelease"
        label="Was the preprint released at the time of first submission to a journal?"
        a="Yes"
        b="No"
        value={formData.release}
        onChange={(event) => {
          setFormData({ ...formData, release: event.target.value });
        }}
        error={errors.release}
      />
      <ModalButtons handleSubmit={handleSubmit} handleCancel={handleCancel} />
    </>
  );
}

export default Preprint;
