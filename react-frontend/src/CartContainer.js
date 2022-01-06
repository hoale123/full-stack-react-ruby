import React from "react";
// import ProductCard from "./ProductCard";

function CartContainer({shoppingCart,handleAddProduct,onRemove}) {
  // const productList = products.map(product => (
  //   <ProductCard key={product.id} product={product}    />
  // ))
    return(
        <aside className="block col-1">
        <h2>My Shopping Cart</h2>
        <div>
          {shoppingCart.length === 0 && <div>Cart is Empty</div>}
        </div>
        {shoppingCart.map((item) => (
          <div key={item.id} className="row">
            <div className="col-2">{item.name}</div>
            <div className="col-2">
              <button onClick={() => onRemove(item)} className="remove">
                -
              </button>{' '}
              <button onClick={() => handleAddProduct(item)} className="add">
                +
              </button>
            </div>

            <div className="col-2 text-right">
              {item.qty} x ${item.price.toFixed(2)}
            </div>
          </div>
        ))}
      </aside>
    )
}

export default CartContainer;