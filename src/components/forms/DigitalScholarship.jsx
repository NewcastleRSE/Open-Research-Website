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
        value={formData.title}
        onChange={(event) => {
          setFormData({ ...formData, title: event.target.value });
        }}
        error={errors.title}
      />
      <UrlInput
        name="dsURL"
        placeholder="Digital Scholarship URL"
        value={formData.dsURL}
        onChange={(event) => {
          setFormData({ ...formData, url: event.target.value });
        }}
        error={errors.URL}
      />
      <TextInput
        name="dsLicense"
        placeholder="License"
        value={formData.license}
        onChange={(event) => {
          setFormData({ ...formData, license: event.target.value });
        }}
        error={errors.license}
      />
      <BooleanInput
        name="dsEmargo"
        label="Was there an embargo period?"
        a="Yes"
        b="No"
        value={formData.embargo}
        onChange={(event) => {
          setFormData({ ...formData, embargo: event.target.value });
        }}
        error={errors.embargo}
      />
      <ModalButtons handleSubmit={handleSubmit} handleCancel={handleCancel} />
    </>
  );
}

export default DigitalScholarship;
