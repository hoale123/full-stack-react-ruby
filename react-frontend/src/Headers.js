import React from "react";
import Search from "./Search";
import Filter from "./Filter";

function Headers( { handleSearch, sortBy, handleSort } ) {
   
    return (
        <div>
            <Search  handleSearch={handleSearch} />
            <Filter sortBy={sortBy} handleSort={handleSort}  />
        </div>
    )

}

export default Headers;