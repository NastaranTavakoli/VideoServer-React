import React, { useState } from "react";

export const SearchBar = ({ onFormSubmit }) => {
  const [term, setTerm] = useState("");
  return (
    <div>
      <form onSubmit={() => onFormSubmit(term)}>
        <label>Please search the video:</label>
        <input value={term} onChange={e => setTerm(e.target.value)} />
      </form>
    </div>
  );
};
