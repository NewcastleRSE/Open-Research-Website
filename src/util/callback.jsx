import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Callback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const fetchToken = async () => {
      const strapiUrl = "http://localhost:1337";
      const code = new URLSearchParams(window.location.search).get("code");

      try {
        const response = await axios.get(
          `${strapiUrl}/test-orcid?code=${code}`
        );
        localStorage.setItem("token", response.data.jwt);
        localStorage.setItem("user", JSON.stringify(response.data.user));
        navigate("/"); // Redirect to your desired page after successful login
      } catch (error) {
        console.error("Error during ORCID authentication", error);
      }
    };

    fetchToken();
  }, [navigate]);

  return (
    <div>
      <h1>Processing ORCID login...</h1>
    </div>
  );
};

export default Callback;
