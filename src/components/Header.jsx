function Header() {
  return (
    <header className="bg-pink-400 p-3 flex justify-between items-center">
      <h1 className="text-white font-bold">Reddit Lite</h1>
      <div className="flex items-center">
            <div className="flex gap-2">
                <input
                    type="text"
                    className="block w-full px-4 py-2 rounded-md text-pink-600 bg-white  focus:border-pink-600 focus:ring-pink-600 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Search..."
                />
                <button className="px-4 text-black bg-white rounded-md">

                    Search
                </button>
            </div>
        </div>
    </header>
  )
}

export default Header