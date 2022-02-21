import React, { useState } from "react";

import Monograph from "../forms/Monograph";
import validate from "../../validationRules/MonoVR";

function Monographs({ formData, setFormData }) {
  const [display, setDisplay] = useState(false);

  const [errors, setErrors] = useState({});

  const [monographInfo, setMonographInfo] = useState({
    monographURL: "",
    monographDOI: "",
    monographEmbargo: false,
    monographLicence: "",
  });

  const handleClick = (e) => {
    e.preventDefault();

    setDisplay(!display);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = validate(monographInfo);
    setErrors(newErrors);

    if (
      !newErrors.URL &&
      !newErrors.DOI &&
      !newErrors.licence &&
      !newErrors.embargo
    ) {
      formData.monographs.push(monographInfo);

      setMonographInfo({
        monographURL: "",
        monographDOI: "",
        monographEmbargo: false,
        monographLicence: "",
      });

      setErrors({});
      setDisplay(!display);
    }
  };

  const handleCancel = (e) => {
    e.preventDefault();

    setMonographInfo({
      monographURL: "",
      monographDOI: "",
      monographEmbargo: false,
      monographLicence: "",
    });

    setErrors({});
    setDisplay(!display);
  };

  const handleDelete = (e, monograph) => {
    e.preventDefault();

    let filteredArray = formData.monographs.filter(
      (item) => item !== monograph
    );
    setFormData({ ...formData, monographs: filteredArray });
  };

  return (
    <div>
      <div>
        <h2>Monographs</h2>
        {formData.monographs.map((monograph) => (
          <div className="output-type row">
            <h4 className="output-title col">{monograph.monographURL}</h4>
            <span className="output-delete">
              <p onClick={(e) => handleDelete(e, monograph)}>Remove</p>
            </span>
          </div>
        ))}
        <button
          type="button"
          className="forward"
          onClick={(e) => handleClick(e)}
        >
          Add Monograph
        </button>
      </div>

      <Monograph
        show={display}
        formData={monographInfo}
        setFormData={setMonographInfo}
        setDisplay={setDisplay}
        handleSubmit={handleSubmit}
        handleCancel={handleCancel}
        errors={errors}
      />
    </div>
  );
}

export default Monographs;
