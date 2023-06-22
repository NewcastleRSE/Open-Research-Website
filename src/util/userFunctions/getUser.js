import userService from "../strapiFunctions/userService";

const getUser = async (id) => {
  try {
    const user = await userService.get(id);
    return user;
  } catch (error) {
    console.error("Failed to find user:", error);
  }
};

export default getUser;
