function DarkMode({ darkMode, setDarkMode }) {
  if (darkMode === "light") {
    return (
      <div className="cursor-pointer" onClick={() => setDarkMode("dark")}>
        <svg
          id="i-moon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          width="26"
          height="26"
          fill="none"
          stroke="white"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
        >
          <path d="M14 2C 9 2 3 7 3 15 3 23 9 29 17 29 25 29 30 23 30 18 19 25 7 13 14 2Z" />
        </svg>
      </div>
    );
  }

  if (darkMode === "dark") {
    return (
      <div className="cursor-pointer" onClick={() => setDarkMode("light")}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-sun"
          width="30"
          height="30"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="white"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <circle cx="12" cy="12" r="4" />
          <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7" />
        </svg>
      </div>
    );
  }
}

export default DarkMode;
