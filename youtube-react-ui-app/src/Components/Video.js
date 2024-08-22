import React from "react";

const Video = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className="p-2  m-1 w-72 shadow-lg h-80 flex flex-col justify-between">
      <img
        className="rounded-lg w-full h-40 object-cover "
        alt="thumbanils"
        src={thumbnails.medium.url}
      ></img>
      <ul>
        <li className="font-bold py-1 truncate">{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount} views</li>
      </ul>
    </div>
  );
};

export default Video;
