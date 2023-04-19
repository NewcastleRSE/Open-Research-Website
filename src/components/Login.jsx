import axios from "axios";
import getAccessToken from "../util/getAccessToken";
import { Route, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  // const handleLogin = async () => {
  //   const strapiUrl = "http://localhost:1337";
  //   const response = await axios.get(`${strapiUrl}/connect/orcid`);
  //   window.location.href = response.data.url;
  // };
  const handleOAuth = () => {
    const CLIENT_ID = import.meta.env.VITE_CLIENT_ID;
    const REDIRECT_URI = import.meta.env.VITE_OAUTH_URL;
    const url = `https://orcid.org/oauth/authorize?client_id=${CLIENT_ID}&response_type=code&scope=/authenticate&redirect_uri=${REDIRECT_URI}`;
    window.location.href = url;
    console.log(getAccessToken);
  };

  useEffect(() => {
    const code = new URLSearchParams(window.location.search).get("code");

    if (code) {
      // Exchange the authorization code for an access token
      getAccessToken(code, navigate);
    }
  }, [navigate]);

  return (
    <div>
      <h1>Login with ORCID</h1>
      <button onClick={handleOAuth}>Login with ORCID</button>
    </div>
  );
};

export default Login;
