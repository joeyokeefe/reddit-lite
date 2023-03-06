import { useEffect, useState } from "react";
import Post from "./components/Post.jsx";
import Header from "./components/Header.jsx";
import SubredditNav from "./components/SubredditNav.jsx";

function App() {
  const [posts, setPosts] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [subreddits, setSubreddits] = useState([]);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    fetch("https://ww.reddit.com/r/popular.json")
      .then((res) => res.json())
      .then((postsArr) => setPosts(postsArr.data.children));
  }, []);

  useEffect(() => {
    fetch("https://www.reddit.com/subreddits/default.json")
      .then((res) => res.json())
      .then((subredditsArr) => setSubreddits(subredditsArr.data.children));
  }, []);

  useEffect(() => {
    if (theme === "light") {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  }, [theme]);

  return (
    <div>
      <Header
        setIsOpen={setIsOpen}
        theme={theme}
        setTheme={setTheme}
      />
      <div className="relative flex flex-col justify-center md:flex-row-reverse dark:bg-slate-800">
        {isOpen && <SubredditNav subreddits={subreddits} />}
        <div className="mx-4 mt-8">
          {posts.map((post) => (
            <Post
              key={post.data.id}
              title={post.data.title}
              subreddit_name={post.data.subreddit_name_prefixed}
              /*post_image={post.data.url_overridden_by_dest}*/
              score={post.data.score}
              author={post.data.author}
              num_comments={post.data.num_comments}
              created_utc={post.data.created}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
