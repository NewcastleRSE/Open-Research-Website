import React, { useState } from "react";

import Code from "../forms/Code";

function Codes({ formData, setFormData }) {
  const [display, setDisplay] = useState(false);

  const [codeInfo, setCodeInfo] = useState({
    codeURL: "",
    codeDOI: "",
    openSource: false,
    codeLicence: "",
  });

  const handleClick = (e) => {
    e.preventDefault();

    setDisplay(!display);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    formData.codes.push(codeInfo);

    setCodeInfo({
      codeURL: "",
      codeDOI: "",
      openSource: false,
      codeLicence: "",
    });

    setDisplay(!display);
  };

  const handleDelete = (e, code) => {
    e.preventDefault();

    let filteredArray = formData.codes.filter((item) => item !== code);
    setFormData({ ...formData, codes: filteredArray });
  };

  return (
    <div>
      <div>
        <h2>Code</h2>
        {formData.codes.map((code) => (
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
      />
    </div>
  );
}

export default Codes;
