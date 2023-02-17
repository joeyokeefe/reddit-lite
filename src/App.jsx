import { useEffect, useState } from "react";
import Post from "./components/Post.jsx";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://ww.reddit.com/r/popular.json")
      .then((res) => res.json())
      .then((postsArr) => setPosts(postsArr.data.children));
  }, []);

  return (
    <div>
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
  );
}

export default App;
