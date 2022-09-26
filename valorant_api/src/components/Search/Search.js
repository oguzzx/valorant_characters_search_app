import React from "react";
import "./search.css";

function Search({ searchChange }) {
  return (
    <div className="search">
      <input
        type="search"
        placeholder="Search Characters"
        onChange={searchChange}
      />
    </div>
  );
}

export default Search;
