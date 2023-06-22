import React from "react";

import UrlInput from "../formElements/UrlInput";
import TextInput from "../formElements/TextInput";
import BooleanInput from "../formElements/BooleanInput";
import ModalButtons from "../formElements/ModalButtons";
import DropDown from "../formElements/DropDown";
import sectionTypes from "../../util/data/sectionTypes";

function Preprint({
  formData,
  setFormData,
  handleSubmit,
  handleCancel,
  handleSave,
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
        readOnly={formData.orcid}
      />
      <UrlInput
        name="preprintURL"
        placeholder="Preprint URL"
        value={formData.url}
        onChange={(event) => {
          setFormData({ ...formData, url: event.target.value });
        }}
        error={errors.URL}
        readOnly={formData.orcid}
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
      {sectionTypes.Preprint.length !== 0 && (
        <DropDown
          name="preprint-type"
          placeholder={formData.type ? formData.type : "Type"}
          options={sectionTypes.Preprint.map((i) => {
            return { value: i };
          })}
          value={formData.type}
          onChange={(event) => {
            setFormData({ ...formData, type: event.target.value });
          }}
          id="preprint-type"
          disabled={formData.orcid}
        />
      )}
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
      {formData.orcid ? (
        <ModalButtons handleSave={handleSave} handleCancel={handleCancel} />
      ) : (
        <ModalButtons handleSubmit={handleSubmit} handleCancel={handleCancel} />
      )}
    </>
  );
}

export default Preprint;
