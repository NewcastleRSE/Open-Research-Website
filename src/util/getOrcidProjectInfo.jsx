import axios from "axios";

async function getOrcidProjectInfo(orcidID, orcidToken, putCode) {
  try {
    const response = await axios.post(
      `http://localhost:1337/orcid/project-info`,
      {
        orcidID: orcidID,
        orcidToken: orcidToken,
        putCode: putCode,
      }
    );

    const projectInfo = response.data;
    console.log(projectInfo);
    return projectInfo;
  } catch (error) {
    console.error("Error getting project info:", error);
  }
}

export default getOrcidProjectInfo;
