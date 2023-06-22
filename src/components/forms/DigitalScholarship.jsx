import React from "react";

import UrlInput from "../formElements/UrlInput";
import BooleanInput from "../formElements/BooleanInput";
import TextInput from "../formElements/TextInput";
import ModalButtons from "../formElements/ModalButtons";
import DropDown from "../formElements/DropDown";
import sectionTypes from "../../util/data/sectionTypes";

function DigitalScholarship({
  formData,
  setFormData,
  handleSubmit,
  handleSave,
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
        readOnly={formData.orcid}
      />
      <UrlInput
        name="dsURL"
        placeholder="Digital Scholarship URL"
        value={formData.dsURL}
        onChange={(event) => {
          setFormData({ ...formData, url: event.target.value });
        }}
        error={errors.URL}
        readOnly={formData.orcid}
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
      {sectionTypes.DigitalScholarship.length !== 0 && (
        <DropDown
          name="ds-type"
          placeholder={formData.type ? formData.type : "Type"}
          options={sectionTypes.DigitalScholarship.map((i) => {
            return { value: i };
          })}
          value={formData.type}
          onChange={(event) => {
            setFormData({ ...formData, type: event.target.value });
          }}
          id="ds-type"
          disabled={formData.orcid}
        />
      )}
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
      {formData.orcid ? (
        <ModalButtons handleSave={handleSave} handleCancel={handleCancel} />
      ) : (
        <ModalButtons handleSubmit={handleSubmit} handleCancel={handleCancel} />
      )}
    </>
  );
}

export default DigitalScholarship;
