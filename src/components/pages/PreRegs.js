import React, { useState } from "react";

import PreReg from "../forms/PreReg";
import validate from "../../validationRules/PreRegVR";

function PreRegs({ formData, setFormData }) {
  const [display, setDisplay] = useState(false);

  const [errors, setErrors] = useState({});

  const [preRegInfo, setPreRegInfo] = useState({
    preRegURL: "",
    preRegDistinction: false,
  });

  const handleClick = (e) => {
    e.preventDefault();

    setDisplay(!display);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = validate(preRegInfo);
    setErrors(newErrors);

    if (!newErrors.URL && !newErrors.preRegDistinction) {
      formData.preRegs.push(preRegInfo);

      setPreRegInfo({
        preRegURL: "",
        preRegDistinction: false,
      });

      setErrors({});
      setDisplay(!display);
    }
  };

  const handleCancel = (e) => {
    e.preventDefault();

    setPreRegInfo({
      preRegURL: "",
      preRegDistinction: false,
    });

    setErrors({});
    setDisplay(!display);
  };

  const handleDelete = (e, preReg) => {
    e.preventDefault();

    let filteredArray = formData.preRegs.filter((item) => item !== preReg);
    setFormData({ ...formData, preRegs: filteredArray });
  };

  return (
    <div>
      <div>
        <h2>Pre-registration Analysis Plans</h2>
        {formData.preRegs.map((preReg) => (
          <div className="output-type row">
            <h4 className="output-title col">{preReg.preRegURL}</h4>
            <span className="output-delete">
              <p onClick={(e) => handleDelete(e, preReg)}>Remove</p>
            </span>
          </div>
        ))}
        <button
          type="button"
          className="forward"
          onClick={(e) => handleClick(e)}
        >
          Add Pre-registration Analysis Plan
        </button>
      </div>

      <PreReg
        show={display}
        formData={preRegInfo}
        setFormData={setPreRegInfo}
        setDisplay={setDisplay}
        handleSubmit={handleSubmit}
        handleCancel={handleCancel}
        errors={errors}
      />
    </div>
  );
}

export default PreRegs;
