import convertUTC from "../utils/convertUTC";

function Post({
  title,
  score,
  author,
  num_comments,
  created_utc,
  post_image,
  subreddit_name,
}) {
  return (
    <div className="flex flex-col items-center text-center gap-4 mb-8 m-auto shadow shadow-slate-500 p-5 xl:p-2 xl:max-w-6xl dark:text-white dark:bg-slate-700 dark:shadow-none">
      <h4 className="font-bold text-xl">{title}</h4>
      <h5>{subreddit_name}</h5>
      {/*{post_image && <img className="object-cover" src={post_image} alt="" />}*/}
      <div className="flex w-full justify-between">
        <div className="flex items-center gap-1">
          <svg
            className="h-3.5 dark:fill-white"
            height="24"
            viewBox="0 0 16 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m12.781 2.375c-.381-.475-1.181-.475-1.562 0l-8 10c-.24.301-.286.712-.12 1.059.167.345.516.566.901.566h2 2v3 4c0 .553.447 1 1 1h6c.553 0 1-.447 1-1v-5-2h2 2c.385 0 .734-.221.901-.566.166-.347.12-.758-.12-1.059zm2.219 9.625h-1v1 3 4h-4v-3-4-1h-1-2.919l5.919-7.399 5.919 7.399z" />
          </svg>
          <p className="text-xs md:text-sm">{score}</p>
        </div>
        <div className="flex items-center gap-1">
          <svg
            className="h-3.5"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM6 8a6 6 0 1 1 12 0A6 6 0 0 1 6 8zm2 10a3 3 0 0 0-3 3 1 1 0 1 1-2 0 5 5 0 0 1 5-5h8a5 5 0 0 1 5 5 1 1 0 1 1-2 0 3 3 0 0 0-3-3H8z"
              fill="#0D0D0D"
              className="dark:fill-white"
            />
          </svg>
          <p className="text-xs md:text-sm">{author}</p>
        </div>
        <div className="flex items-center gap-1">
          <svg
            className="h-3"
            fill="none"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g
              className="dark:stroke-white"
              stroke="#000"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="m12 6v6l4 4" />
            </g>
          </svg>
          <p className="text-xs md:text-sm">{convertUTC(created_utc)}</p>
        </div>
        <div className="flex items-center gap-1">
          <svg
            className="h-3"
            fill="none"
            height="12"
            viewBox="0 0 12 12"
            width="12"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="dark:fill-white"
              d="m3 2c-.55228 0-1 .44772-1 1v4c0 .55228.44772 1 1 1h.5c.27614 0 .5.22386.5.5v1.06574l2.22265-1.48177c.08213-.05475.17864-.08397.27735-.08397h2.5c.55229 0 1-.44772 1-1v-4c0-.55228-.44771-1-1-1zm-2 1c0-1.10457.89543-2 2-2h6c1.1046 0 2 .89543 2 2v4c0 1.10457-.8954 2-2 2h-2.34861l-2.87404 1.916c-.15343.1023-.3507.1118-.51328.0248s-.26407-.2564-.26407-.4408v-1.5c-1.10457 0-2-.89543-2-2z"
              fill="#212121"
            />
          </svg>
          <p className="text-xs md:text-sm">{num_comments}</p>
        </div>
      </div>
    </div>
  );
}

export default Post;
