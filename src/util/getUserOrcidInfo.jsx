import axios from "axios";

async function getUserOrcidInfo(navigate) {
  const orcid = localStorage.getItem("orcidID");
  const accessToken = localStorage.getItem("orcidToken");
  console.log(orcid);
  console.log(accessToken);
  try {
    const response = await axios.post(`http://localhost:1337/orcid/user-info`, {
      orcidID: orcid,
      orcidToken: accessToken,
    });

    console.log("getting info");
    const userInfo = response.data;
    console.log(response);

    navigate.push("/");
    return userInfo;
  } catch (error) {
    console.error("Error getting user info:", error);
  }
}

export default getUserOrcidInfo;
