import axios from "axios";

const userService = {
  register: async (identification, email, orcid) => {
    const password = "password";
    const username = identification;
    console.log(username, password, email, orcid);
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_STRAPI_URL}/auth/local/register`,
        { username, email, password, orcid },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response.data);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  login: async (identification) => {
    const password = "password";
    const identifier = identification;
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_STRAPI_URL}/auth/local`,
        { identifier, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  updateUser: async (identification, token, updatedData) => {
    try {
      const response = await axios.put(
        `${import.meta.env.VITE_STRAPI_URL}/users/${identification}`,
        updatedData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  getUser: async (identification) => {
    try {
      const response = await axios.put(
        `${import.meta.env.VITE_STRAPI_URL}/users/${identification}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export default userService;
