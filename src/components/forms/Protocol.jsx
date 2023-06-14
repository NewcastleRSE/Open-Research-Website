import React from "react";

import TextInput from "../formElements/TextInput";
import BooleanInput from "../formElements/BooleanInput";
import ModalButtons from "../formElements/ModalButtons";

function Protocol({
  formData,
  setFormData,
  handleCancel,
  handleSubmit,
  errors,
}) {
  return (
    <>
      <h3 className="main_question">
        Please fill with details about your protocol
      </h3>
      <TextInput
        name="protocolTitle"
        placeholder="Protocol Title"
        value={formData.protocolTtitleitle}
        onChange={(event) => {
          setFormData({ ...formData, title: event.target.value });
        }}
        error={errors.title}
      />
      <TextInput
        name="protocolURL"
        placeholder="Protocol URL"
        value={formData.url}
        onChange={(event) => {
          setFormData({ ...formData, url: event.target.value });
        }}
        error={errors.URL}
      />
      <BooleanInput
        name="protocolSharing"
        label="Does it facilitate sharing, editing, forking, and further development?"
        a="Yes"
        b="No"
        value={formData.sharing}
        onChange={(event) => {
          setFormData({ ...formData, sharing: event.target.value });
        }}
        error={errors.sharing}
      />
      <ModalButtons handleSubmit={handleSubmit} handleCancel={handleCancel} />
    </>
  );
}

export default Protocol;
