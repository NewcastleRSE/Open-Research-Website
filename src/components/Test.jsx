import DisplayArticleInfo from "./dataDisplay/DisplayArticleInfo";
import DisplayDatasetInfo from "./dataDisplay/DisplayDatasetInfo";

import { useEffect, useState, useRef } from "react";
const Test = () => {
  const [expandedSections, setExpandedSections] = useState(["Researcher"]);
  const sectionRefs = useRef({});
  const articleInfo = [
    {
      articleTitle:
        "An Analysis of the Pricing of Traits in the U.S. Corn Seed Market.",
      articleURL: "https://onlinelibrary.wiley.com/doi/abs/10.1093/ajae/aaq063",
      articleDOI: "http://dx.doi.org/10.1093/ajae/aaq063",
      articleEmbargo: "True",
      articleLicense: "Creative Commons license",
    },
    {
      articleTitle:
        "An Analysis of the Pricing of Traits in the U.S. Corn Seed Market.",
      articleURL: "https://onlinelibrary.wiley.com/doi/abs/10.1093/ajae/aaq063",
      articleDOI: "http://dx.doi.org/10.1093/ajae/aaq063",
      articleEmbargo: "True",
      articleLicense: "Creative Commons license",
    },
    {
      articleTitle:
        "An Analysis of the Pricing of Traits in the U.S. Corn Seed Market.",
      articleURL: "https://onlinelibrary.wiley.com/doi/abs/10.1093/ajae/aaq063",
      articleDOI: "http://dx.doi.org/10.1093/ajae/aaq063",
      articleEmbargo: "True",
      articleLicense: "Creative Commons license",
    },
    {
      articleTitle:
        "An Analysis of the Pricing of Traits in the U.S. Corn Seed Market.",
      articleURL: "https://onlinelibrary.wiley.com/doi/abs/10.1093/ajae/aaq063",
      articleDOI: "http://dx.doi.org/10.1093/ajae/aaq063",
      articleEmbargo: "True",
      articleLicense: "Creative Commons license",
    },
    {
      articleTitle:
        "An Analysis of the Pricing of Traits in the U.S. Corn Seed Market.",
      articleURL: "https://onlinelibrary.wiley.com/doi/abs/10.1093/ajae/aaq063",
      articleDOI: "http://dx.doi.org/10.1093/ajae/aaq063",
      articleEmbargo: "True",
      articleLicense: "Creative Commons license",
    },
  ];
  const dataSetInfo = [
    {
      dataTitle: "Global Temperature Anomalies",
      dataURL: "https://example.com/global-temp-anomalies",
      dataDOI: "10.1234/5678.9012",
      format: "CSV",
      dataLicense: "Creative Commons Attribution 4.0 International (CC BY 4.0)",
    },
    {
      dataTitle: "Urban Population Growth",
      dataURL: "https://example.com/urban-population-growth",
      dataDOI: "10.2345/6789.0123",
      format: "JSON",
      dataLicense: "Open Data Commons Open Database License (ODbL)",
    },
    {
      dataTitle: "Worldwide Internet Usage Statistics",
      dataURL: "https://example.com/internet-usage-stats",
      dataDOI: "10.3456/7890.1234",
      format: "CSV",
      dataLicense:
        "Creative Commons Attribution-ShareAlike 4.0 International (CC BY-SA 4.0)",
    },
    {
      dataTitle: "Global Biodiversity Indicators",
      dataURL: "https://example.com/global-biodiversity-indicators",
      dataDOI: "10.4567/8901.2345",
      format: "GeoJSON",
      dataLicense:
        "Creative Commons Attribution-NonCommercial 4.0 International (CC BY-NC 4.0)",
    },
    {
      dataTitle: "Renewable Energy Generation by Country",
      dataURL: "https://example.com/renewable-energy-generation",
      dataDOI: "10.5678/9012.3456",
      format: "CSV",
      dataLicense:
        "Open Data Commons Public Domain Dedication and License (PDDL)",
    },
  ];

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
              <h1 className="Results__Title">{sectionName} Details</h1>
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
      {section("Researcher", [
        {
          Name: "Reece Walsh",
          Faculty: "SAgE",
          School: "School of Computing",
          Stage: "Early Career",
          OrcidID: "0009-0005-8496-9488",
        },
      ])}
      {section("Project", [
        {
          Title:
            "Investigating the Effects of Artificial Intelligence on Human Behavior",
          Area: "Cognitive Science",
          Funder: "National Science Foundation",
          Length: "24",
        },
      ])}
      {section("Article", articleInfo)}
      {section("Dataset", dataSetInfo)}
    </div>
  );
};

export default Test;
