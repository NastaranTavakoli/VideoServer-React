import React, { useEffect, useState } from "react";
import axios from "axios";
import { VideoDetail, SearchBar, VideoList } from "./components";

const KEY = "AIzaSyDpq72CSnIbMapGYU6dSnuErmAo8ecX01c";

const App = () => {
  const [videos, setVideos] = useState([]);
  const [video, setVideo] = useState(videos[0]);
  const onFormSubmit = term => {
    const search = async () => {
      const response = await axios.get(
        "https://www.googleapis.com/youtube/v3/search",
        {
          params: {
            part: "snippet",
            maxResults: 5,
            key: KEY,
            q: term,
          },
        }
      );
      setVideos(response.data.items);
    };
    search();
  };

  useEffect(() => {
    setVideo(videos[0]);
  }, [videos]);

  return (
    <div className="ui container">
      <SearchBar onFormSubmit={onFormSubmit} />
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
