import React, { useEffect, useState } from "react";
import { VideoDetail, SearchBar, VideoList } from "./components";
import useVideos from "../src/hooks/useVideos";

const App = () => {
  const [videos, search] = useVideos("building");
  const [video, setVideo] = useState(videos[0]);

  useEffect(() => {
    setVideo(videos[0]);
  }, [videos]);

  return (
    <div className="ui container">
      <SearchBar onFormSubmit={search} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={video} />
          </div>
          <div className="five wide column">
            <VideoList onVideoClick={setVideo} videos={videos} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
