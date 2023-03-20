import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import FormData from "form-data";
import { useNavigate } from "react-router-dom";

import ResearcherInfo from "./pages/ResearcherInfo";
import LeftContent from "./pages/LeftContent";
import Projects from "./pages/Projects";

import validateResearcher from "../validationRules/ResearcherVR";
import SuccessModal from "./SuccessModal";

function User() {
  let navigate = useNavigate();

  const [page, setPage] = useState(0);

  const [errors, setErrors] = useState({});

  const [researcherInfo, setResearcherInfo] = useState({
    fullName: "",
    faculty: "",
    school: "",
    otherSchool: "",
    careerStage: "",
    orcidID: "",
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
      length: 0,
    },

    orcidProject: "",
  });

  const [displayModal, setDisplayModal] = useState(false);

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

      let res = await axios.post(
        "http://localhost:1337/api/submissions",
        data,
        config
      );

      navigate("/outputs/" + res.data.uuid);
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
              <a href="index.html" id="logo">
                <img src="img/ncl_logo.png" alt="" width="48" height="56" />
              </a>
              {LeftDisplay()}
              <div className="copy">© 2023 Newcastle University</div>
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
                    disabled={page === 1}
                    onClick={(e) => handleNext(e)}
                  >
                    Next
                  </button>
                  <button
                    type="submit"
                    name="process"
                    className="submit"
                    disabled={page !== 1}
                    onClick={(e) => handleSubmit(e)}
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

export default User;
