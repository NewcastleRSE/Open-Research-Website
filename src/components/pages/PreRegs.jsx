import React, { useState } from "react";

import PreRegModal from "../formModals/PreRegModal";
import validate from "../../validationRules/PreRegVR";
import str2bool from "../../util/str2bool";

function PreRegs({ formData, setFormData, display, setDisplay }) {
  const [errors, setErrors] = useState({});

  const [preRegInfo, setPreRegInfo] = useState({
    preRegTitle: "",
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

    if (Object.keys(newErrors).length === 0) {
      preRegInfo.preRegDistinction = str2bool(preRegInfo.preRegDistinction);

      formData.PreRegAnalysis.push(preRegInfo);

      setPreRegInfo({
        preRegTitle: "",
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
      preRegTitle: "",
      preRegURL: "",
      preRegDistinction: false,
    });

    setErrors({});
    setDisplay(!display);
  };

  const handleDelete = (e, preReg) => {
    e.preventDefault();

    let filteredArray = formData.PreRegAnalysis.filter(
      (item) => item !== preReg
    );
    setFormData({ ...formData, PreRegAnalysis: filteredArray });
  };

  return (
    <div>
      <div>
        <h2>Pre-registration Analysis Plans</h2>
        {formData.PreRegAnalysis.map((preReg, index) => (
          <div className="output-type row" key={index}>
            <h4 className="output-title col">{preReg.preRegTitle}</h4>
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

      <PreRegModal
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
