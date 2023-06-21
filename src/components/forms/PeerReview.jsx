import React from "react";

import TextInput from "../formElements/TextInput";
import UrlInput from "../formElements/UrlInput";
import BooleanInput from "../formElements/BooleanInput";
import ModalButtons from "../formElements/ModalButtons";
import DropDown from "../formElements/DropDown";
import sectionTypes from "../../util/data/sectionTypes";

function PeerReview({
  formData,
  setFormData,
  handleCancel,
  handleSubmit,
  handleSave,
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
      {sectionTypes.PeerRev.length !== 0 && (
        <DropDown
          name="peerRev-type"
          placeholder={formData.type ? formData.type : "Type"}
          options={sectionTypes.PeerRev.map((i) => {
            return { value: i };
          })}
          value={formData.type}
          onChange={(event) => {
            setFormData({ ...formData, type: event.target.value });
          }}
          id="peerRev-type"
        />
      )}
      <BooleanInput
        name="peerRevResponse"
        label="Does the peer review include the authors response?"
        a="Yes"
        b="No"
        value={formData.response}
        onChange={(event) => {
          setFormData({ ...formData, response: event.target.value });
        }}
        error={errors.response}
      />
      {formData.orcid ? (
        <ModalButtons handleSave={handleSave} handleCancel={handleCancel} />
      ) : (
        <ModalButtons handleSubmit={handleSubmit} handleCancel={handleCancel} />
      )}
    </>
  );
}

export default PeerReview;
