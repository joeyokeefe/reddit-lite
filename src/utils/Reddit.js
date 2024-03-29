const SCOPE = "identity mysubreddits read vote";
const REDIRECT_URI = "https://r-lite.netlify.app/";
const RANDOM_STRING = "beep";
const RESPONSE_TYPE = "token";
const CLIENT_ID = "uEWL6fiYDH1P7XCkUoXfTA";
const URL = `https://www.reddit.com/api/v1/authorize?client_id=${CLIENT_ID}&response_type=${RESPONSE_TYPE}&state=${RANDOM_STRING}&redirect_uri=${REDIRECT_URI}&scope=${SCOPE}`;

const Reddit = {
  getAuthorization() {
    window.location = URL;
    sessionStorage.setItem("allowed", "true");
  },
  getAccessToken() {
    const accessToken = sessionStorage.getItem("accessToken") || null;
    if (!accessToken) {
      const accessTokenMatch =
        window.location.href.match(/access_token=([^&]*)/);
      const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);
      const error = window.location.href.match(/error=([^&]*)/)

      if (accessTokenMatch && expiresInMatch) {
        sessionStorage.removeItem("declined");
        const token = accessTokenMatch[1];
        sessionStorage.setItem("accessToken", token);
        const expiresIn = Number(expiresInMatch[1]);
        window.setTimeout(
          () => sessionStorage.removeIten("accessToken"),
          expiresIn * 1000);
        window.history.pushState("Access Token", null, "/");
      }
      if (error) {
        window.history.pushState("Access Token", null, "/");
        sessionStorage.setItem(
          "declined",
          "There was an error accessing your account or you declined to use Rlite"
        );
        sessionStorage.removeItem("allowed");
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
  getSubredditPosts(params) {
    const accessToken = this.getAccessToken();
    return fetch(`https://oauth.reddit.com/r/${params}/hot/`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
  },
  vote(id, dir) {
    const accessToken = this.getAccessToken();
    return fetch(`https://oauth.reddit.com/api/vote?id=${id}&dir=${dir}`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }).then((res) => res.json());
  },
};

export default Reddit;
