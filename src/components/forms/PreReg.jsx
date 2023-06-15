import React from "react";

import TextInput from "../formElements/TextInput";
import UrlInput from "../formElements/UrlInput";
import BooleanInput from "../formElements/BooleanInput";
import ModalButtons from "../formElements/ModalButtons";
import DropDown from "../formElements/DropDown";

function PreReg({
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
        Please fill with details of your your pre-registration analysis plans
      </h3>
      <TextInput
        name="preRegTitle"
        placeholder="Pre-registration Analysis Plan Title"
        value={formData.title}
        onChange={(event) => {
          setFormData({ ...formData, title: event.target.value });
        }}
        error={errors.title}
      />
      <UrlInput
        name="preRegURL"
        placeholder="Pre-registration Analysis Plan URL"
        value={formData.url}
        onChange={(event) => {
          setFormData({ ...formData, url: event.target.value });
        }}
        error={errors.URL}
      />
      {sectionTypes.PreReg.length !== 0 && (
        <DropDown
          name="preReg-type"
          placeholder={formData.type ? formData.type : "Type"}
          options={sectionTypes.PreReg.map((i) => {
            return { value: i };
          })}
          value={formData.type}
          onChange={(event) => {
            setFormData({ ...formData, type: event.target.value });
          }}
          id="preReg-type"
        />
      )}
      <BooleanInput
        name="preRegDistinction"
        label="Is there a clear distinction between the planned research and any unplanned reseach/ analysis that was conducted?"
        a="Yes"
        b="No"
        value={formData.distinction}
        onChange={(event) => {
          setFormData({
            ...formData,
            distinction: event.target.value,
          });
        }}
        error={errors.distinction}
      />
      {formData.orcid ? (
        <ModalButtons handleSave={handleSave} handleCancel={handleCancel} />
      ) : (
        <ModalButtons handleSubmit={handleSubmit} handleCancel={handleCancel} />
      )}
    </>
  );
}

export default PreReg;
