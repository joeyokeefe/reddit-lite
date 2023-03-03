import DarkMode from "./DarkMode";
import UserAccount from "./UserAccount";
import hamburgerMenu from "../assets/hamburgerMenu.svg";

function Header({ setIsOpen, darkMode, setDarkMode }) {
  return (
    <header className="bg-slate-700 p-3 flex justify-between items-center px-10 dark:bg-slate-900">
      <h1 className="text-blue-400 font-bold text-2xl dark:text-white">
        Reddit<span className="text-white dark:text-blue-300">Lite</span>
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
