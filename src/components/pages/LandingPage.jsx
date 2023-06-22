import React, { useState, useEffect } from "react";
import OrcidLinkButton from "../OrcidLinkButton";
import TextInput from "../formElements/TextInput";
import blankResearchInfo from "../../util/data/blankResearchInfo";
import registerUser from "../../util/userFunctions/registerUser";
import { v4 as uuidv4 } from "uuid";
import loginUser from "../../util/userFunctions/loginUser";
import forgotID from "../../util/userFunctions/forgotID";
import useSetToken from "../../util/userFunctions/useSetToken";

const LandingPage = ({ setPage, formData, setFormData, errors }) => {
  const [userID, setUserID] = useState(localStorage.getItem("userID") || "");
  const [email, setEmail] = useState("");
  const [step, setStep] = useState(1);
  const setToken = useSetToken();

  const handleChange = (name, value) => {
    if (name === "userID") {
      setUserID(value);
      localStorage.setItem("userID", value);
    }
    if (name === "email") {
      setEmail(value);
      localStorage.setItem("email", value);
    }
    const updatedFormData = { ...formData, [name]: value };
    localStorage.setItem("formData", JSON.stringify(updatedFormData));
    setFormData(updatedFormData);
  };

  useEffect(() => {
    const storedFormData = JSON.parse(localStorage.getItem("formData"));
    if (storedFormData) {
      setFormData(storedFormData);
    }
  }, []);

  // get email sent
  const handleForgotID = (e) => {
    e.preventDefault();
    forgotID(email);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const user = await loginUser(userID);
      setToken(user);
      setPage(1);
    } catch (err) {
      console.error(err);
    }
  };

  const handleRegister = async (id, orcid) => {
    try {
      const user = await registerUser(id, email, orcid);
      console.log(user);
      setPage(1);
    } catch (err) {
      console.error(err);
    }
  };

  // if the user has an orcidID in their local storage or step 6 then go to the researcherInfo page. Reset all of the formData if the user decides to login with a new ID. However, it will save the formData if the user just continues with their old id.
  useEffect(() => {
    // Register a new User not using Orcid
    if (step === "Register") {
      const id = uuidv4();
      // Set formData to blank to overwrite anything saved by localStorage as it's a new user.
      const temp = { ...blankResearchInfo };
      setFormData(temp);
      localStorage.setItem("userID", id);
      // Register the user
      handleRegister(id, false);
      localStorage.setItem("formData", JSON.stringify(temp));
      setPage(1);
    }
  }, [step]);

  const renderButtons = (
    forwardStep,
    backwardStep,
    forwardText,
    backwardText,
    orcidText
  ) => {
    return (
      <div className="LandingPage__Btns">
        <button
          className="backward"
          onClick={(e) => {
            e.preventDefault();
            setStep(backwardStep);
          }}
        >
          {backwardText}
        </button>
        <button
          className="forward"
          onClick={(e) => {
            e.preventDefault();
            setStep(forwardStep);
          }}
        >
          {forwardText}
        </button>

        {orcidText && (
          <OrcidLinkButton onOrcidLinked={handleLogin} text={orcidText} />
        )}
      </div>
    );
  };

  const renderStep1 = () => (
    <div>
      <p>Have you used this site before?</p>
      {renderButtons(2, 3, "Yes", "No")}
    </div>
  );

  const renderStep2 = () => (
    <div>
      <p>
        Would you like to login with ORCID or use your ID from your last
        session?
      </p>
      {renderButtons(4, 1, "ID Login", "Back", "Orcid Login")}
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
      {renderButtons(6, 1, "No, continue...", "Back", "Yes")}
    </div>
  );

  const renderStep4 = () => (
    <div>
      <p>Please input your UserID</p>
      <TextInput
        name="userID"
        placeholder={userID || "User ID"}
        value={userID}
        onChange={(event) => handleChange("userID", event.target.value)}
        error={errors.userID}
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
        {!userID ? (
          <button
            className="forward"
            onClick={(e) => {
              e.preventDefault();
              setStep(5);
            }}
          >
            Forgot ID
          </button>
        ) : (
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
        placeholder={"email"}
        value={email}
        onChange={(event) => handleChange("email", event.target.value)}
        error={errors.email}
        id="email"
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

  const renderStep6 = () => (
    <div>
      <p>Please input your email</p>
      <TextInput
        name="email"
        placeholder={"Input email"}
        value={email}
        onChange={(event) => handleChange("email", event.target.value)}
        error={errors.email}
        id="email"
      />
      {renderButtons("Register", 3, "Continue", "Back")}
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
      case 6:
        return renderStep6();
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