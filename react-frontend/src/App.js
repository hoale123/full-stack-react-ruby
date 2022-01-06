import React from 'react';
import './App.css';
import { useEffect, useState } from "react"
import Products from './Products';
import Header from './Header';
import CartContainer from './CartContainer';

function App() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("newest");
  const [shoppingCart, setCart] = useState([]);

  function handleAddProduct(product) {
    const inCart = shoppingCart.find((p) => p.id === product.id);
    if (inCart) {
      setCart(shoppingCart.map(p => p.id === product.id ? {...inCart, qty: inCart.qty + 1}:p))
    } else {
      setCart([...shoppingCart, { ...product, qty: 1 }]);
    }
  }

  function handleCheckout(cart) {
    console.log("ready to checkout")
  }

  useEffect(() => {
    fetch("http://localhost:9292/products")
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
      <Products  
      products={updatedListings} 
      handleAddProduct={handleAddProduct}
      />
      <div className="col-4">
          <CartContainer
          handleAddProduct={handleAddProduct}
          shoppingCart={shoppingCart}
          handleCheckout={handleCheckout}
            // onRemoveStock={handleRemoveStock}
          />
        </div>
    </div>
  )
}

export default App;
