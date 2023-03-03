import DarkMode from "./DarkMode";
import UserAccount from "./UserAccount";
import hamburgerMenu from "../assets/hamburgerMenu.svg";

function Header({ setIsOpen, darkMode, setDarkMode }) {
  return (
    <header className="bg-slate-700 p-3 flex justify-between items-center px-10">
      <h1 className="text-white font-bold text-2xl">
        Reddit<span className="text-blue-300">Lite</span>
      </h1>
      <div className="flex gap-3 items-center">
        <DarkMode
          className="cursor-pointer"
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />
        <UserAccount />
        <img
          src={hamburgerMenu}
          className="max-h-8 hover:cursor-pointer hover:bg-slate-800"
          onClick={() => setIsOpen((prev) => !prev)}
        />
      </div>
    </header>
  );
}

export default Header;
