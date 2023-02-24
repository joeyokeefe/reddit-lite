import { useEffect, useState } from "react";
import Post from "./components/Post.jsx";
import Header from "./components/Header.jsx";
import SubredditNav from "./components/SubredditNav.jsx";

function App() {
  const [posts, setPosts] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [subreddits, setSubreddits] = useState([]);

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

  return (
    <div>
      <Header setIsOpen={setIsOpen} />
      <div className="relative flex justify-center">
        <div className="mx-4">
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
        {isOpen && <SubredditNav subreddits={subreddits} />}
      </div>
    </div>
  );
}

export default App;
