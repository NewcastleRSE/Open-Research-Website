import React, { useState } from "react";

import ThesisModal from "../formModals/ThesisModal";
import validate from "../../validationRules/ThesesVR";
import str2bool from "../../util/str2bool";

function Theses({ formData, setFormData, display, setDisplay }) {
  const [errors, setErrors] = useState({});

  const [thesesInfo, setThesesInfo] = useState({
    thesisTitle: "",
    thesisURL: "",
    thesisDOI: "",
    thesisEmbargo: false,
    thesisLicense: "",
  });

  const handleClick = (e) => {
    e.preventDefault();

    setDisplay(!display);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = validate(thesesInfo);
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      thesesInfo.thesisEmbargo = str2bool(thesesInfo.thesisEmbargo);

      formData.Thesis.push(thesesInfo);

      setThesesInfo({
        thesisTitle: "",
        thesisURL: "",
        thesisDOI: "",
        thesisEmbargo: false,
        thesisLicense: "",
      });

      setErrors({});
      setDisplay(!display);
    }
  };

  const handleCancel = (e) => {
    e.preventDefault();

    setThesesInfo({
      thesisTitle: "",
      thesisURL: "",
      thesisDOI: "",
      thesisEmbargo: false,
      thesisLicense: "",
    });

    setErrors({});
    setDisplay(!display);
  };

  const handleDelete = (e, theses) => {
    e.preventDefault();

    let filteredArray = formData.Thesis.filter((item) => item !== theses);
    setFormData({ ...formData, Thesis: filteredArray });
  };

  return (
    <div>
      <div>
        <h2>Theses and Dissertation</h2>
        {formData.Thesis.map((theses, index) => (
          <div className="output-type row" key={index}>
            <h4 className="output-title col">{theses.thesisTitle}</h4>
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

      <ThesisModal
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
