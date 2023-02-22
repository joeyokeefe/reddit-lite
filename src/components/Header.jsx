import SubredditNav from "./SubredditNav";

function Header() {
  return (
    <header className="bg-slate-700 p-3 flex justify-between items-center mb-4">
      <h1 className="text-white font-bold text-2xl">
        Reddit<span className="text-blue-300">Lite</span>
      </h1>
      <div className="flex items-center">
        <div className="flex gap-2">
          <input
            type="text"
            className="block w-full px-4 py-2 rounded-md text-blue-600 bg-white  focus:border-blue-600 focus:ring-blue-600 focus:outline-none focus:ring focus:ring-opacity-40"
            placeholder="Search..."
          />
          <button className="px-4 text-black bg-white rounded-md">
            Search
          </button>
        </div>
      </div>
      <SubredditNav />
    </header>
  );
}

export default Header;
