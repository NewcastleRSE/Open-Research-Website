import React, { useState } from "react";

import Thesis from "../forms/Thesis";
import validate from "../../validationRules/ThesesVR";

function Theses({ formData, setFormData }) {
  const [display, setDisplay] = useState(false);

  const [errors, setErrors] = useState({});

  const [thesesInfo, setThesesInfo] = useState({
    thesisURL: "",
    thesisDOI: "",
    thesisEmbargo: false,
    thesisLicence: "",
  });

  const handleClick = (e) => {
    e.preventDefault();

    setDisplay(!display);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = validate(thesesInfo);
    setErrors(newErrors);

    if (
      !newErrors.URL &&
      !newErrors.DOI &&
      !newErrors.licence &&
      !newErrors.embargo
    ) {
      formData.theses.push(thesesInfo);

      setThesesInfo({
        thesisURL: "",
        thesisDOI: "",
        thesisEmbargo: false,
        thesisLicence: "",
      });

      setErrors({});
      setDisplay(!display);
    }
  };

  const handleCancel = (e) => {
    e.preventDefault();

    setThesesInfo({
      thesisURL: "",
      thesisDOI: "",
      thesisEmbargo: false,
      thesisLicence: "",
    });

    setErrors({});
    setDisplay(!display);
  };

  const handleDelete = (e, theses) => {
    e.preventDefault();

    let filteredArray = formData.theses.filter((item) => item !== theses);
    setFormData({ ...formData, theses: filteredArray });
  };

  return (
    <div>
      <div>
        <h2>Theses and Dissertation</h2>
        {formData.ThesIs.map((theses) => (
          <div className="output-type row">
            <h4 className="output-title col">{theses.thesisURL}</h4>
            <span className="output-delete">
              <p onClick={(e) => handleDelete(e, theses)}>Remove</p>
            </span>
          </div>
        ))}
        <button
          type="button"
          className="forward"
          onClick={(e) => handleClick(e)}
        >
          Add Theses or Dissertation
        </button>
      </div>

      <Thesis
        show={display}
        formData={thesesInfo}
        setFormData={setThesesInfo}
        setDisplay={setDisplay}
        handleSubmit={handleSubmit}
        handleCancel={handleCancel}
        errors={errors}
      />
    </div>
  );
}

export default Theses;
