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
        value={formData.materialTitle}
        onChange={(event) => {
          setFormData({ ...formData, materialTitle: event.target.value });
        }}
        error={errors.title}
      />
      <UrlInput
        name="materialURL"
        placeholder="Material URL"
        value={formData.materialURL}
        onChange={(event) => {
          setFormData({ ...formData, materialURL: event.target.value });
        }}
        error={errors.URL}
      />
      <BooleanInput
        name="materialReproduction"
        label="Is all the material needed to reproduce the results freely availiable?"
        a="Yes"
        b="No"
        value={formData.materialReproduction}
        onChange={(event) => {
          setFormData({
            ...formData,
            materialReproduction: event.target.value,
          });
        }}
        error={errors.materialReproduction}
      />
      <BooleanInput
        name="materialRelease"
        label="Was the material released at the time of the publication of the first paper based on the materials?"
        a="Yes"
        b="No"
        value={formData.materialRelease}
        onChange={(event) => {
          setFormData({ ...formData, materialRelease: event.target.value });
        }}
        error={errors.materialRelease}
      />
      <ModalButtons handleSubmit={handleSubmit} handleCancel={handleCancel} />
    </>
  );
}

export default Material;
