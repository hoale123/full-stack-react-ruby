import React from "react";
import ProductCard from "./ProductCard";

function Products( { products } ) {

  function renderProducts() {
    return products.map((product)=> (
      <ProductCard 
        key={product.id} 
        product={product} 
      />
    ));
  }

  return (
      <ul className="cards">{renderProducts()}</ul>
  );

}


export default Products;
