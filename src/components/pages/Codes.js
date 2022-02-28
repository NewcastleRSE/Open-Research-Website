import React, { useState } from "react";

import Code from "../forms/Code";
import validate from "../../validationRules/CodeVR";
import str2bool from "../../util/str2bool";

function Codes({ formData, setFormData }) {
  const [display, setDisplay] = useState(false);

  const [errors, setErrors] = useState({});

  const [codeInfo, setCodeInfo] = useState({
    codeURL: "",
    codeDOI: "",
    openSource: false,
    codeLicense: "",
  });

  const handleClick = (e) => {
    e.preventDefault();

    setDisplay(!display);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = validate(codeInfo);
    setErrors(newErrors);

    if (
      !newErrors.URL &&
      !newErrors.DOI &&
      !newErrors.license &&
      !newErrors.openSource
    ) {
      codeInfo.openSource = str2bool(codeInfo.openSource);

      formData.Code.push(codeInfo);

      setCodeInfo({
        codeURL: "",
        codeDOI: "",
        openSource: false,
        codeLicense: "",
      });

      setDisplay(!display);
    }
  };

  const handleCancel = (e) => {
    e.preventDefault();

    setCodeInfo({
      codeURL: "",
      codeDOI: "",
      openSource: false,
      codeLicense: "",
    });

    setErrors({});
    setDisplay(!display);
  };

  const handleDelete = (e, code) => {
    e.preventDefault();

    let filteredArray = formData.Code.filter((item) => item !== code);
    setFormData({ ...formData, Code: filteredArray });
  };

  return (
    <div>
      <div>
        <h2>Code</h2>
        {formData.Code.map((code) => (
          <div className="output-type row">
            <h4 className="output-title col">{code.codeURL}</h4>
            <span className="output-delete">
              <p onClick={(e) => handleDelete(e, code)}>Remove</p>
            </span>
          </div>
        ))}
        <button
          type="button"
          className="forward"
          onClick={(e) => handleClick(e)}
        >
          Add Code
        </button>
      </div>

      <Code
        show={display}
        formData={codeInfo}
        setFormData={setCodeInfo}
        setDisplay={setDisplay}
        handleSubmit={handleSubmit}
        handleCancel={handleCancel}
        errors={errors}
      />
    </div>
  );
}

export default Codes;
