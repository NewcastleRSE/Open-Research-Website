import React from "react";

import UrlInput from "../formElements/UrlInput";
import TextInput from "../formElements/TextInput";
import BooleanInput from "../formElements/BooleanInput";
import ModalButtons from "../formElements/ModalButtons";

const DisplayLicense = ({ formData, setFormData, errors }) => {
  if (formData.openSource === "Yes") {
    return (
      <TextInput
        name="license"
        placeholder="License"
        value={formData.codeLicense}
        onChange={(event) =>
          setFormData({ ...formData, codeLicense: event.target.value })
        }
        error={errors.license}
      />
    );
  } else {
    return null;
  }
};

function CodeInfo({
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
          <h2>Code</h2>
          <h3 className="main_question">
            Please fill with your details about your code
          </h3>
          <TextInput
            name="codeTitle"
            placeholder="Code Title"
            value={formData.codeTitle}
            onChange={(event) =>
              setFormData({ ...formData, codeTitle: event.target.value })
            }
            error={errors.title}
          />
          <UrlInput
            name="codeURL"
            placeholder="Code URL"
            value={formData.codeURL}
            onChange={(event) =>
              setFormData({ ...formData, codeURL: event.target.value })
            }
            error={errors.URL}
          />
          <TextInput
            name="codeDOI"
            placeholder="Code DOI"
            value={formData.codeDOI}
            onChange={(event) =>
              setFormData({ ...formData, codeDOI: event.target.value })
            }
            error={errors.DOI}
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
            error={errors.openSource}
          />
          {DisplayLicense({ formData, setFormData, errors })}
          <BooleanInput
            name="codeRelease"
            label="Was it released no later than the publication of the first paper that uses it?"
            a="Yes"
            b="No"
            value={formData.codeRelease}
            onChange={(event) => {
              setFormData({ ...formData, codeRelease: event.target.value });
            }}
            error={errors.codeRelease}
          />
          <BooleanInput
            name="codeConf"
            label="Is independant confirmation of results possible with this code?"
            a="Yes"
            b="No"
            value={formData.codeConf}
            onChange={(event) => {
              setFormData({ ...formData, codeConf: event.target.value });
            }}
            error={errors.codeConf}
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

export default CodeInfo;
