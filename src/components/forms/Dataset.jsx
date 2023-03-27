import React from "react";

import UrlInput from "../formElements/UrlInput";
import TextInput from "../formElements/TextInput";
import DropDown from "../formElements/DropDown";
import ModalButtons from "../formElements/ModalButtons";
import BooleanInput from "../formElements/BooleanInput";

function Dataset({
  show,
  formData,
  setFormData,
  setDisplay,
  handleCancel,
  handleSubmit,
  errors,
}) {
  if (show) {
    return (
      <div className="modal-container" onClick={() => setDisplay(!show)}>
        <div
          className="step modal-content"
          onClick={(e) => e.stopPropagation()}
        >
          <h2>Dataset</h2>
          <h3 className="main_question">
            Please fill with your details about your dataset
          </h3>
          <TextInput
            name="dataTitle"
            placeholder="Data Title"
            value={formData.dataTitle}
            onChange={(event) => {
              setFormData({ ...formData, dataTitle: event.target.value });
            }}
            error={errors.title}
          />
          <UrlInput
            name="dataURL"
            placeholder="Data URL"
            value={formData.dataURL}
            onChange={(event) => {
              setFormData({ ...formData, dataURL: event.target.value });
            }}
            error={errors.URL}
          />
          <TextInput
            name="dataDOI"
            placeholder="Data DOI"
            value={formData.dataDOI}
            onChange={(event) => {
              setFormData({ ...formData, dataDOI: event.target.value });
            }}
            error={errors.DOI}
          />
          <DropDown
            name="format"
            placeholder="Format"
            options={[{ value: "CSV" }, { value: "Numerical Dataset" }]}
            value={formData.format}
            onChange={(event) => {
              setFormData({ ...formData, format: event.target.value });
            }}
            error={errors.format}
          />
          <TextInput
            name="dataLicense"
            placeholder="Data License"
            value={formData.dataLicense}
            onChange={(event) => {
              setFormData({ ...formData, dataLicense: event.target.value });
            }}
            error={errors.license}
          />
          <BooleanInput
            name="dataMetadata"
            label="Does it include the necessary metadata?"
            a="Yes"
            b="No"
            value={formData.dataMetadata}
            onChange={(event) => {
              setFormData({
                ...formData,
                dataMetadata: event.target.value,
              });
            }}
            error={errors.dataMetadata}
          />
          <BooleanInput
            name="dataFair"
            label="Have efforts been made to maximize F.A.I.R. principles?"
            a="Yes"
            b="No"
            value={formData.dataFair}
            onChange={(event) => {
              setFormData({
                ...formData,
                dataFair: event.target.value,
              });
            }}
            error={errors.dataFair}
          />
          <BooleanInput
            name="dataRelease"
            label="Was it released no later than the publication of the first paper that uses it?"
            a="Yes"
            b="No"
            value={formData.dataRelease}
            onChange={(event) => {
              setFormData({
                ...formData,
                dataRelease: event.target.value,
              });
            }}
            error={errors.dataRelease}
          />
          <BooleanInput
            name="dataConf"
            label="Is independant confirmation of results possible with this data?"
            a="Yes"
            b="No"
            value={formData.dataConf}
            onChange={(event) => {
              setFormData({
                ...formData,
                dataConf: event.target.value,
              });
            }}
            error={errors.dataConf}
          />
          <ModalButtons
            handleSubmit={handleSubmit}
            handleCancel={handleCancel}
          />
        </div>
      </div>
    );
  } else {
    return null;
  }
}

export default Dataset;
