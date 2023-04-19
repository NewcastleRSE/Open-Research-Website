import axios from "axios";

async function getUserOrcidInfo(navigate) {
  console.log("at the start");
  const orcid = localStorage.getItem("orcidID");
  const accessToken = localStorage.getItem("orcidToken");
  try {
    const response = await axios.get(
      `https://pub.orcid.org/v3.0/${orcid}/record`,
      {
        headers: {
          "Content-Type": "application/vnd.orcid+json",
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    console.log("getting info");
    const userInfo = response.data;
    console.log(userInfo);

    navigate.push("/");
    return userInfo;
  } catch (error) {
    console.error("Error getting user info:", error);
  }
}

export default getUserOrcidInfo;
