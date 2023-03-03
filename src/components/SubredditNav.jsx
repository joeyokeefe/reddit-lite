import defaultSubredditIcon from "../assets/defaultSubredditIcon.svg";

function SubredditNav({ subreddits }) {
  return (
    <div className="bg-slate-400 p-6 h-full text-center mb-4 w-80 self-end absolute right-0 top-0 border">
      <h2 className="text-2xl font-bold mb-8">Subreddits</h2>
      {subreddits.map((subreddit) => (
        <div
          key={subreddit.data.id}
          className="text-lg mb-6 flex flex-nowrap font-semibold cursor-pointer"
        >
          {subreddit.data.icon_img ? (
            <img
              className="h-8 rounded-2xl inline mr-2 border-2 border-slate-700 cursor-pointer"
              src={subreddit.data.icon_img}
            />
          ) : (
            <img
              className="h-8 rounded-2xl inline mr-2 border-2 border-slate-700 cursor-pointer"
              src={defaultSubredditIcon}
            />
          )}
          {subreddit.data.display_name_prefixed}
        </div>
      ))}
    </div>
  );
}

export default SubredditNav;
