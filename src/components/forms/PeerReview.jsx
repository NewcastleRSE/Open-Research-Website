import React from "react";

import TextInput from "../formElements/TextInput";
import UrlInput from "../formElements/UrlInput";
import BooleanInput from "../formElements/BooleanInput";
import ModalButtons from "../formElements/ModalButtons";

function PeerReview({
  formData,
  setFormData,
  handleCancel,
  handleSubmit,
  errors,
}) {
  return (
    <>
      <h3 className="main_question">
        Please fill with details about your open peer review
      </h3>
      <TextInput
        name="peerRevTitle"
        placeholder="Peer Review Title"
        value={formData.title}
        onChange={(event) => {
          setFormData({ ...formData, title: event.target.value });
        }}
        error={errors.title}
      />
      <UrlInput
        name="peerRevURL"
        placeholder="Peer Review URL"
        value={formData.url}
        onChange={(event) => {
          setFormData({ ...formData, url: event.target.value });
        }}
        error={errors.URL}
      />
      <BooleanInput
        name="peerRevResponse"
        label="Does the peer review include the authors response?"
        a="Yes"
        b="No"
        value={formData.revResponse}
        onChange={(event) => {
          setFormData({ ...formData, revResponse: event.target.value });
        }}
        error={errors.revResponse}
      />
      <ModalButtons handleSubmit={handleSubmit} handleCancel={handleCancel} />
    </>
  );
}

export default PeerReview;
