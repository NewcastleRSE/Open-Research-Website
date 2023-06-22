import React from "react";

import TextInput from "../formElements/TextInput";
import BooleanInput from "../formElements/BooleanInput";
import ModalButtons from "../formElements/ModalButtons";
import DropDown from "../formElements/DropDown";
import sectionTypes from "../../util/data/sectionTypes";

function Protocol({
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
        Please fill with details about your protocol
      </h3>
      <TextInput
        name="protocolTitle"
        placeholder="Protocol Title"
        value={formData.title}
        onChange={(event) => {
          setFormData({ ...formData, title: event.target.value });
        }}
        error={errors.title}
        readOnly={formData.orcid}
      />
      <TextInput
        name="protocolURL"
        placeholder="Protocol URL"
        value={formData.url}
        onChange={(event) => {
          setFormData({ ...formData, url: event.target.value });
        }}
        error={errors.URL}
        readOnly={formData.orcid}
      />
      {sectionTypes.Protocol.length !== 0 && (
        <DropDown
          name="protocol-type"
          placeholder={formData.type ? formData.type : "Type"}
          options={sectionTypes.Protocol.map((i) => {
            return { value: i };
          })}
          value={formData.type}
          onChange={(event) => {
            setFormData({ ...formData, type: event.target.value });
          }}
          id="protocol-type"
          disabled={formData.orcid}
        />
      )}
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
      {formData.orcid ? (
        <ModalButtons handleSave={handleSave} handleCancel={handleCancel} />
      ) : (
        <ModalButtons handleSubmit={handleSubmit} handleCancel={handleCancel} />
      )}
    </>
  );
}

export default Protocol;
