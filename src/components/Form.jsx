import { useState, useEffect } from "react";
import React from "react";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import FormData from "form-data";
import { useNavigate } from "react-router-dom";

// Data
import blankFormData from "../util/data/blankFormData";
import blankFormBuilder from "../util/data/blankFormBuilder";
import blankResearchInfo from "../util/data/blankResearchInfo";
import formBuilderComponents from "../util/data/formBuilderComponents";

// Util
import getUserOrcidInfo from "../util/fetchingOrcidData/getUserOrcidInfo";
import sortOrcidData from "../util/fetchingOrcidData/sortOrcidData";
import flattenObject from "../util/helperFunctions/flattenObject";
import fetchResearcherFunding from "../util/fetchingOrcidData/fetchResearcherFunding";

// Components
import Projects from "./pages/Projects";
import SuccessModal from "./SuccessModal";
import FormDataDisplay from "./pages/FormDataDisplay";
import ResearcherInfo from "./pages/ResearcherInfo";
import LeftContent from "./pages/LeftContent";
import Summary from "./pages/Summary";
import FormBuilder from "./pages/FormBuilder";
import LandingPage from "./pages/LandingPage";

// Validation
import validateResearcher from "../validationRules/ResearcherVR";
import validateBuilder from "../validationRules/BuilderVR";

