import React, { useState, useEffect } from "react";
import Search from "./Search";
import Filter from "./Filter";

function Header() {
    const [search, setSearch] = useState("");
    const [sortBy, setSortBy] = useState("newest");

    function handleSearch(searchText) {
        setSearch(searchText);
   }

   function handleSort(dropdown) {
       setSortBy(dropdown)
   }

   const sortedProducts = [...products].sort((a, b) => {
    if (sortBy === "name") {
      return a.name - b.name;
    } else if (sortBy === "price"){
        return a.price - b.price;
    } else {
        return a.id - b.id;
    }
  });

    const updatedListings = sortedProducts.filter((product)=> product.name.toLowerCase().includes(search.toLowerCase()) || product.description.toLowerCase().includes(search.toLowerCase()));
    
    return (
        <div>
            <Search  handleSearch={handleSearch} />
            <Filter sortBy={sortBy} handleSort={handleSort}  />
        </div>
    )

}

export default Header;