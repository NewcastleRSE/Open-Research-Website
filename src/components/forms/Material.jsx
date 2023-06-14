import React from "react";

import TextInput from "../formElements/TextInput";
import UrlInput from "../formElements/UrlInput";
import BooleanInput from "../formElements/BooleanInput";
import ModalButtons from "../formElements/ModalButtons";

function Material({
  formData,
  setFormData,
  handleCancel,
  handleSubmit,
  errors,
}) {
  return (
    <>
      <h3 className="main_question">
        Please fill with details about your research Material
      </h3>
      <TextInput
        name="materialTitle"
        placeholder="Material Title"
        value={formData.title}
        onChange={(event) => {
          setFormData({ ...formData, title: event.target.value });
        }}
        error={errors.title}
      />
      <UrlInput
        name="materialURL"
        placeholder="Material URL"
        value={formData.url}
        onChange={(event) => {
          setFormData({ ...formData, url: event.target.value });
        }}
        error={errors.URL}
      />
      <BooleanInput
        name="materialReproduction"
        label="Is all the material needed to reproduce the results freely availiable?"
        a="Yes"
        b="No"
        value={formData.reproduction}
        onChange={(event) => {
          setFormData({
            ...formData,
            reproduction: event.target.value,
          });
        }}
        error={errors.reproduction}
      />
      <BooleanInput
        name="materialRelease"
        label="Was the material released at the time of the publication of the first paper based on the materials?"
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

export default Material;
