import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import registerUser from "../userFunctions/registerUser";
import useSetToken from "../userFunctions/useSetToken";
import getUser from "../userFunctions/getUser";
import loginUser from "../userFunctions/loginUser";

// This function is called in App.js as a route for /callback as /callback is the redirect uri that the site gets sent to after the user has authenticated with the Orcid website.
const OrcidCallback = () => {
  const setToken = useSetToken();
  const navigate = useNavigate();

  const handleUser = async (id) => {
    const user = await getSelf(id);
    if (user) {
      console.log("Found user", user);
      handleLogin(id);
    } else {
      console.log("Cant find user");
      handleRegister(id);
    }
  };

  const handleLogin = async (id) => {
    try {
      console.log("Logging in orcid user");
      const user = await loginUser(id);
      setToken(user);
      return user;
    } catch (err) {
      console.error(err);
    }
  };

  const getSelf = async (id) => {
    try {
      const user = await getUser(id);
      return user;
    } catch (err) {
      console.error(err);
    }
  };

  const handleRegister = async (id) => {
    const email = "orcidemail@gmail.com";
    const orcid = true;
    console.log("Registering new orcid user");
    try {
      const user = await registerUser(id, email, orcid);
      console.log(user);
      return user;
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    // retrieve the code from the URL
    const code = new URLSearchParams(window.location.search).get("code");

    if (code) {
      axios
        .get(`http://localhost:1337/api/getAccessToken?code=${code}`)
        .then((response) => {
          const data = response.data;
          console.log(data);
          // set local storage
          localStorage.setItem("orcidToken", data.accessToken);
          localStorage.setItem("orcidID", data.orcid);
          handleUser(data.orcid);
          // redirect the user to another page (e.g., a dashboard)
          console.log("Navigating to home page");
          navigate("/");
        })
        .catch((error) => {
          console.error("Error getting access token:", error.message);
        });
    }
  });
};

export default OrcidCallback;
