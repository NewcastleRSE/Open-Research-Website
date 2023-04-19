import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import FormData from "form-data";
import fetchResearcherProjects from "../util/fetchResearcherProjects";
import processOrcidData from "../util/processOrcidData";
import { useNavigate } from "react-router-dom";
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
import validateBuilder from "../validationRules/BuilderVR";
import SuccessModal from "./SuccessModal";
import FormDataDisplay from "./pages/FormDataDisplay";

function Form() {
  const [page, setPage] = useState(0);
  const [display, setDisplay] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [errors, setErrors] = useState({});
  const [orcidData, setOrcidData] = useState({});
  const [selectedProjectIndex, setSelectedProjectIndex] = useState();
  const [loaded, setLoaded] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [saved, setSaved] = useState(false);
  const navigate = useNavigate();
  const [researcherInfo, setResearcherInfo] = useState({
    fullName: "",
    faculty: "",
    school: "",
    otherSchool: "",
    careerStage: "",
    orcidID: localStorage.getItem("orcidID"),
    orcidLinked: localStorage.getItem("orcidLinked"),
  });

  const [formData, setFormData] = useState({
    uuid: "",

    Researcher: {
      fullName: "",
      faculty: "",
      school: "",
      otherSchool: "",
      careerStage: "",
      orcidID: "",
    },

    Project: {
      projectName: "",
      researchArea: "",
      funder: "",
      otherFunder: "",
      length: "",
    },

    Projects: [
      {
        projectName: "test",
        researchArea: "test",
        funder: "UKRI",
        otherFunder: "",
        length: 2,
      },
      {
        projectName: "test2",
        researchArea: "test2",
        funder: "UKRI",
        otherFunder: "",
        length: 3,
      },
    ],

    orcidProjects: [],

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
      form.push(
        <Articles
          formData={formData}
          setFormData={setFormData}
          display={display}
          setDisplay={setDisplay}
        />
      );
      leftStack.push(
        <LeftContent
          heading="Articles"
          img="https://localhost:5173/Team_Presentation_Monochromatic.svg"
          subtext="A research article is a journal article in which the authors report on the research they did. Research articles are always primary sources. Whether or not a research article is peer reviewed depends on the journal that publishes it."
        />
      );
    }

    if (formBuilder.monograph) {
      form.push(
        <Monographs
          formData={formData}
          setFormData={setFormData}
          display={display}
          setDisplay={setDisplay}
        />
      );
      leftStack.push(
        <LeftContent
          heading="Monographs"
          subtext="A monograph is a special type of book written on a single specialized topic, devoted mainly for research works; could pose some unsolved problems and may provide detailed explanation of some research papers."
        />
      );
    }

    if (formBuilder.dataset) {
      form.push(
        <Datasets
          formData={formData}
          setFormData={setFormData}
          display={display}
          setDisplay={setDisplay}
        />
      );
      leftStack.push(
        <LeftContent
          heading="Data"
          subtext="A dataset is any logically meaningful collection or grouping of similar or related data you have used in your research, as a matter of record or directly related to your research"
        />
      );
    }

    if (formBuilder.code) {
      form.push(
        <Codes
          formData={formData}
          setFormData={setFormData}
          display={display}
          setDisplay={setDisplay}
        />
      );
      leftStack.push(
        <LeftContent
          heading="Code"
          subtext="Code is any qualitative data analysis strategy you have used in which some aspect of the data is assigned a descriptive label that allows the researcher to identify related content across the data."
        />
      );
    }

    if (formBuilder.researchMaterial) {
      form.push(
        <Materials
          formData={formData}
          setFormData={setFormData}
          display={display}
          setDisplay={setDisplay}
        />
      );
      leftStack.push(
        <LeftContent
          heading="Research Material"
          subtext="Research materials are any documents, records, software, information, data and other materials or work product in any tangible form created or developed during the course of, or in association with, your research activity."
        />
      );
    }

    if (formBuilder.protocol) {
      form.push(
        <Protocols
          formData={formData}
          setFormData={setFormData}
          display={display}
          setDisplay={setDisplay}
        />
      );
      leftStack.push(
        <LeftContent
          heading="Protocols"
          subtext="A research protocol is a document that describes the background, rationale, objectives, design, methodology, statistical considerations, and organization of a clinical research project."
        />
      );
    }

    if (formBuilder.digitalScholarship) {
      form.push(
        <DigitalScholarships
          formData={formData}
          setFormData={setFormData}
          display={display}
          setDisplay={setDisplay}
        />
      );
      leftStack.push(
        <LeftContent
          heading="Digital Scholarships"
          subtext="Digital scholarship can encompass both scholarly communication using digital media and research on digital media. An important aspect of digital scholarship is the effort to establish digital media and social media as credible, professional and legitimate means of research and communication."
        />
      );
    }

    if (formBuilder.preprints) {
      form.push(
        <Preprints
          formData={formData}
          setFormData={setFormData}
          display={display}
          setDisplay={setDisplay}
        />
      );
      leftStack.push(
        <LeftContent
          heading="Preprints"
          subtext="Preprints are preliminary versions of scientific manuscripts that researchers share by posting to online platforms known as preprint servers before peer-review and publication in an academic journal."
        />
      );
    }

    if (formBuilder.openPeerReview) {
      form.push(
        <PeerReviews
          formData={formData}
          setFormData={setFormData}
          display={display}
          setDisplay={setDisplay}
        />
      );
      leftStack.push(
        <LeftContent
          heading="Open Peer Reviews"
          subtext="Any scholarly review mechanism providing disclosure of author and referee identities to one another at any point during the peer review or publication process."
        />
      );
    }

    if (formBuilder.analysisPlan) {
      form.push(
        <PreRegs
          formData={formData}
          setFormData={setFormData}
          display={display}
          setDisplay={setDisplay}
        />
      );
      leftStack.push(
        <LeftContent
          heading="Pre-registration Analysis Plans"
          subtext="Preregistration refers to the specification of a study's hypotheses, methodology, and statistical analyses before inspecting the research data. Preregistration takes typically the form of a document that is made publicly available on a timestamped repository or website."
        />
      );
    }

    if (formBuilder.registeredReport) {
      form.push(
        <RegReports
          formData={formData}
          setFormData={setFormData}
          display={display}
          setDisplay={setDisplay}
        />
      );
      leftStack.push(
        <LeftContent
          heading="Registered Report"
          subtext="Registered Reports are a format of empirical article where a study proposal is reviewed before the research is undertaken. Pre-registered proposals that meet high scientific standards are then provisionally accepted before the outcomes are known, independently of the results."
        />
      );
    }

    if (formBuilder.dissertation) {
      form.push(
        <Theses
          formData={formData}
          setFormData={setFormData}
          display={display}
          setDisplay={setDisplay}
        />
      );
      leftStack.push(
        <LeftContent
          heading="Theses and Dissertation"
          subtext="A thesis is a compilation of research that proves you are knowledgeable about the information learn throughout your graduate program. A dissertation is your opportunity during a doctorate program to contribute new knowledge, theories or practices to your field."
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
      return <Summary formData={formData} />;
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
              orcidData={orcidData}
              setOrcidData={setOrcidData}
            />
          </div>
        );
      }
      case 1: {
        return (
          <div>
            <Projects
              formData={formData}
              setFormData={setFormData}
              display={display}
              setDisplay={setDisplay}
              selectedProject={selectedProject}
              setSelectedProject={setSelectedProject}
              selectedProjectIndex={selectedProjectIndex}
              setSelectedProjectIndex={setSelectedProjectIndex}
              loaded={loaded}
              setLoaded={setLoaded}
            />
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
        return <Summary formData={formData} />;
      default:
        return <div>Default Case</div>;
    }
  };

  const LeftDisplay = () => {
    if (page == 0) {
      return (
        <div>
          <LeftContent
            heading="Open Research Tool"
            img="https://localhost:5173/img/info_graphic_1.svg"
            subtext="Using this tool you can learn how to increase the openess of your research. As you fill out the forms on the right, our system will take all of your input and provide advise on how best you can increase it's openess. Please be honest and include as much information as possible so that we can provide you with an accurate assessment."
          />
        </div>
      );
    } else {
      return (
        // need to keep the key to force re-renders when the formData changes
        <FormDataDisplay key={JSON.stringify(formData)} formData={formData} />
      );
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
        if (selectedProject) {
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
    setSubmitted(true);
    setPage(15);
  };

  const handleSave = async (e) => {
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

  // fetches the orcid data for an orcid id and puts into formData in the following format { projectName, projectID }. Need the projectID to get further information after the user has authenticated.
  const fetchOrcidData = async () => {
    try {
      const data = await fetchResearcherProjects(researcherInfo.orcidID);
      const processedData = processOrcidData(data);
      setOrcidData(processedData);
      const updatedFormData = {
        ...formData,
        orcidProjects: processedData,
      };
      setFormData(updatedFormData);
      setLoaded(true);
    } catch (error) {
      console.error("Error fetching researcher works:", error);
    }
  };

  useEffect(() => {
    if (researcherInfo.orcidID) {
      fetchOrcidData();
    }
  }, [researcherInfo.orcidID, localStorage.getItem("orcidLinked")]);

  return (
    <div>
      <div className="container-fluid full-height">
        <div className="row row-height">
          <div className="col-lg-6 content-left">
            <div className="content-left-wrapper">
              <a href="/" id="logo">
                <img
                  src="https://localhost:5173/img/ncl_logo.png"
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
                  {/*<!-- This button is just for the development stage-->*/}
                  <button
                    type="button"
                    name="skip"
                    className={`skip backward
                      ${display && "background"}`}
                    disabled={(page === form.length + 2) | submitted}
                    onClick={() => {
                      setPage((currentPage) => currentPage + 1);
                    }}
                  >
                    Skip
                  </button>
                  <button
                    type="button"
                    name="backward"
                    className={`backward ${display && "background"}`}
                    disabled={page === 0 || submitted}
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
                    disabled={page === form.length + 2 || submitted}
                    onClick={(e) => handleNext(e)}
                  >
                    Next
                  </button>
                  <button
                    type="submit"
                    name="process"
                    className={`backward ${display && "background"}`}
                    disabled={!(page === form.length + 2) || submitted}
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
