import axios from "axios";
import getOrcidAccessToken from "../util/getOrcidAccessToken";
import { Route, useNavigate } from "react-router-dom";
import getMicrosoftAccessToken from "../util/getMicrosoftAccessToken";
import { useEffect } from "react";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    const url = "http://localhost:1337/api/connect/microsoft";
    window.location.href = url;
  };

  useEffect(() => {
    const code = new URLSearchParams(window.location.search).get("code");

    if (code) {
      // Exchange the authorization code for an access token
      getMicrosoftAccessToken(code, navigate);
    }
  }, [navigate]);

  return (
    <div>
      <h1>Login with Microsoft</h1>
      <button onClick={handleLogin}>Login with Microsoft</button>
    </div>
  );
};

export default Login;
