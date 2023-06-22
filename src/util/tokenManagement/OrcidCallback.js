import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import registerUser from "../userFunctions/registerUser";

// This function is called in App.js as a route for /callback as /callback is the redirect uri that the site gets sent to after the user has authenticated with the Orcid website.
const OrcidCallback = () => {
  const navigate = useNavigate();

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
          // register the user
          registerUser(data.orcid, true, "test@gmail.com");
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
