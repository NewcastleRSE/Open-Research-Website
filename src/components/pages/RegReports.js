import React, { useState } from "react";

import RegReport from "../forms/RegReport";
import validate from "../../validationRules/RegReportVR";

function RegReports({ formData, setFormData }) {
  const [display, setDisplay] = useState(false);

  const [errors, setErrors] = useState({});

  const [regReportInfo, setRegReportInfo] = useState({
    regReportURL: "",
    regReportFunding: false,
    regReportPeerRev: false,
    regReportChanges: false,
  });

  const handleClick = (e) => {
    e.preventDefault();

    setDisplay(!display);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = validate(regReportInfo);
    setErrors(newErrors);

    if (
      !newErrors.URL &&
      !newErrors.regReportFunding &&
      !newErrors.regReportPeerRev &&
      !newErrors.regReportChanges
    ) {
      formData.regReports.push(regReportInfo);

      setRegReportInfo({
        regReportURL: "",
        regReportFunding: false,
        regReportPeerRev: false,
        regReportChanges: false,
      });

      setErrors({});
      setDisplay(!display);
    }
  };

  const handleCancel = (e) => {
    e.preventDefault();

    setRegReportInfo({
      regReportURL: "",
      regReportFunding: false,
      regReportPeerRev: false,
      regReportChanges: false,
    });

    setErrors({});
    setDisplay(!display);
  };

  const handleDelete = (e, regReport) => {
    e.preventDefault();

    let filteredArray = formData.regReports.filter(
      (item) => item !== regReport
    );
    setFormData({ ...formData, regReports: filteredArray });
  };

  return (
    <div>
      <div>
        <h2>Registered Reports</h2>
        {formData.regReports.map((regReport) => (
          <div className="output-type row">
            <h4 className="output-title col">{regReport.regReportURL}</h4>
            <span className="output-delete">
              <p onClick={(e) => handleDelete(e, regReport)}>Remove</p>
            </span>
          </div>
        ))}
        <button
          type="button"
          className="forward"
          onClick={(e) => handleClick(e)}
        >
          Add Registered Report
        </button>
      </div>

      <RegReport
        show={display}
        formData={regReportInfo}
        setFormData={setRegReportInfo}
        setDisplay={setDisplay}
        handleSubmit={handleSubmit}
        handleCancel={handleCancel}
        errors={errors}
      />
    </div>
  );
}

export default RegReports;
