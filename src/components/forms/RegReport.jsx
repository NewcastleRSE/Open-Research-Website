import React from "react";

import TextInput from "../formElements/TextInput";
import UrlInput from "../formElements/UrlInput";
import BooleanInput from "../formElements/BooleanInput";
import ModalButtons from "../formElements/ModalButtons";
import DropDown from "../formElements/DropDown";
import sectionTypes from "../../util/data/sectionTypes";

function RegReport({
  formData,
  setFormData,
  handleCancel,
  handleSubmit,
  handleSave,
  errors,
}) {
  return (
    <>
      <h3 className="main_question">Please fill with your details</h3>
      <TextInput
        name="regReportTitle"
        placeholder="Registered Report Title"
        value={formData.title}
        onChange={(event) => {
          setFormData({ ...formData, title: event.target.value });
        }}
        error={errors.title}
        readOnly={formData.orcid}
      />
      <UrlInput
        name="regReportURL"
        placeholder="Registered Report URL"
        value={formData.url}
        onChange={(event) => {
          setFormData({ ...formData, url: event.target.value });
        }}
        error={errors.URL}
        readOnly={formData.orcid}
      />
      {sectionTypes.RegReport.length !== 0 && (
        <DropDown
          name="regReport-type"
          placeholder={formData.type ? formData.type : "Type"}
          options={sectionTypes.RegReport.map((i) => {
            return { value: i };
          })}
          value={formData.type}
          onChange={(event) => {
            setFormData({ ...formData, type: event.target.value });
          }}
          id="regReport-type"
          disabled={formData.orcid}
        />
      )}
      <BooleanInput
        name="regReportFunding"
        label="Have you indicated which parts
        of the funded research will be submitted as a registered report?"
        a="Yes"
        b="No"
        value={formData.funding}
        onChange={(event) => {
          setFormData({
            ...formData,
            funding: event.target.value,
          });
        }}
        error={errors.funding}
      />
      <BooleanInput
        name="regReportPeerRev"
        label="Have you added appropriate
        time for the peer-review process in the project time-line documentation?"
        a="Yes"
        b="No"
        value={formData.peerRev}
        onChange={(event) => {
          setFormData({
            ...formData,
            peerRev: event.target.value,
          });
        }}
        error={errors.peerRev}
      />
      <BooleanInput
        name="regReportChanges"
        label="Have you communicated any
        procedural changes that occurred as a result of peer-review feedback to the funder?"
        a="Yes"
        b="No"
        value={formData.changes}
        onChange={(event) => {
          setFormData({
            ...formData,
            changes: event.target.value,
          });
        }}
        error={errors.changes}
      />
      {formData.orcid ? (
        <ModalButtons handleSave={handleSave} handleCancel={handleCancel} />
      ) : (
        <ModalButtons handleSubmit={handleSubmit} handleCancel={handleCancel} />
      )}
    </>
  );
}

export default RegReport;
