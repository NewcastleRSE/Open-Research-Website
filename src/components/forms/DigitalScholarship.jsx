import React from "react";

import UrlInput from "../formElements/UrlInput";
import BooleanInput from "../formElements/BooleanInput";
import TextInput from "../formElements/TextInput";
import ModalButtons from "../formElements/ModalButtons";

function DigitalScholarship({
  formData,
  setFormData,
  handleSubmit,
  handleCancel,
  errors,
}) {
  return (
    <>
      <h3 className="main_question">
        Please fill with details about your project
      </h3>
      <TextInput
        name="dsTitle"
        placeholder="Digital Scholarship Title"
        value={formData.dsTitle}
        onChange={(event) => {
          setFormData({ ...formData, dsTitle: event.target.value });
        }}
        error={errors.title}
      />
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
        name="dsLicense"
        placeholder="License"
        value={formData.dsLicense}
        onChange={(event) => {
          setFormData({ ...formData, dsLicense: event.target.value });
        }}
        error={errors.license}
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
      <ModalButtons handleSubmit={handleSubmit} handleCancel={handleCancel} />
    </>
  );
}

export default DigitalScholarship;
