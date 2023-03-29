import React, { useState } from "react";

import RegReport from "../forms/RegReport";
import validate from "../../validationRules/RegReportVR";
import str2bool from "../../util/str2bool";

function RegReports({ formData, setFormData, display, setDisplay }) {
  const [errors, setErrors] = useState({});

  const [regReportInfo, setRegReportInfo] = useState({
    regReportTitle: "",
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

    if (Object.keys(newErrors).length === 0) {
      regReportInfo.regReportChanges = str2bool(regReportInfo.regReportChanges);
      regReportInfo.regReportFunding = str2bool(regReportInfo.regReportFunding);
      regReportInfo.regReportPeerRev = str2bool(regReportInfo.regReportPeerRev);

      formData.RegReport.push(regReportInfo);

      setRegReportInfo({
        regReportTitle: "",
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
      regReportTitle: "",
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

    let filteredArray = formData.RegReport.filter((item) => item !== regReport);
    setFormData({ ...formData, RegReport: filteredArray });
  };

  return (
    <div>
      <div>
        <h2>Registered Reports</h2>
        {formData.RegReport.map((regReport) => (
          <div className="output-type row">
            <h4 className="output-title col">{regReport.regReportTitle}</h4>
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
