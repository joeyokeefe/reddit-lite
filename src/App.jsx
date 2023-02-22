import { useEffect, useState } from "react";
import Post from "./components/Post.jsx";
import Header from "./components/Header.jsx";
import SubredditNav from "./components/SubredditNav.jsx";

function App() {
  const [posts, setPosts] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    fetch("https://ww.reddit.com/r/popular.json")
      .then((res) => res.json())
      .then((postsArr) => setPosts(postsArr.data.children));
  }, []);

  return (
    <div>
      <Header />
      <div className="relative flex justify-center">
        <div className="mx-4">
          {posts.map((post) => (
            <Post
              key={post.data.id}
              title={post.data.title}
              score={post.data.score}
              author={post.data.author}
              num_comments={post.data.num_comments}
              created_utc={post.data.created}
            />
          ))}
        </div>
        <div
          className="p-4 space-y-1.5 max-h-12 bg-white rounded border shadow shadow-slate-500 hover:bg-slate-200 hover:cursor-pointer"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <div className="block w-8 h-0.5 max-h-0.5 min-h-0.5 bg-gray-700"></div>
          <div className="block w-8 h-0.5 max-h-0.5 min-h-0.5 bg-gray-700"></div>
          <div className="block w-8 h-0.5 max-h-0.5 min-h-0.5 bg-gray-700"></div>
        </div>
        {isOpen && <SubredditNav />}
      </div>
    </div>
  );
}

export default App;
