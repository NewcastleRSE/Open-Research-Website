import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import OrcidLinkButton from "../OrcidLinkButton";
import getUserOrcidInfo from "../../util/fetchingOrcidData/getUserOrcidInfo";
import React from "react";

import DropDown from "../formElements/DropDown";
import DropDownOther from "../formElements/DropDownOther";
import TextInput from "../formElements/TextInput";

function ResearcherInfo({ formData, setFormData, errors }) {
  const [orcidID, setOrcidID] = useState(localStorage.getItem("orcidID") || "");

  useEffect(() => {
    const storedFormData = JSON.parse(localStorage.getItem("formData"));
    if (storedFormData) {
      setFormData(storedFormData);
    }
  }, []);

  const handleChange = (name, value) => {
    const updatedFormData = { ...formData, [name]: value };
    setFormData(updatedFormData);
    localStorage.setItem("formData", JSON.stringify(updatedFormData));
  };

  return (
    <div className="step">
      <h2>Researcher</h2>
      <h3 className="main_question">Please fill with your details</h3>
      <TextInput
        name="fullname"
        placeholder={formData.fullName ? formData.fullName : "Full Name"}
        value={formData.fullName}
        onChange={(event) => handleChange("fullName", event.target.value)}
        error={errors.fullName}
        id="fullName"
      />
      <DropDown
        name="faculty"
        placeholder={formData.faculty ? formData.faculty : "Faculty"}
        options={[{ value: "SAgE" }, { value: "HaSS" }, { value: "FMS" }]}
        value={formData.faculty}
        onChange={(event) => handleChange("faculty", event.target.value)}
        error={errors.faculty}
        id="faculty"
      />
      <DropDownOther
        name="school"
        placeholder={formData.school ? formData.school : "School/ Institute"}
        options={[
          { value: "School of Computing" },
          { value: "Business School" },
          { value: "Medical School" },
        ]}
        value={formData.school}
        onChange={(event) => handleChange("school", event.target.value)}
        otherValue={formData.school == "other" && formData.otherSchool}
        otherOnChange={(event) =>
          handleChange("otherSchool", event.target.value)
        }
        error={errors.school}
        otherError={errors.otherSchool}
        id="school"
      />
      <DropDown
        name="careerStage"
        placeholder={
          formData.careerStage ? formData.careerStage : "Career Stage"
        }
        options={[
          { value: "PhD" },
          { value: "Early career" },
          { value: "Mid career" },
          { value: "Post Doc" },
          { value: "Senior" },
        ]}
        value={formData.careerStage}
        onChange={(event) => handleChange("careerStage", event.target.value)}
        error={errors.careerStage}
        id="careerStage"
      />
      {orcidID.length > 1 && (
        <TextInput
          name="orcidID"
          placeholder={orcidID}
          value={orcidID}
          id="orcidId"
          readOnly
        />
      )}
      {formData.localID.length > 0 && (
        <TextInput
          name="localID"
          placeholder={`Local ID: ${formData.localID}`}
          value={`Local ID: ${formData.localID}`}
          id="localID"
          readOnly
        />
      )}
    </div>
  );
}

export default ResearcherInfo;
