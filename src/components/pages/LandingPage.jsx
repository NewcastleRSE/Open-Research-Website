import React, { useState, useEffect } from "react";
import OrcidLinkButton from "../OrcidLinkButton";
import TextInput from "../formElements/TextInput";
import blankResearchInfo from "../../util/data/blankResearchInfo";
import registerUser from "../../util/userFunctions/registerUser";
import { v4 as uuidv4 } from "uuid";
import loginUser from "../../util/userFunctions/loginUser";
import forgotID from "../../util/userFunctions/forgotID";
import useSetToken from "../../util/userFunctions/useSetToken";
import validateUser from "../../validationRules/UserVR";

const LandingPage = ({ setPage, formData, setFormData, errors, setErrors }) => {
  const [userID, setUserID] = useState(localStorage.getItem("userID") || "");
  const [email, setEmail] = useState(localStorage.getItem("email") || "");
  const [step, setStep] = useState(1);
  const setToken = useSetToken();

  // handles changing formData and also state saved data such as userID and email
  const handleChange = (name, value) => {
    if (name === "userID") {
      setUserID(value);
      localStorage.setItem("userID", value);
    } else if (name === "email") {
      setEmail(value);
      localStorage.setItem("email", value);
    } else {
      // updates formData based on the name (key) and it's value (what was written in the text input)
      const updatedFormData = { ...formData, [name]: value };
      localStorage.setItem("formData", JSON.stringify(updatedFormData));
      setFormData(updatedFormData);
    }
  };

  // checks to see if there is stored formData and then
  useEffect(() => {
    const storedFormData = JSON.parse(localStorage.getItem("formData"));
    if (storedFormData) {
      setFormData(storedFormData);
    }
  }, []);

  // get email sent
  const handleForgotID = (e) => {
    e.preventDefault();
    let newErrors = checkErrors(email);
    console.log(email);
    // if there are no errors...
    if (Object.keys(newErrors).length === 0) {
      forgotID(email);
    } else {
      console.log("errors", newErrors);
      setErrors(newErrors);
    }
  };

  // handles logging in a non orcid user
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const user = await loginUser(userID);
      // update token with new user information
      setToken(user);
      // setting the page to 1 will move the user to the researcher info page
      setPage(1);
    } catch (err) {
      console.error(err);
    }
  };

  // handles registering a non orcid user
  const handleRegister = async (id, orcid) => {
    let newErrors = checkErrors(email);
    // if there are no errors...
    if (Object.keys(newErrors).length === 0) {
      try {
        const user = await registerUser(id, email, orcid);
        // update token with new user information
        if (user) {
          setToken(user);
          // setting the page to 1 will move the user to the researcher info page
          setPage(1);
        } else {
          setErrors({ email: "This email address has been taken." });
        }
      } catch (err) {
        console.error(err);
      }
    } else {
      console.log("errors", newErrors);
      setErrors(newErrors);
    }
  };

  // checks for errors using the validateUser function. Only has to check for presence of email and if the email is in the required format.
  const checkErrors = (data) => {
    let newErrors = validateUser(data);
    setErrors(newErrors);
    return newErrors;
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
      if (!errors) {
        localStorage.setItem("formData", JSON.stringify(temp));
        setPage(1);
      } else {
        setStep(6);
      }
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

  // First "page"
  const renderStep1 = () => (
    <div>
      <p>Have you used this site before?</p>
      {renderButtons(2, 3, "Yes", "No")}
    </div>
  );

  // If the user chose Yes, they have used the site then they can login with their ID or their Orcid account
  const renderStep2 = () => (
    <div>
      <p>
        Would you like to login with ORCID or use your ID from your last
        session?
      </p>
      {renderButtons(4, 1, "ID Login", "Back", "Orcid Login")}
    </div>
  );

  // If they user chose No, they are a new member, we need to give them the option to login with Orcid, or carry on without logging in with Orcid.
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

  // If the user has used the site before and wants to log in with their ID.
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

  // If the user wants to login with their local ID but they forgot their ID number then they can reset it here by entering their email
  const renderStep5 = () => (
    <div>
      <p>Forgotten ID</p>
      <TextInput
        name="email"
        placeholder={"Please input your email"}
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

  // Here the user is a new user, and they don't want to use Orcid, so they need to enter their email address.
  const renderStep6 = () => (
    <div>
      <p>Registration</p>
      <p className="normal">
        Your email is only required for if you forget your identification
        number. No password or further data is required.
      </p>
      <TextInput
        name="email"
        placeholder={"Please input your email"}
        value={email}
        onChange={(event) => handleChange("email", event.target.value)}
        error={errors.email}
        id="email"
      />
      {renderButtons("Register", 3, "Continue", "Back")}
    </div>
  );

  // Controls each step and renders the appropriate "page"
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
