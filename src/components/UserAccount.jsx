import Reddit from "../utils/Reddit.js";

function UserAccount({ user, setUser }) {
  function signIn() {
    Reddit.getUser()
      .then((res) => res.json())
      .then((data) => setUser(data));
  }

  return user ? (
    <div className="cursor-pointer">
      <img src={user.icon_img} alt="" />
    </div>
  ) : (
    <div className="cursor-pointer" onClick={signIn}>
      <svg
        height="28"
        viewBox="0 0 32 32"
        width="32"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="m16 8a5 5 0 1 0 5 5 5 5 0 0 0 -5-5zm0 8a3 3 0 1 1 3-3 3.0034 3.0034 0 0 1 -3 3z"
          fill="white"
        />
        <path
          d="m16 2a14 14 0 1 0 14 14 14.0158 14.0158 0 0 0 -14-14zm-6 24.3765v-1.3765a3.0033 3.0033 0 0 1 3-3h6a3.0033 3.0033 0 0 1 3 3v1.3765a11.8989 11.8989 0 0 1 -12 0zm13.9925-1.4507a5.0016 5.0016 0 0 0 -4.9925-4.9258h-6a5.0016 5.0016 0 0 0 -4.9925 4.9258 12 12 0 1 1 15.985 0z"
          fill="white"
        />
        <path d="m0 0h32v32h-32z" fill="none" />
      </svg>
    </div>
  );
}

export default UserAccount;