function Form() {
  const pagesBeforeOutput = 4; // Change this if adding or removing a page before the OutputTypes page as it controls the conditional rendering of the buttons.
  const [page, setPage] = useState(0);
  const [display, setDisplay] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [errors, setErrors] = useState({});
  const [selectedProjectIndex, setSelectedProjectIndex] = useState();
  const [submitted, setSubmitted] = useState(false);
  const [displayModal, setDisplayModal] = useState(false);
  const navigate = useNavigate();
  // Form Data
  const [researcherInfo, setResearcherInfo] = useState(blankResearchInfo);
  const [formData, setFormData] = useState(blankFormData);
  const [formBuilder, setFormBuilder] = useState(blankFormBuilder);
  const [orcidID, setOrcidID] = useState(localStorage.getItem("orcidID") || "");
  const [userID, setUserID] = useState(localStorage.getItem("userID") || "");
  // Maps through formBuilderComponents and formBuilder file and displays the correct Component if that components value is true in formBuilder. These values are made true (checked) in the FormBuilder component whenever the output box is clicked on the Output Types page.
  let form = Object.entries(formBuilder)
    .filter(([, value]) => value)
    .map(([key]) => {
      let Component = formBuilderComponents[key];
      return (
        <Component
          formData={formData}
          setFormData={setFormData}
          display={display}
          setDisplay={setDisplay}
        />
      );
    });

  // This is an array of all possible pages.
  const pages = [
    // Page 0
    <LandingPage
      formData={researcherInfo}
      setFormData={setResearcherInfo}
      setPage={setPage}
      errors={errors}
    />,
    // Page 1
    <ResearcherInfo
      formData={researcherInfo}
      setFormData={setResearcherInfo}
      errors={errors}
    />,
    // Page 2
    <Projects
      formData={formData}
      setFormData={setFormData}
      display={display}
      setDisplay={setDisplay}
      selectedProject={selectedProject}
      setSelectedProject={setSelectedProject}
      selectedProjectIndex={selectedProjectIndex}
      setSelectedProjectIndex={setSelectedProjectIndex}
    />,
    // Page 3 (Outputs)
    <FormBuilder
      formBuilder={formBuilder}
      setFormBuilder={setFormBuilder}
      formData={formData}
      error={errors}
    />,
    // Page 4 and above, depending on how many outputs were chosen
    ...form.map((component, _) => component),
    // Page 4 + form.length (how many ouputs)
    <Summary formData={formData} />,
    <div>Default Case</div>,
  ];

  // Will display the page, but if the page is undefined for any reason it will display the page before, to stop it from breaking.
  const PageDisplay = () => pages[page] || pages[pages.length - 1];

  // LeftContent will render until an output has been chosen, at this point the left hand side of the page will render the formData that has been filled out so far.
  const LeftDisplay = () =>
    form.length == 0 ? (
      <LeftContent />
    ) : (
      <FormDataDisplay key={JSON.stringify(formData)} formData={formData} />
    );

  const handleNext = (e) => {
    e.preventDefault();

    switch (page) {
      case 0: {
        // ensure user is valid or new before moving to next page
        // let newErrors = validateUser();
        // setErrors(newErrors)
        // if (Object.keys(newErrors).length === 0) {
        //   formData.Researcher = researcherInfo;

        //   setErrors({});
        // }
        setPage((currentPage) => currentPage + 1);

        break;
      }
      case 1: {
        // validate researcher before moving to next page
        let newErrors = validateResearcher(researcherInfo);
        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
          formData.Researcher = researcherInfo;

          setErrors({});
          setPage((currentPage) => currentPage + 1);
        }
        break;
      }
      case 2: {
        // validate project
        if (selectedProject) {
          setPage((currentPage) => currentPage + 1);
        } else {
          alert("Must choose a project or enter a new one.");
          break;
        }

        break;
      }
      case 3: {
        let newErrors = validateBuilder(formBuilder);
        console.log(formBuilder);
        setErrors(newErrors);
        console.log(errors);
        if (Object.keys(newErrors).length === 0) {
          setErrors({});
          setPage((currentPage) => currentPage + 1);
        }
        break;
      }
      default: {
        setPage((currentPage) => currentPage + 1);
        break;
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);
    setPage(pagesBeforeOutput + form.length);
  };

  const handleSave = async (e) => {
    e.preventDefault();
    try {
      formData.uuid = uuidv4();
      console.log("uuid", formData.uuid);

      if (formData.school === "other" && formData.otherSchool !== "") {
        formData.school = formData.otherSchool;
      }

      if (formData.school !== "other") {
        formData.otherSchool = "";
      }

      if (formData.funder === "other" && formData.otherFunder !== "") {
        formData.funder = formData.otherFunder;
      }

      let data = new FormData();
      data.append("data", JSON.stringify(formData));

      let config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };

      await axios
        .post("http://localhost:1337/api/submissions", data, config)
        .then((res) => {
          console.log(res);
          setSaved(true);
        })
        .catch((err) => {
          console.log(err);
        });

      setDisplayModal(!displayModal);
    } catch (err) {
      alert("error");
      console.log(err);
    }
  };

  const fetchOrcidRecord = async () => {
    try {
      if (researcherInfo.orcidID) {
        // Get the unformatted users data from orcid
        const data = await getUserOrcidInfo(navigate, researcherInfo.orcidID);
        console.log("Users orcid data:", data);
        // Flatten the data (format it)
        const flatData = flattenObject(data);
        console.log("Formatted orcid data:", flatData);
        const funding = await fetchResearcherFunding(
          navigate,
          researcherInfo.orcidID
        );
        formData.orcidProjects = funding;
        const newFormData = await sortOrcidData(
          formData,
          flatData["activities-summary.works.group"]
        );
        setFormData(newFormData);
      }
    } catch (error) {
      console.error("Error fetching user orcid record.");
    }
  };

  useEffect(() => {
    if (researcherInfo.orcidID) {
      fetchOrcidRecord();
    }
  }, [researcherInfo.orcidID]);

  useEffect(() => {
    if (orcidID) {
      setPage(1);
    }
  }, [orcidID]);

  return (
    <div>
      <div className="container-fluid full-height">
        <div className="row row-height">
          <div className="col-lg-6 content-left">
            <div className="content-left-wrapper">
              <a href="/" id="logo">
                <img
                  src={`${import.meta.env.VITE_LOCAL_URL}/img/ncl_logo.png`}
                  alt=""
                  width="48"
                  height="56"
                />
              </a>
              {LeftDisplay()}
              <div className="copy">
                <a href="/https://www.ncl.ac.uk/">
                  © 2023 Newcastle University
                </a>
              </div>
            </div>
            {/*<!-- /content-left-wrapper -->*/}
          </div>
          {/*<!-- /content-left -->*/}

          <div className="col-lg-6 content-right" id="start">
            <div id="wizard_container">
              <div id="top-wizard">
                <div id="progressbar"></div>
              </div>
              {/*<!-- /top-wizard -->*/}
              <form id="wrapped" method="POST">
                <input
                  id="website"
                  name="website"
                  type="text"
                  defaultValue=""
                />
                {/*<!-- Leave for security protection, read docs for details -->*/}
                <div id="middle-wizard">{PageDisplay()}</div>
                {/*<!-- /middle-wizard -->*/}
                <div id="bottom-wizard">
                  <button
                    type="button"
                    name="backward"
                    className={`backward ${display && "background"}`}
                    disabled={page < 1 || submitted}
                    onClick={() => {
                      setPage((currentPage) => currentPage - 1);
                    }}
                  >
                    Prev
                  </button>
                  <button
                    type="button"
                    name="forward"
                    className={`forward ${display && "background"}`}
                    disabled={
                      page === pagesBeforeOutput + form.length || page == 0
                    }
                    onClick={(e) => handleNext(e)}
                  >
                    Next
                  </button>
                  <button
                    type="submit"
                    name="process"
                    className={`backward ${display && "background"}`}
                    disabled={
                      !(page === form.length + pagesBeforeOutput) || submitted
                    }
                    onClick={(e) => handleSubmit(e)}
                  >
                    Submit
                  </button>
                  <button
                    type="submit"
                    name="process"
                    className="submit"
                    disabled={!submitted}
                    onClick={(e) => handleSave(e)}
                  >
                    Save
                  </button>
                </div>
                {/*<!-- /bottom-wizard -->*/}
              </form>
            </div>
            {/*<!-- /Wizard container -->*/}
          </div>
          {/*<!-- /content-right-->*/}
        </div>
        {/*<!-- /row-->*/}
      </div>
      <SuccessModal
        show={displayModal}
        setDisplay={setDisplayModal}
        name={formData.Researcher.fullName}
      />
    </div>
  );
}

export default Form;
