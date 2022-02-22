import React, { useState } from "react";

import Preprint from "../forms/Preprint";
import validate from "../../validationRules/PreprintsVR";

function Preprints({ formData, setFormData }) {
  const [display, setDisplay] = useState(false);

  const [errors, setErrors] = useState({});

  const [preprintInfo, setPreprintInfo] = useState({
    preprintURL: "",
    preprintDOI: "",
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

    console.log(newErrors);

    if (!newErrors.URL && !newErrors.DOI && !newErrors.preprintRelease) {
      formData.preprints.push(preprintInfo);

      setPreprintInfo({
        preprintURL: "",
        preprintDOI: "",
        preprintRelease: false,
      });

      setErrors({});
      setDisplay(!display);
    }
  };

  const handleCancel = (e) => {
    e.preventDefault();

    setPreprintInfo({
      preprintURL: "",
      preprintDOI: "",
      preprintRelease: false,
    });

    setErrors({});
    setDisplay(!display);
  };

  const handleDelete = (e, preprint) => {
    e.preventDefault();

    let filteredArray = formData.preprints.filter((item) => item !== preprint);
    setFormData({ ...formData, preprints: filteredArray });
  };

  return (
    <div>
      <div>
        <h2>Preprints</h2>
        {formData.preprints.map((preprint) => (
          <div className="output-type row">
            <h4 className="output-title col">{preprint.preprintURL}</h4>
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
