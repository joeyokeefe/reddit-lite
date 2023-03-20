import { useEffect, useState } from "react";
import Post from "../components/Post.jsx";
import SubredditNav from "../components/SubredditNav.jsx";
import Reddit from "../utils/Reddit.js";
import { useParams } from "react-router-dom";

function Home({ isOpen, user }) {
  const [posts, setPosts] = useState([]);
  const [subreddits, setSubreddits] = useState([]);
  const params = useParams();
  const signInError = sessionStorage.getItem("declined") || null;
  

  useEffect(() => {
    if (!params.subreddit && !user) {
      fetch("https://ww.reddit.com/r/popular.json")
        .then((res) => res.json())
        .then((postsArr) => setPosts(postsArr.data.children));
    } else if (params.subreddit && !user) {
      fetch(`https://www.reddit.com/r/${params.subreddit}.json`)
        .then((res) => res.json())
        .then((postsArr) => setPosts(postsArr.data.children));
    }
    Reddit.getSubredditPosts(params.subreddit || "popular")
      .then((res) => res.json())
      .then((postsArr) => setPosts(postsArr.data.children));
  }, [params]);

  useEffect(() => {
    if (!user) {
      fetch("https://www.reddit.com/subreddits/default.json")
      .then((res) => res.json())  
      .then((subredditsArr) => setSubreddits(subredditsArr.data.children));
    }
    Reddit.getSubredditList()
        .then((res) => res.json())
        .then((subredditsArr) => setSubreddits(subredditsArr.data.children));
    
  }, [user]);

  return (
    <div>
      {signInError && <h1 className="text-red-600">{signInError}</h1>}
      <div className="relative flex flex-col justify-center md:flex-row-reverse dark:bg-slate-800">
        {isOpen && <SubredditNav subreddits={subreddits} />}
        <div className="mx-4 mt-8">
          {posts.map((post) => (
            <Post
              key={post.data.id}
              title={post.data.title}
              subreddit_name={post.data.subreddit_name_prefixed}
              post_image={post.data.url_overridden_by_dest}
              score={post.data.score}
              author={post.data.author}
              num_comments={post.data.num_comments}
              created_utc={post.data.created}
              name={post.data.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
