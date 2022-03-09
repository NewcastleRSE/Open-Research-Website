import React, { useState } from "react";

import DropDown from "../formElements/DropDown";
import DropDownOther from "../formElements/DropDownOther";
import TextInput from "../formElements/TextInput";

function ResearcherInfo({ formData, setFormData, errors }) {
  return (
    <div className="step">
      <h2>Researcher</h2>
      <h3 className="main_question">Please fill with your details</h3>
      <TextInput
        name="fullname"
        placeholder="Full Name"
        value={formData.fullName}
        onChange={(event) =>
          setFormData({ ...formData, fullName: event.target.value })
        }
        error={errors.fullName}
      />
      <DropDown
        name="faculty"
        placeholder="Faculty"
        options={[{ value: "SAgE" }, { value: "HaSS" }, { value: "FMS" }]}
        value={formData.faculty}
        onChange={(event) => {
          setFormData({ ...formData, faculty: event.target.value });
        }}
        error={errors.faculty}
        id="faculty"
      />
      <DropDownOther
        name="school"
        placeholder="School/ Institute"
        options={[
          { value: "School of Computing" },
          { value: "Business School" },
          { value: "Medical School" },
        ]}
        value={formData.school}
        onChange={(event) => {
          setFormData({ ...formData, school: event.target.value });
        }}
        otherValue={formData.otherSchool}
        otherOnChange={(event) => {
          setFormData({
            ...formData,
            otherSchool: event.target.value,
          });
        }}
        error={errors.school}
        otherError={errors.otherSchool}
        id="school"
      />
      <DropDown
        name="careerStage"
        placeholder="Career Stage"
        options={[
          { value: "PhD" },
          { value: "Early career" },
          { value: "Mid career" },
          { value: "Post Doc" },
          { value: "Senior" },
        ]}
        value={formData.careerStage}
        onChange={(event) => {
          setFormData({
            ...formData,
            careerStage: event.target.value,
          });
        }}
        error={errors.careerStage}
        id="careerStage"
      />
    </div>
  );
}

export default ResearcherInfo;
