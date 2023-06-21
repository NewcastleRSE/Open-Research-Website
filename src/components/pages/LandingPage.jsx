import React, { useState, useEffect } from "react";
import OrcidLinkButton from "../OrcidLinkButton";
import TextInput from "../formElements/TextInput";
import { v4 as uuidv4 } from "uuid";

const LandingPage = ({ setPage, formData, setFormData, errors }) => {
  const [orcidID, setOrcidID] = useState(localStorage.getItem("orcidID") || "");
  const [userID, setUserID] = useState("");
  const [step, setStep] = useState(1);

  // sets the orcidID in the formData to the orcid ID that was authenticated.
  const handleOrcidLinked = (orcid) => {
    // should hopefully populate more of the data with the user's information that is gathered from orcid
    const updatedFormData = { ...formData, orcidID: orcid, orcidLinked: true };
    setFormData(updatedFormData);
    setStep(5);
  };

  const handleChange = (name, value) => {
    const updatedFormData = { ...formData, [name]: value };
    setFormData(updatedFormData);
    localStorage.setItem("formData", JSON.stringify(updatedFormData));
  };

  const handleForgotID = (e) => {
    e.preventDefault();
  };

  const handleLogin = (e) => {
    // run validation on the ID to ensure it's a match
    // setFormData with all of the users data.
    // move to next page
    setPage(1);
  };

  useEffect(() => {
    if (orcidID) {
      setPage(1);
    }
  }, [orcidID]);

  const renderButtons = (
    forwardStep,
    backwardStep,
    forwardText,
    backwardText
  ) => (
    <div className="LandingPage__Btns">
      <button
        className="forward"
        onClick={(e) => {
          e.preventDefault();
          setStep(forwardStep);
        }}
      >
        {forwardText}
      </button>
      <button
        className="backward"
        onClick={(e) => {
          e.preventDefault();
          setStep(backwardStep);
        }}
      >
        {backwardText}
      </button>
    </div>
  );

  const renderStep1 = () => (
    <div>
      <p>Hello, welcome to our Open Research Tool.</p>
      <p>Have you used this site before?</p>
      {renderButtons(2, 3, "Yes", "No")}
    </div>
  );

  const renderStep2 = () => (
    <div>
      <p>Would you like to login with ORCID or use your own ID?</p>
      <div>
        <OrcidLinkButton
          onOrcidLinked={handleOrcidLinked}
          text="Login with Orcid"
        />
      </div>
      {renderButtons(4, 1, "Login with User ID", "Back")}
    </div>
  );

  const renderStep3 = () => (
    <div>
      <p>Would you like to login with ORCID?</p>
      <p className="normal">
        If you login with ORCID we will be able to pull in all of your recorded
        works and funding. Then you can simply select which ones you want to
        check for openness.
      </p>

      <OrcidLinkButton
        onOrcidLinked={handleOrcidLinked}
        text="Login with Orcid"
      />
      {renderButtons(5, 1, "No, continue", "Back")}
    </div>
  );

  const renderStep4 = () => (
    <div>
      <p>Please input your UserID</p>
      <TextInput
        name="userID"
        placeholder={"User ID"}
        value={formData.localID}
        onChange={(event) => handleChange("localID", event.target.value)}
        error={errors.localID}
        id="userID"
      />
      <div className="LandingPage__Btns">
        <button
          className="backward"
          onClick={(e) => {
            e.preventDefault();
            setStep(2);
          }}
        >
          Back
        </button>
        <button
          className="forward"
          onClick={(e) => {
            e.preventDefault();
            setStep(5);
          }}
        >
          Forgot ID
        </button>
        {formData.localID && (
          <button className="forward" onClick={(e) => handleLogin(e)}>
            Login
          </button>
        )}
      </div>
    </div>
  );

  const renderStep5 = () => (
    <div>
      <p>Please input your email</p>
      <TextInput
        name="email"
        placeholder={"Email Address"}
        value={formData.email}
        onChange={(event) => handleChange("email", event.target.value)}
        error={errors.localID}
        id="userID"
      />
      <div className="LandingPage__Btns">
        <button
          className="backward"
          onClick={(e) => {
            e.preventDefault();
            setStep(4);
          }}
        >
          Back
        </button>
        <button className="forward" onClick={(e) => handleForgotID(e)}>
          Send Email
        </button>
      </div>
    </div>
  );

  const renderStep = () => {
    switch (step) {
      case 1:
        return renderStep1();
      case 2:
        return renderStep2();
      case 3:
        return renderStep3();
      case 4:
        return renderStep4();
      case 5:
        return renderStep5();
      default:
        return renderStep1();
    }
  };

  return (
    <div className="bigger">
      <h1>Welcome!</h1>
      {renderStep()}
    </div>
  );
};

export default LandingPage;
