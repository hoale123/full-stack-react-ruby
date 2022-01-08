import React from "react";

function Filter({ handleSort, sortBy }) {

  function handleChange(e) {
    handleSort(e.target.value)
  }  

  return (
    <div className="sort">
      <label>
        <strong>Sort by:</strong>
        <select onChange={handleChange} value={sortBy}>
          <option value="newest">Newest</option>
          <option value="price">Price (Low-High)</option>
          <option value="name">Name(A-Z)</option>
        </select>
      </label>
    </div>
  );
}

export default Filter;