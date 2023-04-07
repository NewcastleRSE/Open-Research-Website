import React, { useState } from "react";

import MonographModal from "../formModals/MonographModal";
import validate from "../../validationRules/MonoVR";
import str2bool from "../../util/str2bool";

function Monographs({ formData, setFormData, display, setDisplay }) {
  const [errors, setErrors] = useState({});

  const [monographInfo, setMonographInfo] = useState({
    monographTitle: "",
    monographURL: "",
    monographDOI: "",
    monographEmbargo: false,
    monographLicense: "",
  });

  const handleClick = (e) => {
    e.preventDefault();

    setDisplay(!display);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = validate(monographInfo);
    setErrors(newErrors);
    console.log(newErrors);
    if (Object.keys(newErrors).length === 0) {
      monographInfo.monographEmbargo = str2bool(monographInfo.monographEmbargo);

      formData.Monograph.push(monographInfo);

      setMonographInfo({
        monographTitle: "",
        monographURL: "",
        monographDOI: "",
        monographEmbargo: false,
        monographLicense: "",
      });

      setErrors({});
      setDisplay(!display);
    }
  };

  const handleCancel = (e) => {
    e.preventDefault();

    setMonographInfo({
      monographTitle: "",
      monographURL: "",
      monographDOI: "",
      monographEmbargo: false,
      monographLicense: "",
    });

    setErrors({});
    setDisplay(!display);
  };

  const handleDelete = (e, monograph) => {
    e.preventDefault();

    let filteredArray = formData.Monograph.filter((item) => item !== monograph);
    setFormData({ ...formData, Monograph: filteredArray });
  };

  return (
    <div>
      <div>
        <h2>Monographs</h2>
        {formData.Monograph.map((monograph, index) => (
          <div className="output-type row" key={index}>
            <h4 className="output-title col">{monograph.monographTitle}</h4>
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

      <MonographModal
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
