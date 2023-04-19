const processOrcidData = (data) => {
  if (!data) {
    throw new Error("No data provided to processOrcidData");
  }

  if (!data.group) {
    throw new Error("No group property found in data");
  }

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
