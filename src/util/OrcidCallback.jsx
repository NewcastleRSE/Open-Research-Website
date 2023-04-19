// components/OrcidCallback.jsx

import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const OrcidCallback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const code = new URLSearchParams(window.location.search).get("code");

    if (code && localStorage.getItem("orcidLinked") !== true) {
      axios
        .get(`http://localhost:1337/api/getAccessToken?code=${code}`)
        .then((response) => {
          const data = response.data;
          console.log(data);
          // Do something with the access token and ORCID (e.g., store it in your app's state or localStorage)
          localStorage.setItem("orcidLinked", "true");
          localStorage.setItem("orcidToken", data.accessToken);
          localStorage.setItem("orcidID", data.orcid);
          console.log(
            "orcid authenticated?",
            localStorage.getItem("orcidLinked")
          );
          console.log("orcid token", localStorage.getItem("orcidToken"));
          console.log("orcid id", localStorage.getItem("orcidID"));

          // Redirect the user to another page (e.g., a dashboard)
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
