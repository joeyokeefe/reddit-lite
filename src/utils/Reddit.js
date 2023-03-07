const SCOPE = "identity";
const REDIRECT_URI = "http://127.0.0.1:5173";
const RANDOM_STRING = "beep";
const RESPONSE_TYPE = "token";
const CLIENT_ID = "uEWL6fiYDH1P7XCkUoXfTA";
const URL = `https://www.reddit.com/api/v1/authorize?client_id=${CLIENT_ID}&response_type=${RESPONSE_TYPE}&state=${RANDOM_STRING}&redirect_uri=${REDIRECT_URI}&scope=${SCOPE}`;
let accessToken;

const Reddit = {
  getAccessToken() {
    if (accessToken) {
      sessionStorage.setItem("accessToken", accessToken);
      return accessToken;
    }

    const accessTokenMatch = window.location.href.match(/access_token=([^&])/);
    const expiresInMatch = window.location.href.match(/expires_in=([^&])/);

    if (accessTokenMatch && expiresInMatch) {
      accessToken = accessTokenMatch[1];
      const expiresIn = Number(expiresInMatch[1]);
      window.setTimeout(() => (accessToken = ""), expiresIn * 1000);
      window.history.pushState("Access Token", null, "/");
      return accessToken;
    } else {
      window.location = URL;
    }
  },
  getUser() {
    const accessToken = this.getAccessToken();
    return fetch("https://oauth.reddit.com/api/v1/me", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
  },
};

export default Reddit;
