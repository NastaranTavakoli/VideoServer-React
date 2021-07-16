import { useEffect, useState } from "react";
import axios from "axios";
const KEY = "AIzaSyDpq72CSnIbMapGYU6dSnuErmAo8ecX01c";

const useVideos = defaultSearchTerm => {
  const [videos, setVideos] = useState([]);
  const search = term => {
    const getVideos = async () => {
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
    getVideos();
  };

  useEffect(() => {
    search(defaultSearchTerm);
  }, [defaultSearchTerm]);

  return [videos, search];
};

export default useVideos;
