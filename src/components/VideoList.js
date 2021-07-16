import React from "react";
import { VideoItem } from "./VideoItem";

export const VideoList = ({ videos, onVideoClick }) => {
  const renderedList = videos.map(video => (
    <VideoItem
      video={video}
      key={video.id.videoId}
      onVideoClick={onVideoClick}
    />
  ));
  return <div className="ui relaxed divided list">{renderedList}</div>;
};
