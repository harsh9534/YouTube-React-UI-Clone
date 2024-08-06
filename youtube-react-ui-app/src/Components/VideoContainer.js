import React, { useEffect, useState } from "react";
import { VIDEO_API } from "../utils/constants";
import Video from "./Video";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(VIDEO_API);
    const json = await data.json();
    console.log(json.items);
    setVideos(json.items);
  };
  return (
    <div className="flex flex-wrap">
      {videos.map((video) => (
        <Video key={video.id} info={video} />
      ))}
    </div>
  );
};

export default VideoContainer;
