import axios from "axios";

const getMicrosoftAccessToken = async (code, navigate) => {
  try {
    const response = await axios.get(
      `http://localhost:1337/api/microsoft/callback?code=${code}`
    );

    if (response.status === 200) {
      const token = response.data.jwt;
      localStorage.setItem("jwt", token);
      console.log(localStorage.getItem("jwt"));
      navigate("/");
    } else {
      throw new Error("Failed to obtain JWT token");
    }
  } catch (error) {
    console.error("Error while getting Microsoft access token", error);
  }
};

export default getMicrosoftAccessToken;
