import React from "react";
import ProductCard from "./ProductCard";

function Products( { products, handleAddProduct } ) {

  function renderProducts() {
    return products.map((product)=> (
      <ProductCard key={product.id} product={product} handleAddProduct={handleAddProduct} />
    ));
  }

  return (
      <ul className="cards">{renderProducts()}</ul>
  );
}

export default Products;
