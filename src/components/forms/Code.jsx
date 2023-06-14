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
        value={formData.license}
        onChange={(event) =>
          setFormData({ ...formData, license: event.target.value })
        }
        error={errors.license}
      />
    );
  } else {
    return null;
  }
};

function CodeInfo({
  formData,
  setFormData,
  handleCancel,
  handleSave,
  handleSubmit,
  errors,
}) {
  return (
    <>
      <h3 className="main_question">
        Please fill with your details about your code
      </h3>
      <TextInput
        name="codeTitle"
        placeholder="Code Title"
        value={formData.title}
        onChange={(event) =>
          setFormData({ ...formData, title: event.target.value })
        }
        error={errors.title}
      />
      <UrlInput
        name="codeURL"
        placeholder="Code URL"
        value={formData.url}
        onChange={(event) =>
          setFormData({ ...formData, url: event.target.value })
        }
        error={errors.URL}
      />
      <TextInput
        name="codeDOI"
        placeholder="Code DOI"
        value={formData.doi}
        onChange={(event) =>
          setFormData({ ...formData, doi: event.target.value })
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
        value={formData.release}
        onChange={(event) => {
          setFormData({ ...formData, release: event.target.value });
        }}
        error={errors.release}
      />
      <BooleanInput
        name="codeConf"
        label="Is independant confirmation of results possible with this code?"
        a="Yes"
        b="No"
        value={formData.conf}
        onChange={(event) => {
          setFormData({ ...formData, conf: event.target.value });
        }}
        error={errors.conf}
      />
      {formData.orcid ? (
        <ModalButtons handleSave={handleSave} handleCancel={handleCancel} />
      ) : (
        <ModalButtons handleSubmit={handleSubmit} handleCancel={handleCancel} />
      )}{" "}
    </>
  );
}

export default CodeInfo;
