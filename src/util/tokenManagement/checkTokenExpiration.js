// This function checks to see if the token has expired. It should be called before doing anything with the token.
export const checkTokenExpiration = () => {
  const expirationDate = new Date(localStorage.getItem("expirationDate"));
  return new Date() > expirationDate;
};

// This function adds a new token if the old one has expired.
export const refreshToken = async () => {
  try {
    const clientId = import.meta.env.VITE_CLIENT_ID;
    const clientSecret = import.meta.env.VITE_CLIENT_SECRET;
    const refreshToken = localStorage.getItem("refreshToken");

    const response = await axios.post("https://orcid.org/oauth/token", null, {
      params: {
        grant_type: "refresh_token",
        client_id: clientId,
        client_secret: clientSecret,
        refresh_token: refreshToken,
      },
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });

    const accessToken = response.data.access_token;
    const expiresIn = response.data.expires_in;
    const newRefreshToken = response.data.refresh_token;

    // calculate the new expiration date
    const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);

    // update the local storage with the new values
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("expiresIn", expiresIn);
    localStorage.setItem("refreshToken", newRefreshToken);
    localStorage.setItem("expirationDate", expirationDate.toISOString());

    return accessToken;
  } catch (error) {
    console.error("Error refreshing the access token:", error);
  }
};

/*  Before making an API call
if (checkTokenExpiration()) {
  await refreshToken();
}
*/
