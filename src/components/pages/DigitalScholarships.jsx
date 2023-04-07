import React, { useState } from "react";

import DigitalScholarshipModal from "../formModals/DigitalScholarshipModal";
import validate from "../../validationRules/DigitalScholarshipVR";
import str2bool from "../../util/str2bool";

function DigitalScholarships({ formData, setFormData, display, setDisplay }) {
  const [errors, setErrors] = useState({});

  const [dsInfo, setDSInfo] = useState({
    dsTitle: "",
    dsURL: "",
    dsEmbargo: false,
    dsLicense: "",
  });

  const handleClick = (e) => {
    e.preventDefault();

    setDisplay(!display);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = validate(dsInfo);
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      dsInfo.dsEmbargo = str2bool(dsInfo.dsEmbargo);

      formData.DigitalScholarship.push(dsInfo);

      setDSInfo({
        dsTitle: "",
        dsURL: "",
        dsEmbargo: false,
        dsLicense: "",
      });

      setErrors({});
      setDisplay(!display);
    }
  };

  const handleCancel = (e) => {
    e.preventDefault();

    setDSInfo({
      dsTitle: "",
      dsURL: "",
      dsEmbargo: false,
      dsLicense: "",
    });

    setErrors({});
    setDisplay(!display);
  };

  const handleDelete = (e, ds) => {
    e.preventDefault();

    let filteredArray = formData.DigitalScholarship.filter(
      (item) => item !== ds
    );
    setFormData({ ...formData, DigitalScholarship: filteredArray });
  };

  return (
    <div>
      <div>
        <h2>Digital Scholarships</h2>
        {formData.DigitalScholarship.map((ds, index) => (
          <div className="output-type row" key={index}>
            <h4 className="output-title col">{ds.dsTitle}</h4>
            <span className="output-delete">
              <p onClick={(e) => handleDelete(e, ds)}>Remove</p>
            </span>
          </div>
        ))}
        <button
          type="button"
          className="forward"
          onClick={(e) => handleClick(e)}
        >
          Add Digital Scholarship
        </button>
      </div>

      <DigitalScholarshipModal
        show={display}
        formData={dsInfo}
        setFormData={setDSInfo}
        setDisplay={setDisplay}
        handleSubmit={handleSubmit}
        handleCancel={handleCancel}
        errors={errors}
      />
    </div>
  );
}

export default DigitalScholarships;
