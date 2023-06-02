import axios from "axios";

// this function takes an orcidID and then fetches the full works of the researcher. The data is extremely messy so the function processOrcidData.jsx is needed to extract the title and id that is needed.
const fetchResearcherWorks = async (orcidID) => {
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

export default fetchResearcherWorks;
