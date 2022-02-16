import React from "react";

import UrlInput from "../formElements/UrlInput";
import TextInput from "../formElements/TextInput";
import BooleanInput from "../formElements/BooleanInput";
import ModalButtons from "../formElements/ModalButtons";

const DisplayLicence = ({ formData, setFormData }) => {
  if (formData.openSource === "Yes") {
    return (
      <TextInput
        name="licence"
        placeholder="Licence"
        value={formData.codeLicence}
        onChange={(event) =>
          setFormData({ ...formData, codeLicence: event.target.value })
        }
      />
    );
  } else {
    return null;
  }
};

function CodeInfo({ show, formData, setFormData, setDisplay, handleSubmit }) {
  if (show) {
    return (
      <div className="modal-container" onClick={() => setDisplay(!show)}>
        <div
          className="step modal-content"
          onClick={(e) => e.stopPropagation()}
        >
          <h2>Code</h2>
          <h3 className="main_question">
            Please fill with your details about your code
          </h3>
          <UrlInput
            name="codeURL"
            placeholder="Code URL"
            value={formData.codeURL}
            onChange={(event) =>
              setFormData({ ...formData, codeURL: event.target.value })
            }
          />
          <TextInput
            name="codeDOI"
            placeholder="Code DOI"
            value={formData.codeDOI}
            onChange={(event) =>
              setFormData({ ...formData, codeDOI: event.target.value })
            }
          />
          <BooleanInput
            name="openSource"
            label="Is it open source?"
            a="Yes"
            b="No"
            value={formData.openSource}
            onChange={(event) => {
              setFormData({ ...formData, openSource: event.target.value });
            }}
          />
          {DisplayLicence({ formData, setFormData })}
          <ModalButtons setDisplay={setDisplay} handleSubmit={handleSubmit} />
        </div>
      </div>
    );
  } else {
    return null;
  }
}

export default CodeInfo;
