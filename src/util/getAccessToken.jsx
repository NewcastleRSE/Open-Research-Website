import axios from "axios";

async function getAccessToken(code) {
  const response = await axios.post("https://orcid.org/oauth/token", {
    client_id: import.meta.env.VITE_CLIENT_ID,
    client_secret: import.meta.env.ORCID_CLIENT_SECRET,
    grant_type: "authorization_code",
    redirect_uri: import.meta.env.VITE_OAUTH_URL,
    code: "HcGeiS",
  });

  return response.data.access_token;
}

export default getAccessToken;
