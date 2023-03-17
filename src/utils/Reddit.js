const SCOPE = "identity mysubreddits";
const REDIRECT_URI = "http://127.0.0.1:5173";
const RANDOM_STRING = "beep";
const RESPONSE_TYPE = "token";
const CLIENT_ID = "uEWL6fiYDH1P7XCkUoXfTA";
const URL = `https://www.reddit.com/api/v1/authorize?client_id=${CLIENT_ID}&response_type=${RESPONSE_TYPE}&state=${RANDOM_STRING}&redirect_uri=${REDIRECT_URI}&scope=${SCOPE}`;

const Reddit = {
  getAuthorization() {
    window.location = URL;
  },
  getAccessToken() {
    const accessToken = sessionStorage.getItem("accessToken") || null;
    if (!accessToken) {
      const accessTokenMatch =
        window.location.href.match(/access_token=([^&]*)/);
      const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);

      if (accessTokenMatch && expiresInMatch) {
        const token = accessTokenMatch[1];
        sessionStorage.setItem("accessToken", token);
        const expiresIn = Number(expiresInMatch[1]);
        window.setTimeout(() => (accessToken = ""), expiresIn * 1000);
        window.history.pushState("Access Token", null, "/");
      }
    }
    return accessToken;
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
  getSubredditList() {
    const accessToken = this.getAccessToken();
    return fetch("https://oauth.reddit.com/subreddits/mine/subscriber", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
  },
};

export default Reddit;
