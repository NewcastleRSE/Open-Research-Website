import React from "react";

import UrlInput from "../formElements/UrlInput";
import BooleanInput from "../formElements/BooleanInput";
import ModalButtons from "../formElements/ModalButtons";

function RegReport({ show, formData, setFormData, setDisplay, handleSubmit }) {
  if (show) {
    return (
      <div className="modal-container" onClick={() => setDisplay(!show)}>
        <div
          className="step modal-content"
          onClick={(e) => e.stopPropagation()}
        >
          <h2>Registered Reports</h2>
          <h3 className="main_question">Please fill with your details</h3>
          <UrlInput
            name="regReportURL"
            placeholder="Registered Report URL"
            value={formData.regReportURL}
            onChange={(event) => {
              setFormData({ ...formData, regReportURL: event.target.value });
            }}
          />
          <BooleanInput
            name="regReportFunding"
            label="Have you indicated which parts
        of the funded research will be submitted as a registered report?"
            a="Yes"
            b="No"
            value={formData.regReportFunding}
            onChange={(event) => {
              setFormData({
                ...formData,
                regReportFunding: event.target.value,
              });
            }}
          />
          <BooleanInput
            name="regReportPeerRev"
            label="Have you added appropriate
        time for the peer-review process in the project time-line documentation?"
            a="Yes"
            b="No"
            value={formData.regReportPeerRev}
            onChange={(event) => {
              setFormData({
                ...formData,
                regReportPeerRev: event.target.value,
              });
            }}
          />
          <BooleanInput
            name="regReportChanges"
            label="Have you communicated any
        procedural changes that occurred as a result of peer-review feedback to the funder?"
            a="Yes"
            b="No"
            value={formData.regReportChanges}
            onChange={(event) => {
              setFormData({
                ...formData,
                regReportChanges: event.target.value,
              });
            }}
          />
          <ModalButtons setDisplay={setDisplay} handleSubmit={handleSubmit} />
        </div>
      </div>
    );
  } else {
    return null;
  }
}

export default RegReport;
