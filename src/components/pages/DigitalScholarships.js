import React, { useState } from "react";

import DigitalScholarship from "../forms/DigitalScholarship";

function DigitalScholarships({ formData, setFormData }) {
  const [display, setDisplay] = useState(false);

  const [dsInfo, setDSInfo] = useState({
    dsURL: "",
    dsEmbargo: false,
    dsLicence: "",
  });

  const handleClick = (e) => {
    e.preventDefault();

    setDisplay(!display);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    formData.digitalScholarships.push(dsInfo);

    setDSInfo({
      dsURL: "",
      dsEmbargo: false,
      dsLicence: "",
    });

    setDisplay(!display);
  };

  const handleDelete = (e, ds) => {
    e.preventDefault();

    let filteredArray = formData.digitalScholarships.filter(
      (item) => item !== ds
    );
    setFormData({ ...formData, digitalScholarships: filteredArray });
  };

  return (
    <div>
      <div>
        <h2>Digital Scholarships</h2>
        {formData.digitalScholarships.map((ds) => (
          <div className="output-type row">
            <h4 className="output-title col">{ds.dsURL}</h4>
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

      <DigitalScholarship
        show={display}
        formData={dsInfo}
        setFormData={setDSInfo}
        setDisplay={setDisplay}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

export default DigitalScholarships;
