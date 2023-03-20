import convertUTC from "../utils/convertUTC";
import Reddit from "../utils/Reddit";
import { useState } from "react";

function Post({
  title,
  score,
  author,
  num_comments,
  created_utc,
  post_image,
  subreddit_name,
  name
}) {
  const [vote, setVote] = useState(null);

  function handleUpVote() {
    if (vote === null || vote === "down") {
      Reddit.vote(name,"1")
      setVote("up");
    } else {
      Reddit.vote(name, "0")
      setVote(null)
    }
  }

  function handleDownVote() {
    if (vote === null || vote === "up") {
      Reddit.vote(name, "-1")
      setVote("down");
    } else {
      Reddit.vote(name, "0")
      setVote(null)
    }
  }

  return (
    <div className="relative flex justify-center mb-8 m-auto gap-12 shadow shadow-slate-500 p-5 xl:p-2 xl:max-w-6xl dark:text-white dark:bg-slate-700 dark:shadow-none">
      <div className="absolute left-5 top-1/4 flex flex-col items-center gap-2 ">
        <svg
          className={`stroke-2 stroke-orange-400 ${vote === "up" ? "fill-orange-400" : "fill-none"} cursor-pointer`}
          height="24"
          viewBox="0 0 24 24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          onClick={handleUpVote}
        >
          <path d="m4 14h2 2v3 4c0 .553.447 1 1 1h6c.553 0 1-.447 1-1v-5-2h1 3c.385 0 .734-.221.901-.566.166-.347.12-.758-.12-1.059l-8-10c-.381-.475-1.181-.475-1.562 0l-8 10c-.24.301-.286.712-.12 1.059.167.345.516.566.901.566z" />
        </svg>
        <p className="text-xs md:text-sm">{score}</p>
        <svg
          className={`stroke-2 stroke-purple-400 ${vote === "down" ? "fill-purple-400" : "fill-none"} cursor-pointer`}
          height="24"
          viewBox="0 0 24 24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          onClick={handleDownVote}
        >
          <path d="m20.901 10.566c-.167-.345-.516-.566-.901-.566h-2-2v-3-4c0-.553-.447-1-1-1h-6c-.553 0-1 .447-1 1v5 2h-1-3c-.385 0-.734.221-.901.566-.166.347-.12.758.12 1.059l8 10c.19.237.477.375.781.375s.591-.138.781-.375l8-10c.24-.301.286-.712.12-1.059z" />
        </svg>
      </div>
      <div className="flex flex-col items-center text-center gap-4 w-3/4">
        <div className="flex w-full justify-start">
          <h5>{subreddit_name} - </h5>
          <div className="flex items-center">
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
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="m12 6v6l4 4" />
              </g>
            </svg>
            <p className="text-xs md:text-sm">{convertUTC(created_utc)}</p>
          </div>
        </div>
        <h4 className="font text-xl">{title}</h4>
        {/* {post_image && <img className="" src={post_image} alt="" />} */}
        <div className="flex w-full justify-between">
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
    </div>
  );
}

export default Post;
