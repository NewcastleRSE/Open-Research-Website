import { useEffect, useState, useRef } from "react";
import React from "react";

import {
  DisplayArticleInfo,
  DisplayCodeInfo,
  DisplayDatasetInfo,
  DisplayDigitalScholarshipInfo,
  DisplayMaterialInfo,
  DisplayMonographInfo,
  DisplayPeerRevInfo,
  DisplayPreRegAnalysisInfo,
  DisplayPreprintInfo,
  DisplayRegReportInfo,
  DisplayThesisInfo,
  DisplayProtocolInfo,
} from "../dataDisplay/DisplayData";

const FormDataDisplay = ({ formData }) => {
  const [expandedSections, setExpandedSections] = useState([
    "Researcher",
    "Project",
    "Articles",
    "Codes",
    "Datasets",
    "Digital Scholarships",
    "Monographs",
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
        <div className={`Results__Label ${!value && "red-text"}`}>{label}:</div>
        <div className="Results__Value">{value}</div>
      </div>
    );
  };

  {
    /* Takes a section name and section data. It uses the section name to decide upon which component to render and then sends sectionData to the component. It also needs to send the field function to correctly format the data.*/
  }
  const displaySectionInfo = (sectionName, sectionData) => {
    const selectedSections = sectionData
      .filter((x) => x.selected === true)
      .sort((a, b) => a.title.localeCompare(b.title));
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
        return <DisplayArticleInfo data={selectedSections} field={field} />;
      case "Codes":
        return <DisplayCodeInfo data={selectedSections} field={field} />;
      case "Datasets":
        return <DisplayDatasetInfo data={selectedSections} field={field} />;
      case "Digital Scholarships":
        return (
          <DisplayDigitalScholarshipInfo
            data={selectedSections}
            field={field}
          />
        );
      case "Peer Reviews":
        return <DisplayPeerRevInfo data={selectedSections} field={field} />;
      case "Pre-prints":
        return <DisplayPreprintInfo data={selectedSections} field={field} />;
      case "Pre-Reg Analyses":
        return (
          <DisplayPreRegAnalysisInfo data={selectedSections} field={field} />
        );
      case "Protocols":
        return <DisplayProtocolInfo data={selectedSections} field={field} />;
      case "Materials":
        return <DisplayMaterialInfo data={selectedSections} field={field} />;
      case "Monographs":
        return <DisplayMonographInfo data={selectedSections} field={field} />;
      case "Registered Reports":
        return <DisplayRegReportInfo data={selectedSections} field={field} />;
      case "Theses":
        return <DisplayThesisInfo data={selectedSections} field={field} />;
    }
  };

  const section = (sectionName, sectionData) => {
    const isExpanded = expandedSections.includes(sectionName);

    // Filter for selected entries in this section
    const selectedEntries = sectionData.filter((x) => x.selected === true);

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
      // Check for sectionData[0] existence and either the existence of selected entries or the section being "Researcher" or "Project". The formData should always display Researcher and Project but the rest can be conditionally rendered.
      sectionData[0] &&
      (selectedEntries.length > 0 ||
        sectionName === "Researcher" ||
        sectionName === "Project") && (
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
          },
        ])}
      {/** Project Form Display */}
      {formData.Project.title &&
        section("Project", [
          {
            Title: formData.Project.title,
            Area: formData.Project.researchArea || "No research area selected.",
            Funder: formData.Project.funder || "No funder selected.",
            Url: formData.Project.url || "No url selected.",
            Type: formData.Project.type || "No type selected.",
            Length: formData.Project.length
              ? `${formData.Project.length} months`
              : "No project length selected.",
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
