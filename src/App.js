import React from "react";
import { VideoDetail, SearchBar, VideoList } from "./components";

const App = () => {
  const onFormSubmit = term => {
    console.log(term);
  };

  return (
    <div>
      <SearchBar onFormSubmit={onFormSubmit} />
      <VideoDetail />
      <VideoList />
    </div>
  );
};

export default App;
