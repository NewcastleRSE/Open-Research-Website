import React from "react";

import UrlInput from "../formElements/UrlInput";
import TextInput from "../formElements/TextInput";
import DropDown from "../formElements/DropDown";
import ModalButtons from "../formElements/ModalButtons";

function Dataset({ show, formData, setFormData, setDisplay, handleSubmit }) {
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
          <UrlInput
            name="dataURL"
            placeholder="Data URL"
            value={formData.dataURL}
            onChange={(event) => {
              setFormData({ ...formData, dataURL: event.target.value });
            }}
          />
          <TextInput
            name="dataDOI"
            placeholder="Data DOI"
            value={formData.dataDOI}
            onChange={(event) => {
              setFormData({ ...formData, dataDOI: event.target.value });
            }}
          />
          <DropDown
            name="format"
            placeholder="Format"
            options={[{ value: "CSV" }, { value: "Numerical Dataset" }]}
            value={formData.format}
            onChange={(event) => {
              setFormData({ ...formData, format: event.target.value });
            }}
          />
          <TextInput
            name="dataLicence"
            placeholder="Data Licence"
            value={formData.dataLicence}
            onChange={(event) => {
              setFormData({ ...formData, dataLicence: event.target.value });
            }}
          />
          <ModalButtons setDisplay={setDisplay} handleSubmit={handleSubmit} />
        </div>
      </div>
    );
  } else {
    return null;
  }
}

export default Dataset;
