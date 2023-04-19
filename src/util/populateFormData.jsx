const populateFormData = ({ formData, setFormData, selectedProjectIndex }) => {
  const selectedProject = formData.orcidProjects.group[selectedProjectIndex];
  const workSummary = selectedProject["work-summary"][0];

  const projectName = workSummary.title.title.value;
  const publicationDate = workSummary["publication-date"];
  const externalIds = workSummary["external-ids"]["external-id"];
  const doiData = externalIds.find((id) => id["external-id-type"] === "doi");

  // Set projectName
  setFormData((prevState) => ({
    ...prevState,
    Project: {
      ...prevState.Project,
      projectName: projectName,
    },
  }));

  // Set articleTitle, articleURL, and articleDOI
  setArticleInfo((prevState) => ({
    ...prevState,
    articleTitle: projectName,
    articleURL: workSummary.url.value,
    articleDOI: doiData ? doiData["external-id-value"] : "",
  }));

  // Set codeTitle, dataTitle, dsTitle, materialTitle, monographTitle, etc.
  // (use the same pattern as above for the other fields you want to populate)
};
