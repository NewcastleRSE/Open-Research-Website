import { useEffect, useState, useRef } from "react";
import DisplayArticleInfo from "../dataDisplay/DisplayArticleInfo";
import DisplayCodeInfo from "../dataDisplay/DisplayCodeInfo";
import DisplayDatasetInfo from "../dataDisplay/DisplayDatasetInfo";
import DisplayDigitalScholarshipInfo from "../dataDisplay/DisplayDigitalScholarship";
import DisplayMaterialInfo from "../dataDisplay/DisplayMaterialInfo";
import DisplayMonographInfo from "../dataDisplay/DisplayMonographInfo";
import DisplayPeerRevInfo from "../dataDisplay/DisplayPeerRevInfo";
import DisplayPreRegAnalysisInfo from "../dataDisplay/DisplayPreRegAnalysisInfo";
import DisplayPreprintInfo from "../dataDisplay/DisplayPreprintInfo";
import DisplayRegReportInfo from "../dataDisplay/DisplayRegReportInfo";
import DisplayThesisInfo from "../dataDisplay/DisplayThesisInfo";

const FormDataDisplay = ({ formData }) => {
  const [expandedSections, setExpandedSections] = useState([
    "Researcher",
    "Project",
    "Articles",
    "Codes",
    "Datasets",
    "Digital Scholarships",
    "Materials",
    "Protocols",
    "Pre-prints",
    "Peer Reviews",
    "Pre-Reg Analyses",
    "Registered Reports",
    "Theses",
  ]);
  const sectionRefs = useRef({});
  useEffect(() => {}), [formData];
  const field = (label, value) => {
    return (
      <div className="Results__Item">
        <div className="Results__Label">{label}:</div>
        <div className="Results__Value">{value}</div>
      </div>
    );
  };

  {
    /* Takes a section name and section data. It uses the section name to decide upon which component to render and then sends sectionData to the component. It also needs to send the field function to correctly format the data.*/
  }
  const displaySectionInfo = (sectionName, sectionData) => {
    switch (sectionName) {
      case "Researcher":
      case "Project":
        return (
          <div className="Results__List">
            {Object.entries(sectionData[0]).map(([key, value]) =>
              field(key, value)
            )}
          </div>
        );
      case "Articles":
        return <DisplayArticleInfo articleData={sectionData} field={field} />;
      case "Monographs":
        return (
          <DisplayMonographInfo monographData={sectionData} field={field} />
        );
      case "Datasets":
        return <DisplayDatasetInfo datasetData={sectionData} field={field} />;
      case "Codes":
        return <DisplayCodeInfo codeData={sectionData} field={field} />;
      case "Research Materials":
        return <DisplayMaterialInfo materialData={sectionData} field={field} />;
      case "Digital Scholarships":
        return (
          <DisplayDigitalScholarshipInfo
            digitalScholarshipData={sectionData}
            field={field}
          />
        );
      case "Pre-prints":
        return <DisplayPreprintInfo preprintData={sectionData} field={field} />;
      case "Peer Reviews":
        return <DisplayPeerRevInfo peerRevData={sectionData} field={field} />;
      case "Pre-Reg Analyses":
        return (
          <DisplayPreRegAnalysisInfo
            preRegAnalysisData={sectionData}
            field={field}
          />
        );
      case "Registered Reports":
        return (
          <DisplayRegReportInfo regReportData={sectionData} field={field} />
        );
      case "Theses":
        return <DisplayThesisInfo thesisData={sectionData} field={field} />;
    }
  };

  const section = (sectionName, sectionData) => {
    const isExpanded = expandedSections.includes(sectionName);

    const handleClick = (sectionName) => {
      if (expandedSections.includes(sectionName)) {
        setExpandedSections(
          expandedSections.filter((section) => section !== sectionName)
        );
      } else {
        setExpandedSections([...expandedSections, sectionName]);
      }
    };

    return (
      sectionData[0] && (
        <div
          className="Results__SubContainer"
          ref={(el) => (sectionRefs.current[sectionName] = el)}
        >
          <button
            className="Results__Dropdown"
            onClick={() => handleClick(sectionName)}
          >
            <div className="Results__ButtonContent">
              <h1 className="Results__Title">{sectionName}</h1>
              <div className="arrow-container">
                <span
                  className={`accordion-arrow ${isExpanded ? "expanded" : ""}`}
                >
                  &#x25BC;
                </span>
              </div>
            </div>
          </button>

          {isExpanded && (
            <div>{displaySectionInfo(sectionName, sectionData)}</div>
          )}
        </div>
      )
    );
  };

  return (
    <div className="Results__Container">
      {/* Researcher Form Display */}
      {formData.Researcher.fullName &&
        section("Researcher", [
          {
            Name: formData.Researcher.fullName,
            Faculty: formData.Researcher.faculty,
            School: formData.Researcher.school,
            Stage: formData.Researcher.careerStage,
            OrcidID: formData.Researcher.orcidID,
          },
        ])}
      {/** Project Form Display */}
      {formData.Project.projectName &&
        section("Project", [
          {
            Title: formData.Project.projectName,
            Area: formData.Project.researchArea,
            Funder: formData.Project.funder,
            Length: formData.Project.length,
          },
        ])}
      {/** Additional Sections Display */}
      {formData.Article[0] && section("Articles", formData.Article)}
      {formData.Monograph[0] && section("Monographs", formData.Monograph)}
      {formData.Dataset[0] && section("Datasets", formData.Dataset)}
      {formData.Code[0] && section("Codes", formData.Code)}
      {formData.Material[0] && section("Materials", formData.Material)}
      {formData.Protocol[0] && section("Protocols", formData.Protocol)}
      {formData.DigitalScholarship[0] &&
        section("Digital Scholarships", formData.DigitalScholarship)}
      {formData.Preprint[0] && section("Pre-prints", formData.Preprint)}
      {formData.PeerRev[0] && section("Peer Reviews", formData.PeerRev)}
      {formData.PreRegAnalysis[0] &&
        section("Pre-Reg Analyses", formData.PreRegAnalysis)}
      {formData.RegReport[0] &&
        section("Registered Reports", formData.RegReport)}
      {formData.Thesis[0] && section("Theses", formData.Thesis)}
    </div>
  );
};

export default FormDataDisplay;
