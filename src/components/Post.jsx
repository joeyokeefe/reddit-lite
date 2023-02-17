function Post({ title, score, author, num_comments, created_utc}) {

  function convertUTC(created) {
    // Convert the UTC time string to a Date object
    const date = new Date(created * 1000);

    // Get the number of milliseconds since the date
    const milliseconds = Date.now() - date.getTime();

    // Define the time intervals in milliseconds
    const minute = 60 * 1000;
    const hour = 60 * minute;
    const day = 24 * hour;
    const week = 7 * day;
    const month = 30 * day;
    const year = 365 * day;

    // Calculate the time elapsed in each interval
    const intervals = [
      { label: "year", time: year },
      { label: "month", time: month },
      { label: "week", time: week },
      { label: "day", time: day },
      { label: "hour", time: hour },
      { label: "minute", time: minute },
    ];

    for (let i = 0; i < intervals.length; i++) {
      const interval = intervals[i];
      const elapsed = Math.floor(milliseconds / interval.time);
      if (elapsed >= 1) {
        const suffix = elapsed === 1 ? "" : "s";
        return `${elapsed} ${interval.label}${suffix} ago`;
      }
    }

    return "just now";
  }

  return (
    <div className="flex flex-col items-center gap-4 mb-8 border border-red-600">
      <h4 className="font-bold">{title}</h4>
      <img src={""} alt=""/>
      <div className="flex gap-5">
        <p>{score}</p>
        <p>{author}</p>
        <p>{convertUTC(created_utc)}</p>
        <p>{num_comments}</p>
      </div>
    </div>
  )
}

export default Post