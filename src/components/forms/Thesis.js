import React from "react";

import UrlInput from "../formElements/UrlInput";
import TextInput from "../formElements/TextInput";
import BooleanInput from "../formElements/BooleanInput";
import ModalButtons from "../formElements/ModalButtons";

function Thesis({ show, formData, setFormData, setDisplay, handleSubmit }) {
  if (show) {
    return (
      <div className="modal-container" onClick={() => setDisplay(!show)}>
        <div
          className="step modal-content"
          onClick={(e) => e.stopPropagation()}
        >
          <h2>Theses and dissertation</h2>
          <h3 className="main_question">Please fill with your details</h3>
          <UrlInput
            name="thesisURL"
            placeholder="Thesis URL"
            value={formData.thesisURL}
            onChange={(event) => {
              setFormData({ ...formData, thesisURL: event.target.value });
            }}
          />
          <TextInput
            name="thesisDOI"
            placeholder="Thesis DOI"
            value={formData.thesisDOI}
            onChange={(event) => {
              setFormData({ ...formData, thesisDOI: event.target.value });
            }}
          />
          <TextInput
            name="thesisLicence"
            placeholder="Licence"
            value={formData.thesisLicence}
            onChange={(event) => {
              setFormData({ ...formData, thesisLicence: event.target.value });
            }}
          />
          <BooleanInput
            name="thesisEmargo"
            label="Was there an embargo period?"
            a="Yes"
            b="No"
            value={formData.thesisEmbargo}
            onChange={(event) => {
              setFormData({ ...formData, thesisEmbargo: event.target.value });
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

export default Thesis;
