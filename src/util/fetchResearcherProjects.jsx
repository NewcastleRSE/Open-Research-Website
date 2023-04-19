import axios from "axios";

const fetchResearcherProjects = async (orcidID) => {
  try {
    const response = await axios.get(
      `https://pub.orcid.org/v3.0/${orcidID}/works`,
      {
        headers: {
          Accept: "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching researcher works:", error);
    throw error;
  }
};

export default fetchResearcherProjects;
