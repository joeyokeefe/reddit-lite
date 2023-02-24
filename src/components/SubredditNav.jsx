function SubredditNav({ subreddits }) {
  return (
    <div className="bg-slate-200 p-6 h-full rounded-xl">
      <h2 className="text-xl font-bold mb-2">Subreddits</h2>
      {subreddits.map((subreddit) => (
        <div key={subreddit.data.id} className="text-lg mb-2 flex flex-nowrap">
          <img
            className="h-8 rounded-2xl inline mr-2"
            src={subreddit.data.icon_img}
          />
          {subreddit.data.display_name_prefixed}
        </div>
      ))}
    </div>
  );
}

export default SubredditNav;
