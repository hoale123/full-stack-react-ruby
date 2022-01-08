import React from "react";

function Search({ handleSearch }) {
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Products:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a product name to search..."
        onChange={(e) => handleSearch(e.target.value)}
      />
    </div>
  );
}

export default Search;