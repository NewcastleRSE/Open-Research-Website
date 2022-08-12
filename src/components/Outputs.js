import React, { useState, useEffect } from "react";
import axios from "axios";
import FormData from "form-data";
import { useParams } from "react-router-dom";

import ResearcherInfo from "./pages/ResearcherInfo";
import Projects from "./pages/Projects";
import FormBuilder from "./pages/FormBuilder";
import StepCounter from "./StepCounter";
import LeftContent from "./pages/LeftContent";
import Summary from "./pages/Summary";

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
import SuccessModal from "./SuccessModal";
import helptext from "../helptext.json";

function Outputs() {
  let { id } = useParams();

  const [page, setPage] = useState(2);

  const [errors] = useState({});

  const [researcherInfo, setResearcherInfo] = useState({
    fullName: "",
    faculty: "",
    school: "",
    otherSchool: "",
    careerStage: "",
  });

  const [formData, setFormData] = useState({
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

  useEffect(() => {
    // Load data from strapi

    fetchData();
  });

  const fetchData = () => {
    axios
      .get(
        "http://localhost:1337/api/submissions/?populate=*&filters[uuid][$eq]=" +
          id
      )
      .then((res) => {
        //setFormData
        let data = res.data.data["0"].attributes;

        let researcherData = data.researcher.data.attributes;

        setResearcherInfo({
          fullName: researcherData.fullName,
          faculty: researcherData.faculty,
          school: researcherData.school,
          otherSchool: "",
          careerStage: researcherData.careerStage,
        });

        formData.Researcher = researcherInfo;

        // orcid or normal project
        formData.Project = data.project.data.attributes;

        let builder = {
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
        };

        // Article
        if (data.articles.data.length > 0) {
          data.articles.data.map((article) => {
            return formData.Article.push(article.attributes);
          });
          builder.article = true;
        }

        // Mono
        if (data.monographs.data.length > 0) {
          data.monographs.data.map((monograph) =>
            formData.Monograph.push(monograph.attributes)
          );
          builder.monograph = true;
        }

        // Data
        if (data.datasets.data.length > 0) {
          data.datasets.data.map((dataset) =>
            formData.Dataset.push(dataset.attributes)
          );
          builder.dataset = true;
        }

        // Code
        if (data.codes.data.length > 0) {
          data.codes.data.map((code) => formData.Code.push(code.attributes));
          builder.code = true;
        }

        // Material
        if (data.materials.data.length > 0) {
          data.materials.data.map((material) =>
            formData.Material.push(material.attributes)
          );
          builder.researchMaterial = true;
        }

        // Protocol
        if (data.protocols.data.length > 0) {
          data.protocols.data.map((protocol) =>
            formData.Protocol.push(protocol.attributes)
          );
          builder.protocol = true;
        }

        // DS
        if (data.digital_scholarships.data.length > 0) {
          data.digital_scholarships.data.map((ds) =>
            formData.DigitalScholarship.push(ds.attributes)
          );
          builder.digitalScholarship = true;
        }

        // Preprint
        if (data.preprints.data.length > 0) {
          data.preprints.data.map((preprint) =>
            formData.Preprint.push(preprint.attributes)
          );
          builder.preprints = true;
        }

        // Open peer rev
        if (data.peer_revs.data.length > 0) {
          data.peer_revs.data.map((pRev) =>
            formData.PeerRev.push(pRev.attributes)
          );
          builder.openPeerReview = true;
        }

        // Pre reg
        if (data.pre_reg_analyses.data.length > 0) {
          data.pre_reg_analyses.data.map((preReg) =>
            formData.PreRegAnalysis.push(preReg.attributes)
          );
          builder.analysisPlan = true;
        }

        // Reg rep
        if (data.reg_reports.data.length > 0) {
          data.reg_reports.data.map((regReport) =>
            formData.RegReport.push(regReport.attributes)
          );
          builder.registeredReport = true;
        }

        // Thesis
        if (data.theses.data.length > 0) {
          data.theses.data.map((thesis) =>
            formData.Thesis.push(thesis.attributes)
          );
          builder.dissertation = true;
        }

        setFormBuilder(builder);
      })
      .catch((err) => console.log(err));
  };

  let leftStack = [];

  const formBuilderFunc = () => {
    const form = [];

    if (formBuilder.article) {
      form.push(<Articles formData={formData} setFormData={setFormData} />);
      leftStack.push(
        <LeftContent heading="Articles" subtext={helptext.Article} />
      );
    }

    if (formBuilder.monograph) {
      form.push(<Monographs formData={formData} setFormData={setFormData} />);
      leftStack.push(
        <LeftContent heading="Monographs" subtext={helptext.Monograph} />
      );
    }

    if (formBuilder.dataset) {
      form.push(<Datasets formData={formData} setFormData={setFormData} />);
      leftStack.push(<LeftContent heading="Data" subtext={helptext.Dataset} />);
    }

    if (formBuilder.code) {
      form.push(<Codes formData={formData} setFormData={setFormData} />);
      leftStack.push(<LeftContent heading="Code" subtext={helptext.Code} />);
    }

    if (formBuilder.researchMaterial) {
      form.push(<Materials formData={formData} setFormData={setFormData} />);
      leftStack.push(
        <LeftContent heading="Research Material" subtext={helptext.Material} />
      );
    }

    if (formBuilder.protocol) {
      form.push(<Protocols formData={formData} setFormData={setFormData} />);
      leftStack.push(
        <LeftContent heading="Protocols" subtext={helptext.Protocol} />
      );
    }

    if (formBuilder.digitalScholarship) {
      form.push(
        <DigitalScholarships formData={formData} setFormData={setFormData} />
      );
      leftStack.push(
        <LeftContent
          heading="Digital Scholarships"
          subtext={helptext.DigitalScholarship}
        />
      );
    }

    if (formBuilder.preprints) {
      form.push(<Preprints formData={formData} setFormData={setFormData} />);
      leftStack.push(
        <LeftContent heading="Preprints" subtext={helptext.Preprint} />
      );
    }

    if (formBuilder.openPeerReview) {
      form.push(<PeerReviews formData={formData} setFormData={setFormData} />);
      leftStack.push(
        <LeftContent heading="Open Peer Reviews" subtext={helptext.PeerRev} />
      );
    }

    if (formBuilder.analysisPlan) {
      form.push(<PreRegs formData={formData} setFormData={setFormData} />);
      leftStack.push(
        <LeftContent
          heading="Pre-registration Analysis Plans"
          subtext={helptext.PreRegAnalysis}
        />
      );
    }

    if (formBuilder.registeredReport) {
      form.push(<RegReports formData={formData} setFormData={setFormData} />);
      leftStack.push(
        <LeftContent heading="Registered Report" subtext={helptext.RegReport} />
      );
    }

    if (formBuilder.dissertation) {
      form.push(<Theses formData={formData} setFormData={setFormData} />);
      leftStack.push(
        <LeftContent
          heading="Theses and Dissertation"
          subtext={helptext.Thesis}
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
      default:
        return <div>Default Case</div>;
    }
  };

  const LeftDisplay = () => {
    switch (page) {
      case 2: {
        return (
          <div>
            <LeftContent
              heading="Form Builder"
              img="/img/form_building_Monochromatic.svg"
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
              img="/img/info_graphic_1.svg"
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

    setPage((currentPage) => currentPage + 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let url = "http://localhost:1337/api/submissions/" + id;

      formData.uuid = id;

      let data = new FormData();
      data.append("data", JSON.stringify(formData));

      let config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };

      await axios.put(url, data, config);

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
                <img src="/img/ncl_logo.png" alt="" width="48" height="56" />
              </a>
              {LeftDisplay()}
              <div className="copy">© 2022 Newcastle University</div>
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
              <div id="wrapped">
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
              </div>
            </div>
            {/*<!-- /Wizard container -->*/}
          </div>
          {/*<!-- /content-right-->*/}
        </div>
        {/*<!-- /row-->*/}
      </div>
      <SuccessModal show={displayModal} setDisplay={setDisplayModal} />
    </div>
  );
}

export default Outputs;
