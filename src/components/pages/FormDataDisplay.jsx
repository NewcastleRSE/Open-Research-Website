import { useEffect } from "react";
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
      case "Article":
        return <DisplayArticleInfo articleData={sectionData} field={field} />;
      case "Monograph":
        return (
          <DisplayMonographInfo monographData={sectionData} field={field} />
        );
      case "Dataset":
        return <DisplayDatasetInfo datasetData={sectionData} field={field} />;
      case "Code":
        return <DisplayCodeInfo codeData={sectionData} field={field} />;
      case "Research Material":
        return <DisplayMaterialInfo materialData={sectionData} field={field} />;
      case "Digital Scholarship":
        return (
          <DisplayDigitalScholarshipInfo
            digitalScholarshipData={sectionData}
            field={field}
          />
        );
      case "Pre-print":
        return <DisplayPreprintInfo preprintData={sectionData} field={field} />;
      case "Peer Review":
        return <DisplayPeerRevInfo peerRevData={sectionData} field={field} />;
      case "Pre-Reg Analysis":
        return (
          <DisplayPreRegAnalysisInfo
            preRegAnalysisData={sectionData}
            field={field}
          />
        );
      case "Registered Report":
        return (
          <DisplayRegReportInfo regReportData={sectionData} field={field} />
        );
      case "Thesis":
        return <DisplayThesisInfo thesisData={sectionData} field={field} />;
    }
  };

  {
    //* For each section of the form. It automatically formats them into column sizes based on the number of items in the section. *//}
    const section = (sectionName, sectionData) => {
      return (
        sectionData[0] && (
          <div className="Results__SubContainer">
            <h1 className="Results__Title">{sectionName} Details</h1>
            <div
              className={
                sectionData.length % 2 === 0 || sectionData.length === 1
                  ? "two-column-grid"
                  : "three-column-grid"
              }
            >
              {displaySectionInfo(sectionName, sectionData)}
            </div>
          </div>
        )
      );
    };

    return (
      <div className="Results__Container">
        {/* Researcher Form Display */}
        {formData.Researcher.fullName && (
          <div className="Results__SubContainer">
            <h1 className="Results__Title">Researcher Details</h1>
            <div className="Results__List">
              {field("Name", formData.Researcher.fullName)}
              {field("Faculty", formData.Researcher.faculty)}
              {field("School", formData.Researcher.school)}
              {formData.Researcher.otherSchool &&
                field("School", formData.Researcher.otherSchool)}
              {field("Career Stage", formData.Researcher.careerStage)}
            </div>
          </div>
        )}
        {/** Project Form Display */}
        {formData.Project.projectName && (
          <div className="Results__SubContainer">
            <h1 className="Results__Title">Project Details</h1>
            <div className="Results__List">
              {field("Project Name", formData.Project.projectName)}
              {field("Researcher Area", formData.Project.researchArea)}
              {field("Funder", formData.Project.funder)}
              {formData.Project.otherFunder &&
                field("Other Funder", formData.Project.otherFunder)}
              {field("Length(m)", formData.Project.length)}
            </div>
          </div>
        )}
        {/** Additional Sections Display */}
        {formData.Article[0] && section("Article", formData.Article)}
        {formData.Monograph[0] && section("Monograph", formData.Monograph)}
        {formData.Dataset[0] && section("Dataset", formData.Dataset)}
        {formData.Code[0] && section("Code", formData.Code)}
        {formData.Material[0] && section("Material", formData.Material)}
        {formData.Protocol[0] && section("Protocol", formData.Protocol)}
        {formData.DigitalScholarship[0] &&
          section("Digital Scholarship", formData.DigitalScholarship)}
        {formData.Preprint[0] && section("Pre-print", formData.Preprint)}
        {formData.PeerRev[0] && section("Peer Review", formData.PeerRev)}
        {formData.PreRegAnalysis[0] &&
          section("Pre-Reg Analysis", formData.PreRegAnalysis)}
        {formData.RegReport[0] &&
          section("Registered Report", formData.RegReport)}
        {formData.Thesis[0] && section("Thesis", formData.Thesis)}
      </div>
    );
  }
};

export default FormDataDisplay;
