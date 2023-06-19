import axios from "axios";

// This function handles getting the access token
async function getAccessToken(code, navigate, onOrcidLinked) {
  const CLIENT_ID = import.meta.env.VITE_CLIENT_ID;
  const CLIENT_SECRET = import.meta.env.VITE_CLIENT_SECRET;
  const REDIRECT_URI = import.meta.env.VITE_OAUTH_URL;

  try {
    const response = await axios.post("https://orcid.org/oauth/token", null, {
      params: {
        grant_type: "authorization_code",
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        code: code,
        redirect_uri: REDIRECT_URI,
      },
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });

    const accessToken = response.data.access_token;
    const orcid = response.data.orcid;

    // Retrieve the user's ORCID information using the access token
    onOrcidLinked(data.accessToken, data.orcid);
    getUserOrcidInfo(orcid, accessToken, navigate);
  } catch (error) {
    console.error("Error getting access token:", error);
  }
}

export default getAccessToken;
