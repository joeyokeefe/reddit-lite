import DarkMode from "./DarkMode";
import UserAccount from "./UserAccount";
import hamburgerMenu from "../assets/hamburgerMenu.svg";

function Header({ setIsOpen }) {
  return (
    <header className="bg-slate-700 p-3 flex justify-between items-center mb-4 px-10">
      <h1 className="text-white font-bold text-2xl">
        Reddit<span className="text-blue-300">Lite</span>
      </h1>
      <div className="flex gap-3 items-center">
        <DarkMode />
        <UserAccount />
        <img
          src={hamburgerMenu}
          className="p-3 max-h-12 bg-white rounded-3xl border shadow shadow-slate-500 hover:bg-slate-200 hover:cursor-pointer"
          onClick={() => setIsOpen((prev) => !prev)}
        />
      </div>
    </header>
  );
}

export default Header;
