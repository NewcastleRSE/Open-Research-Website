import axios from "axios";
import { useCookies } from "react-cookie";

// handles adding a restaurant to the database, takes a yelp id and a name.
export default async function addEntry(entry, section) {
  const [cookies] = useCookies();
  const user = cookies.username;

  try {
    const response = await axios.post(
      `${process.env.STRAPI_URL}/entries`,
      {
        data: {
          entry,
          section: section,
          User: user,
        },
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.ADMIN_TOKEN}`,
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error response data:", error.response?.data);
    throw new Error("An error occurred whilst adding an entry.");
  }
}
