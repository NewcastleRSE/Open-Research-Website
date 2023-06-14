import { useState } from "react";
import { RegReportModal } from "../formModals/Modals";
import validate from "../../validationRules/Validation";

import { v4 as uuidv4 } from "uuid";
import React from "react";

function RegReports({ formData, setFormData, display, setDisplay }) {
  const [errors, setErrors] = useState({});
  const [editMode, setEditMode] = useState(false);
  const [currRegReport, setCurrRegReport] = useState({});

  const [regReportInfo, setRegReportInfo] = useState({
    title: "",
    url: "",
    funding: false,
    peerRev: false,
    reportChanges: false,
    complete: true,
    selected: true,
  });

  const handleClick = (e) => {
    e.preventDefault();
    if (!editMode) {
      wipeRegReportInfo();
    }
    setDisplay(!display);
  };

  const wipeRegReportInfo = () => {
    setRegReportInfo({
      title: "",
      url: "",
      funding: false,
      peerRev: false,
      reportChanges: false,
      complete: true,
      selected: true,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = validate(regReportInfo);
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // regReportInfo.regReportChanges = str2bool(regReportInfo.regReportChanges);
      // regReportInfo.regReportFunding = str2bool(regReportInfo.regReportFunding);
      // regReportInfo.regReportPeerRev = str2bool(regReportInfo.regReportPeerRev);

      if (!editMode) {
        setFormData({
          ...formData,
          RegReport: [
            ...formData.RegReport,
            { ...regReportInfo, id: uuidv4() },
          ],
        });
      } else {
        const updatedRegReports = formData.RegReport.map((i) =>
          i.id === currRegReport.id ? regReportInfo : i
        );
        const updatedFormData = {
          ...formData,
          RegReport: updatedRegReports,
        };
        setFormData(updatedFormData);
      }

      wipeRegReportInfo();
      setErrors({});
      setDisplay(!display);
      setEditMode(false);
    }
  };

  const handleCancel = (e) => {
    e.preventDefault();
    wipeRegReportInfo();
    setErrors({});
    setDisplay(!display);
  };

  const handleDelete = (e, regReport) => {
    e.preventDefault();

    let filteredArray = formData.RegReport.filter((item) => item !== regReport);
    setFormData({ ...formData, RegReport: filteredArray });
  };

  const handleEdit = (e, regReport) => {
    e.preventDefault();

    setCurrRegReport(regReport);

    setRegReportInfo({
      ...regReport,
    });

    setEditMode(true);
    setDisplay(!display);
  };

  return (
    <div>
      <div>
        <h2>Registered Reports</h2>
        {formData.RegReport.map((regReport, index) => (
          <div className="output-type row" key={index}>
            <h4 className="output-title col">{regReport.regReportTitle}</h4>
            <span
              className="output-edit"
              style={{ cursor: "pointer", marginRight: "1rem" }}
            >
              {regReport.selected ? (
                <p onClick={(e) => handleToggleEntry(e, regReport)}>Deselect</p>
              ) : (
                <p onClick={(e) => handleToggleEntry(e, regReport)}>Select</p>
              )}
            </span>
            <span
              className="output-edit"
              style={{ cursor: "pointer", marginRight: "1rem" }}
            >
              <p onClick={(e) => handleEdit(e, regReport)}>Edit</p>
            </span>
            <span className="output-delete">
              {!regReport.orcid && (
                <p onClick={(e) => handleDelete(e, regReport)}>Delete</p>
              )}
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

      <RegReportModal
        show={display}
        formData={regReportInfo}
        setFormData={setRegReportInfo}
        setDisplay={setDisplay}
        handleSubmit={handleSubmit}
        handleCancel={handleCancel}
        handleSave={handleSave}
        errors={errors}
      />
    </div>
  );
}

export default RegReports;
