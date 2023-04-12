import axios from "axios";
import getAccessToken from "../util/getAccessToken";

const Login = () => {
  const handleLogin = async () => {
    const strapiUrl = "http://localhost:1337";
    const response = await axios.get(`${strapiUrl}/connect/orcid`);
    window.location.href = response.data.url;
  };
  const handleOAuth = () => {
    const CLIENT_ID = import.meta.env.VITE_CLIENT_ID;
    const REDIRECT_URI = import.meta.env.VITE_OAUTH_URL;
    const url = `https://orcid.org/oauth/authorize?client_id=${CLIENT_ID}&response_type=code&scope=/authenticate&redirect_uri=${REDIRECT_URI}`;
    window.location.href = url;
    console.log(getAccessToken);
  };

  return (
    <div>
      <h1>Login with ORCID</h1>
      <button onClick={handleOAuth}>Login with ORCID</button>
    </div>
  );
};

export default Login;
