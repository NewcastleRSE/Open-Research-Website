import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import FormData from "form-data";

import ResearcherInfo from "./pages/ResearcherInfo";
import FormBuilder from "./pages/FormBuilder";
import StepCounter from "./StepCounter";
import LeftContent from "./pages/LeftContent";
import Summary from "./pages/Summary";

import Projects from "./pages/Projects";
import Articles from "./pages/Articles";
import Monographs from "./pages/Monographs";
import Datasets from "./pages/Datasets";
import Codes from "./pages/Codes";
import Materials from "./pages/Materials";
import Protocols from "./pages/Protocols";
import DigitalScholarships from "./pages/DigitalScholarships";
import Preprints from "./pages/Preprints";
import PeerReviews from "./pages/PeerReviews";
import PreRegs from "./pages/PreRegs";
import RegReports from "./pages/RegReports";
import Theses from "./pages/Theses";

import validateResearcher from "../validationRules/ResearcherVR";
import validateProject from "../validationRules/ProjectVR";
import validateBuilder from "../validationRules/BuilderVR";
import SuccessModal from "./SuccessModal";

function Form() {
  const [page, setPage] = useState(0);

  const [errors, setErrors] = useState({});

  const [researcherInfo, setResearcherInfo] = useState({
    fullName: "",
    faculty: "",
    school: "",
    otherSchool: "",
    careerStage: "",
  });

  const [formData, setFormData] = useState({
    uuid: "",

    Researcher: {
      fullName: "",
      faculty: "",
      school: "",
      otherSchool: "",
      careerStage: "",
    },

    Project: {
      projectName: "",
      researchArea: "",
      funder: "",
      otherFunder: "",
      length: 0,
    },

    orcidProject: "",

    Article: [],
    Monograph: [],
    Dataset: [],
    Code: [],
    Material: [],
    Protocol: [],
    DigitalScholarship: [],
    Preprint: [],
    PeerRev: [],
    PreRegAnalysis: [],
    RegReport: [],
    Thesis: [],
  });

  const [formBuilder, setFormBuilder] = useState({
    article: false,
    monograph: false,
    dataset: false,
    code: false,
    researchMaterial: false,
    protocol: false,
    digitalScholarship: false,
    preprints: false,
    openPeerReview: false,
    analysisPlan: false,
    registeredReport: false,
    dissertation: false,
  });

  const [displayModal, setDisplayModal] = useState(false);

  let leftStack = [];

  const formBuilderFunc = () => {
    const form = [];

    if (formBuilder.article) {
      form.push(<Articles formData={formData} setFormData={setFormData} />);
      leftStack.push(
        <LeftContent
          heading="Articles"
          img="img/Team_Presentation_Monochromatic.svg"
          subtext="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        />
      );
    }

    if (formBuilder.monograph) {
      form.push(<Monographs formData={formData} setFormData={setFormData} />);
      leftStack.push(
        <LeftContent
          heading="Monographs"
          subtext="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        />
      );
    }

    if (formBuilder.dataset) {
      form.push(<Datasets formData={formData} setFormData={setFormData} />);
      leftStack.push(
        <LeftContent
          heading="Data"
          subtext="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        />
      );
    }

    if (formBuilder.code) {
      form.push(<Codes formData={formData} setFormData={setFormData} />);
      leftStack.push(
        <LeftContent
          heading="Code"
          subtext="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        />
      );
    }

    if (formBuilder.researchMaterial) {
      form.push(<Materials formData={formData} setFormData={setFormData} />);
      leftStack.push(
        <LeftContent
          heading="Research Material"
          subtext="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        />
      );
    }

    if (formBuilder.protocol) {
      form.push(<Protocols formData={formData} setFormData={setFormData} />);
      leftStack.push(
        <LeftContent
          heading="Protocols"
          subtext="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        />
      );
    }

    if (formBuilder.digitalScholarship) {
      form.push(
        <DigitalScholarships formData={formData} setFormData={setFormData} />
      );
      leftStack.push(
        <LeftContent
          heading="Digital Scholarships"
          subtext="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        />
      );
    }

    if (formBuilder.preprints) {
      form.push(<Preprints formData={formData} setFormData={setFormData} />);
      leftStack.push(
        <LeftContent
          heading="Preprints"
          subtext="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        />
      );
    }

    if (formBuilder.openPeerReview) {
      form.push(<PeerReviews formData={formData} setFormData={setFormData} />);
      leftStack.push(
        <LeftContent
          heading="Open Peer Reviews"
          subtext="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        />
      );
    }

    if (formBuilder.analysisPlan) {
      form.push(<PreRegs formData={formData} setFormData={setFormData} />);
      leftStack.push(
        <LeftContent
          heading="Pre-registration Analysis Plans"
          subtext="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        />
      );
    }

    if (formBuilder.registeredReport) {
      form.push(<RegReports formData={formData} setFormData={setFormData} />);
      leftStack.push(
        <LeftContent
          heading="Registered Report"
          subtext="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        />
      );
    }

    if (formBuilder.dissertation) {
      form.push(<Theses formData={formData} setFormData={setFormData} />);
      leftStack.push(
        <LeftContent
          heading="Theses and Dissertation"
          subtext="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        />
      );
    }

    return form;
  };

  let form = formBuilderFunc();

  const displayPage = (currPage) => {
    if (form.length > currPage) {
      return (
        <div>
          <StepCounter page={page - 3} form={form} />
          {form[currPage]}
        </div>
      );
    } else {
      return <Summary />;
    }
  };

  const PageDisplay = () => {
    switch (page) {
      case 0: {
        return (
          <div>
            <ResearcherInfo
              formData={researcherInfo}
              setFormData={setResearcherInfo}
              errors={errors}
            />
          </div>
        );
      }
      case 1: {
        return (
          <div>
            <Projects formData={formData} setFormData={setFormData} />
          </div>
        );
      }
      case 2: {
        return (
          <div>
            <FormBuilder
              formBuilder={formBuilder}
              setFormBuilder={setFormBuilder}
              formData={formData}
              error={errors}
            />
          </div>
        );
      }
      case 3:
        return displayPage(0);
      case 4:
        return displayPage(1);
      case 5:
        return displayPage(2);
      case 6:
        return displayPage(3);
      case 7:
        return displayPage(4);
      case 8:
        return displayPage(5);
      case 9:
        return displayPage(6);
      case 10:
        return displayPage(7);
      case 11:
        return displayPage(8);
      case 12:
        return displayPage(9);
      case 13:
        return displayPage(10);
      case 14:
        return displayPage(11);
      case 15:
        return <Summary />;
      default:
        return <div>Default Case</div>;
    }
  };

  const LeftDisplay = () => {
    switch (page) {
      case 0: {
        return (
          <div>
            <LeftContent
              heading="Open Research Tool"
              img="img/info_graphic_1.svg"
              subtext="Tation argumentum et usu, dicit viderer evertitur te has. Eu dictas
              concludaturque usu, facete detracto patrioque an per, lucilius
              pertinacia eu vel. Adhuc invidunt duo ex. Eu tantas dolorum ullamcorper
              qui."
            />
          </div>
        );
      }
      case 1: {
        return (
          <div>
            <LeftContent
              heading="Open Research Tool"
              img="img/info_graphic_1.svg"
              subtext="Tation argumentum et usu, dicit viderer evertitur te has. Eu dictas
              concludaturque usu, facete detracto patrioque an per, lucilius
              pertinacia eu vel. Adhuc invidunt duo ex. Eu tantas dolorum ullamcorper
              qui."
            />
          </div>
        );
      }
      case 2: {
        return (
          <div>
            <LeftContent
              heading="Form Builder"
              img="img/form_building_Monochromatic.svg"
              subtext="This page is used to build the remainder of the form."
            />
          </div>
        );
      }
      case 3: {
        return <div>{leftStack[0]}</div>;
      }
      case 4: {
        return <div>{leftStack[1]}</div>;
      }
      case 5: {
        return <div>{leftStack[2]}</div>;
      }
      case 6: {
        return <div>{leftStack[3]}</div>;
      }
      case 7: {
        return <div>{leftStack[4]}</div>;
      }
      case 8: {
        return <div>{leftStack[5]}</div>;
      }
      case 9: {
        return <div>{leftStack[6]}</div>;
      }
      case 10: {
        return <div>{leftStack[7]}</div>;
      }
      case 11: {
        return <div>{leftStack[8]}</div>;
      }
      case 12: {
        return <div>{leftStack[9]}</div>;
      }
      case 13: {
        return <div>{leftStack[10]}</div>;
      }
      case 14: {
        return <div>{leftStack[11]}</div>;
      }
      default: {
        return (
          <div>
            <LeftContent
              heading="Open Research Tool"
              img="img/info_graphic_1.svg"
              subtext="Tation argumentum et usu, dicit viderer evertitur te has. Eu dictas
          concludaturque usu, facete detracto patrioque an per, lucilius
          pertinacia eu vel. Adhuc invidunt duo ex. Eu tantas dolorum ullamcorper
          qui."
            />
          </div>
        );
      }
    }
  };

  const handleNext = (e) => {
    e.preventDefault();

    switch (page) {
      case 0: {
        let newErrors = validateResearcher(researcherInfo);
        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
          formData.Researcher = researcherInfo;

          setErrors({});
          setPage((currentPage) => currentPage + 1);
        }
        break;
      }
      case 1: {
        // validate project
        if (formData.Project.projectName || formData.orcidProject) {
          setPage((currentPage) => currentPage + 1);
        } else {
          alert("Must choose a project or enter a new one.");
          break;
        }

        break;
      }
      case 2: {
        let newErrors = validateBuilder(formBuilder);
        setErrors(newErrors);

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
    try {
      formData.uuid = uuidv4();

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

      await axios.post("http://localhost:1337/api/submissions", data, config);

      setDisplayModal(!displayModal);
    } catch (err) {
      alert("error");
      console.log(err);
    }
  };

  return (
    <div>
      <div className="container-fluid full-height">
        <div className="row row-height">
          <div className="col-lg-6 content-left">
            <div className="content-left-wrapper">
              <a href="/" id="logo">
                <img src="img/ncl_logo.png" alt="" width="48" height="56" />
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
                    className="backward"
                    disabled={page === 0}
                    onClick={() => {
                      setPage((currentPage) => currentPage - 1);
                    }}
                  >
                    Prev
                  </button>
                  <button
                    type="button"
                    name="forward"
                    className="forward"
                    disabled={page === form.length + 3}
                    onClick={(e) => handleNext(e)}
                  >
                    Next
                  </button>
                  <button
                    type="submit"
                    name="process"
                    className="submit"
                    disabled={!(page === form.length + 3)}
                    onClick={(e) => handleSubmit(e)}
                  >
                    Submit
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
