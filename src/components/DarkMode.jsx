function DarkMode() {
  return (
    <div className="cursor-pointer">
      <svg
        className="h-6"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="m0 0h24v24h-24z" fill="#fff" opacity="0" />
        <path
          d="m12.3 22h-.1a10.31 10.31 0 0 1 -7.34-3.15 10.46 10.46 0 0 1 -.26-14 10.13 10.13 0 0 1 4-2.74 1 1 0 0 1 1.06.22 1 1 0 0 1 .24 1 8.4 8.4 0 0 0 1.94 8.81 8.47 8.47 0 0 0 8.83 1.94 1 1 0 0 1 1.27 1.29 10.16 10.16 0 0 1 -2.34 3.63 10.28 10.28 0 0 1 -7.3 3z"
          fill="#fff"
        />
      </svg>
    </div>
  );
}

export default DarkMode;