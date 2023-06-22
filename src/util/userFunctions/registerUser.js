import userService from "../../util/strapiFunctions/userService";

// orcid will be either true or false depending on if the account is an orcid account
const registerUser = async (id, email, orcid) => {
  try {
    const user = await userService.register(id, email, orcid);
    console.log("User registered:", user);
    return user;
  } catch (error) {
    console.error("Registration failed:", error);
  }
};

export default registerUser;
