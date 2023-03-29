import React, { useState } from "react";

import Preprint from "../forms/Preprint";
import validate from "../../validationRules/PreprintsVR";
import str2bool from "../../util/str2bool";

function Preprints({ formData, setFormData, display, setDisplay }) {
  const [errors, setErrors] = useState({});

  const [preprintInfo, setPreprintInfo] = useState({
    preprintTitle: "",
    preprintURL: "",
    preprintDOI: "",
    preprintLicense: "",
    preprintRelease: false,
  });

  const handleClick = (e) => {
    e.preventDefault();

    setDisplay(!display);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = validate(preprintInfo);
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      preprintInfo.preprintRelease = str2bool(preprintInfo.preprintRelease);

      formData.Preprint.push(preprintInfo);

      setPreprintInfo({
        preprintTitle: "",
        preprintURL: "",
        preprintDOI: "",
        preprintLicense: "",
        preprintRelease: false,
      });

      setErrors({});
      setDisplay(!display);
    }
  };

  const handleCancel = (e) => {
    e.preventDefault();

    setPreprintInfo({
      preprintTitle: "",
      preprintURL: "",
      preprintDOI: "",
      preprintLicense: "",
      preprintRelease: false,
    });

    setErrors({});
    setDisplay(!display);
  };

  const handleDelete = (e, preprint) => {
    e.preventDefault();

    let filteredArray = formData.Preprint.filter((item) => item !== preprint);
    setFormData({ ...formData, Preprint: filteredArray });
  };

  return (
    <div>
      <div>
        <h2>Preprints</h2>
        {formData.Preprint.map((preprint) => (
          <div className="output-type row">
            <h4 className="output-title col">{preprint.preprintTitle}</h4>
            <span className="output-delete">
              <p onClick={(e) => handleDelete(e, preprint)}>Remove</p>
            </span>
          </div>
        ))}
        <button
          type="button"
          className="forward"
          onClick={(e) => handleClick(e)}
        >
          Add Preprint
        </button>
      </div>

      <Preprint
        show={display}
        formData={preprintInfo}
        setFormData={setPreprintInfo}
        setDisplay={setDisplay}
        handleSubmit={handleSubmit}
        handleCancel={handleCancel}
        errors={errors}
      />
    </div>
  );
}

export default Preprints;
