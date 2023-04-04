const FormDataDisplay = ({ formData }) => {
  const field = (label, value) => {
    return (
      <div className="Results__Item">
        <div className="Results__Label">{label}:</div>
        <div className="Results__Value">{value}</div>
      </div>
    );
  };

  const displaySectionInfo = (sectionName, sectionData) => {
    switch (sectionName) {
      case "Article":
        return displayArticleInfo(sectionData);
      case "Monograph":
        return displayMonographInfo(sectionData);
      case "Dataset":
        return displayDatasetInfo(sectionData);
      case "Code":
        return displayCodeInfo(sectionData);
      case "Research Material":
        return displayMaterialInfo(sectionData);
      case "Digital Scholarship":
        return displayDigitalScholarshipInfo(sectionData);
      case "Pre-print":
        return displayPreprintInfo(sectionData);
      case "Peer Review":
        return displayPeerRevInfo(sectionData);
      case "Pre-Reg Analysis":
        return displayPreRegAnalysisInfo(sectionData);
      case "Registered Report":
        return displayRegReportInfo(sectionData);
      case "Thesis":
        return displayThesisInfo(sectionData);
    }
  };

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

  const displayArticleInfo = (articles) => {
    return articles.map((article, index) => {
      return (
        <div key={index} className="Results__List">
          <div className="Results__Item">
            <div>
              <h6>{`Article ${index + 1}`}</h6>
              {field("Title", article.articleTitle)}
              {field("URL", article.articleURL)}
              {field("DOI", article.articleDOI)}
              {field("Embargo", article.articleEmbargo ? "False" : "True")}
              {field("License", article.articleLicense)}
            </div>
          </div>
        </div>
      );
    });
  };

  const displayMonographInfo = (monographs) => {
    return monographs.map((monograph, index) => {
      return (
        <div key={index} className="Results__List">
          <div className="Results__Item">
            <div>
              <h6>{`Monograph ${index + 1}`}</h6>
              {field("Title", monograph.monographTitle)}
              {field("URL", monograph.monographURL)}
              {field("DOI", monograph.monographDOI)}
              {field("Embargo", monograph.monographEmbargo)}
              {field("License", monograph.monographLicense)}
            </div>
          </div>
        </div>
      );
    });
  };

  const displayDatasetInfo = (datasets) => {
    return datasets.map((dataset, index) => {
      return (
        <div key={index} className="Results__List">
          <div className="Results__Item">
            <div>
              <h6>{`Dataset ${index + 1}`}</h6>
              {field("Title", dataset.dataTitle)}
              {field("URL", dataset.dataURL)}
              {field("DOI", dataset.dataDOI)}
              {field("Format", dataset.format)}
              {field("License", dataset.dataLicense)}
            </div>
          </div>
        </div>
      );
    });
  };

  const displayCodeInfo = (codes) => {
    return codes.map((code, index) => {
      return (
        <div key={index} className="Results__List">
          <div className="Results__Item">
            <div>
              <h6>{`Code and Software ${index + 1}`}</h6>
              {field("Title", code.codeTitle)}
              {field("URL", code.codeURL)}
              {field("DOI", code.codeDOI)}
              {field("Open Source?", code.openSource ? "True" : "False")}
              {field("License", code.codeLicense)}
            </div>
          </div>
        </div>
      );
    });
  };

  const displayMaterialInfo = (materials) => {
    return materials.map((material, index) => {
      return (
        <div key={index} className="Results__List">
          <div className="Results__Item">
            <div>
              <h6>{`Research Materials ${index + 1}`}</h6>
              {field("Title", material.materialTitle)}
              {field("URL", material.materialURL)}
            </div>
          </div>
        </div>
      );
    });
  };

  const displayDigitalScholarshipInfo = (digitalScholarships) => {
    return digitalScholarships.map((digitalScholarship, index) => {
      return (
        <div key={index} className="Results__List">
          <div className="Results__Item">
            <div>
              <h6>{`Dataset ${index + 1}`}</h6>
              {field("Title", digitalScholarship.dsTitle)}
              {field("URL", digitalScholarship.dsURL)}
              {field(
                "Embargo",
                digitalScholarship.dsEmbargo ? "True" : "False"
              )}
              {field("License", digitalScholarship.dsLicense)}
            </div>
          </div>
        </div>
      );
    });
  };

  const displayPreprintInfo = (preprints) => {
    return preprints.map((preprint, index) => {
      return (
        <div key={index} className="Results__List">
          <div className="Results__Item">
            <div>
              <h6>{`Preprint ${index + 1}`}</h6>
              {field("Title", preprint.preprintTitle)}
              {field("URL", preprint.preprintURL)}
              {field("DOI", preprint.preprintDOI)}
              {field("License", preprint.dataLicense)}
            </div>
          </div>
        </div>
      );
    });
  };

  const displayPeerRevInfo = (peerReviews) => {
    return peerReviews.map((peerReview, index) => {
      return (
        <div key={index} className="Results__List">
          <div className="Results__Item">
            <div>
              <h6>{`Peer Review ${index + 1}`}</h6>
              {field("Title", peerReview.peerRevTitle)}
              {field("URL", peerReview.peerRevURL)}
              {field("Response", peerReview.peerRevReponse)}
            </div>
          </div>
        </div>
      );
    });
  };

  const displayPreRegAnalysisInfo = (preRegAnalyses) => {
    return preRegAnalyses.map((preRegAnalysis, index) => {
      return (
        <div key={index} className="Results__List">
          <div className="Results__Item">
            <div>
              <h6>{`Pre-Registration Analysis Plan ${index + 1}`}</h6>
              {field("Title", preRegAnalysis.preRegTitle)}
              {field("URL", preRegAnalysis.preRegURL)}
              {field("DOI", preRegAnalysis.preRegDistinction)}
            </div>
          </div>
        </div>
      );
    });
  };

  const displayRegReportInfo = (regReports) => {
    return regReports.map((regReport, index) => {
      return (
        <div key={index} className="Results__List">
          <div className="Results__Item">
            <div>
              <h6>{`Registered Report ${index + 1}`}</h6>
              {field("Title", regReport.regReportTitle)}
              {field("URL", regReport.regReportURL)}
            </div>
          </div>
        </div>
      );
    });
  };

  const displayThesisInfo = (theses) => {
    return theses.map((thesis, index) => {
      return (
        <div key={index} className="Results__List">
          <div className="Results__Item">
            <div>
              <h6>{`Thesis ${index + 1}`}</h6>
              {field("Title", thesis.dataTitle)}
              {field("URL", thesis.dataURL)}
              {field("DOI", thesis.dataDOI)}
              {field("Format", thesis.format)}
              {field("License", thesis.dataLicense)}
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="Results__Container">
      {/** Researcher Form Display */}
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
      {/** Optional Sections Display */}
      {formData.Article[0] && section("Article", formData.Article)}
      {formData.Monograph[0] && section("Monograph", formData.Monograph)}
      {formData.Dataset[0] && section("Dataset", formData.Dataset)}
      {formData.Code[0] && section("Code", formData.Code)}
      {formData.Material[0] && section("Material", formData.Material)}
      {formData.Protocol[0] && section("Protocol", formData.Protocol)}
      {formData.DigitalScholarship[0] &&
        section("Digital Scholarship", formData.DigitalScholarship)}
      {formData.Preprint[0] && section("Pre-Print", formData.Preprint)}
      {formData.PeerRev[0] && section("Peer Review", formData.PeerRev)}
      {formData.PreRegAnalysis[0] &&
        section("Pre-Reg Analysis", formData.PreRegAnalysis)}
      {formData.RegReport[0] &&
        section("Registered Report", formData.RegReport)}
      {formData.Thesis[0] && section("Thesis", formData.Thesis)}
    </div>
  );
};

export default FormDataDisplay;
