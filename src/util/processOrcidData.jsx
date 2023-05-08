// This function takes the orcid data about the researcher and populates it into a nice object with projectName and projectID keys and appropriate values.
const processOrcidData = (data) => {
  if (!data) {
    throw new Error("No data provided to processOrcidData");
  }

  if (!data.group) {
    throw new Error("No group property found in data");
  }

  // retrieve the put code and name from each project
  const projects = data.group.map((group) => {
    const workSummary = group["work-summary"][0];
    const {
      title: {
        title: { value: projectName },
      },
      "put-code": projectID,
    } = workSummary;

    return {
      projectName,
      projectID,
    };
  });

  return projects;
};

export default processOrcidData;
