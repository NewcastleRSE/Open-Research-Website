import axios from "axios";

async function getUserOrcidInfo(navigate, orcid) {
  try {
    const response = await axios.get(
      `https://pub.orcid.org/v3.0/${orcid}/record`
    );
    console.log("getting info");
    const userRecord = response.data;
    console.log(response);

    navigate("/");
    return userRecord;
  } catch (error) {
    console.error("Error getting user info:", error);
  }
}

export default getUserOrcidInfo;
