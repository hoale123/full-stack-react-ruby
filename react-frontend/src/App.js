import React from 'react';
import './App.css';
import { useEffect, useState } from "react"
import Products from './Products';
import Header from './Header';

function App() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("newest");


  // useEffect(() => {
  //   fetch("http://localhost:9290/test")
  // .then((r) => r.json())
  // .then((data) => console.log("hello"));
  // },[])

  useEffect(() => {
    fetch("http://localhost:9001/products")
    .then(r=>r.json())
    .then(data=>setProducts(data))
}, [])

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
    <div className="App">
      <h1>Flatiron School: Phase 3 Project</h1>
      <h3>Created by Hoa Le and Morgan Byrne</h3>
      <Header 
        handleSearch={handleSearch}  
        sortBy={sortBy} 
        handleSort={handleSort}
      />
      <h2>Shop All</h2>
      <Products  products={updatedListings} />
    </div>
  )
}

export default App;
