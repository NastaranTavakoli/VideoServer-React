import React, { useState } from "react";

export const SearchBar = ({ onFormSubmit }) => {
  const [term, setTerm] = useState("");

  const submitHandler = (e, term) => {
    e.preventDefault();
    onFormSubmit(term);
  };

  return (
    <div className="search-bar ui segment">
      <form className="ui form" onSubmit={e => submitHandler(e, term)}>
        <div className="field">
          <label>Please search the video:</label>
          <input
            type="text"
            value={term}
            onChange={e => setTerm(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
};
