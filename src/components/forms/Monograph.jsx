import React from "react";

import UrlInput from "../formElements/UrlInput";
import TextInput from "../formElements/TextInput";
import BooleanInput from "../formElements/BooleanInput";
import ModalButtons from "../formElements/ModalButtons";
import DropDown from "../formElements/DropDown";
import sectionTypes from "../../util/data/sectionTypes";

function Monograph({
  formData,
  setFormData,
  handleCancel,
  handleSubmit,
  handleSave,
  errors,
}) {
  return (
    <>
      <h3 className="main_question"></h3>
      <TextInput
        name="monographTitle"
        placeholder="Monograph Title"
        value={formData.title}
        onChange={(event) => {
          setFormData({ ...formData, title: event.target.value });
        }}
        error={errors.title}
        readOnly={formData.orcid}
      />
      <UrlInput
        name="monographURL"
        placeholder="Monograph URL"
        value={formData.url}
        onChange={(event) => {
          setFormData({ ...formData, url: event.target.value });
        }}
        error={errors.URL}
        readOnly={formData.orcid}
      />
      <TextInput
        name="monographDOI"
        placeholder="Monograph DOI"
        value={formData.doi}
        onChange={(event) => {
          setFormData({ ...formData, doi: event.target.value });
        }}
        error={errors.DOI}
      />
      <TextInput
        name="monographLicense"
        placeholder="License"
        value={formData.license}
        onChange={(event) => {
          setFormData({
            ...formData,
            license: event.target.value,
          });
        }}
        error={errors.license}
      />
      {sectionTypes.Monograph.length !== 0 && (
        <DropDown
          name="monograph-type"
          placeholder={formData.type ? formData.type : "Type"}
          options={sectionTypes.Monograph.map((i) => {
            return { value: i };
          })}
          value={formData.type}
          onChange={(event) => {
            setFormData({ ...formData, type: event.target.value });
          }}
          id="monograph-type"
          disabled={formData.orcid}
        />
      )}
      <BooleanInput
        name="monographEmargo"
        label="Was there an embargo period?"
        a="Yes"
        b="No"
        value={formData.embargo}
        onChange={(event) => {
          setFormData({
            ...formData,
            embargo: event.target.value,
          });
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

export default Monograph;
