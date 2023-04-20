import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import OrcidLinkButton from "../OrcidLinkButton";
import getUserOrcidInfo from "../../util/getUserOrcidInfo";

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

  const navigate = useNavigate();

  useEffect(() => {
    const orcidID = localStorage.getItem("orcidID");
    if (orcidID && orcidID !== "undefined") {
      const userOrcidData = getUserOrcidInfo(navigate);
      setOrcidData({ ...orcidData, userOrcidData });
      const updatedFormData = {
        ...formData,
        orcidID: orcidID,
        orcidLinked: true,
      };
      setFormData(updatedFormData);
    }
  }, [localStorage.getItem("orcidID")]);

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
        otherValue={formData.school == "other" && formData.otherSchool}
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
      <TextInput
        name="orcidID"
        placeholder="Orcid ID"
        value={formData.orcidID}
        onChange={(event) =>
          setFormData({ ...formData, orcidID: event.target.value })
        }
        error={errors.orcidID}
      />
      {(formData.orcidID && !localStorage.getItem("orcidID")) ||
        (formData.orcidID && localStorage.getItem("orcidID") == "undefined" && (
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
