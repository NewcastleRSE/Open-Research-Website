import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import OrcidLinkButton from "../OrcidLinkButton";
import getUserOrcidInfo from "../../util/getUserOrcidInfo";
import React from "react";

import DropDown from "../formElements/DropDown";
import DropDownOther from "../formElements/DropDownOther";
import TextInput from "../formElements/TextInput";

function ResearcherInfo({
  formData,
  setFormData,
  errors,
  setOrcidData,
  orcidData,
}) {
  // sets the orcidID in the formData to the orcid ID that was authenticated.
  const handleOrcidLinked = (accessToken, orcid) => {
    // should hopefully populate more of the data with the user's information that is gathered from orcid
    const updatedFormData = { ...formData, orcidID: orcid, orcidLinked: true };
    setFormData(updatedFormData);
  };
  const [orcidID, setOrcidID] = useState(localStorage.getItem("orcidID") || "");
  const navigate = useNavigate();

  useEffect(() => {
    const storedFormData = JSON.parse(localStorage.getItem("formData"));
    if (storedFormData) {
      setFormData(storedFormData);
    }
  }, []);

  useEffect(() => {
    if (orcidID && orcidID !== "undefined") {
      setFormData((prevFormData) => ({
        ...prevFormData,
        orcidID: orcidID,
        orcidLinked: true,
      }));
    }
  }, [orcidID]);

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
      <TextInput
        name="orcidID"
        placeholder={formData.orcidID ? formData.orcidID : "Orcid ID"}
        value={formData.orcidID}
        onChange={(event) => handleChange("orcidID", event.target.value)}
        error={errors.orcidID}
        id="orcidId"
      />
      {(formData.orcidID && !localStorage.getItem("orcidID")) ||
        (formData.orcidID && localStorage.getItem("orcidID") == "undefined") ||
        (formData.orcidID !== localStorage.getItem("orcidID") && (
          <OrcidLinkButton onOrcidLinked={handleOrcidLinked} />
        ))}
      {localStorage.getItem("orcidID") !== "undefined" &&
        localStorage.getItem("orcidID") == formData.orcidID && (
          <p>Orcid Account Successfully Linked.</p>
        )}
    </div>
  );
}

export default ResearcherInfo;
