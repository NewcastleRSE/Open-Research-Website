import React from "react";

import UrlInput from "../formElements/UrlInput";
import TextInput from "../formElements/TextInput";
import BooleanInput from "../formElements/BooleanInput";
import ModalButtons from "../formElements/ModalButtons";

function Monograph({ show, formData, setFormData, setDisplay, handleSubmit }) {
  if (show) {
    return (
      <div className="modal-container" onClick={() => setDisplay(!show)}>
        <div
          className="step modal-content"
          onClick={(e) => e.stopPropagation()}
        >
          <h2>Monographs, Books, Book Chapters and Edited Volumes</h2>
          <h3 className="main_question"></h3>
          <UrlInput
            name="monographURL"
            placeholder="Monograph URL"
            value={formData.monographURL}
            onChange={(event) => {
              setFormData({ ...formData, monographURL: event.target.value });
            }}
          />
          <TextInput
            name="monographDOI"
            placeholder="Monograph DOI"
            value={formData.monographDOI}
            onChange={(event) => {
              setFormData({ ...formData, monographDOI: event.target.value });
            }}
          />
          <TextInput
            name="monographLicence"
            placeholder="Licence"
            value={formData.monographLicence}
            onChange={(event) => {
              setFormData({
                ...formData,
                monographLicence: event.target.value,
              });
            }}
          />
          <BooleanInput
            name="monographEmargo"
            label="Was there an embargo period?"
            a="Yes"
            b="No"
            value={formData.monographEmbargo}
            onChange={(event) => {
              setFormData({
                ...formData,
                monographEmbargo: event.target.value,
              });
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

export default Monograph;
