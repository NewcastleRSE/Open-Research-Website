import userService from "../strapiFunctions/userService";

const loginUser = async (id) => {
  try {
    const user = await userService.login(id);
    console.log("User logged in:", user);
    return user;
  } catch (error) {
    console.error("Login failed:", error);
  }
};

export default loginUser;
