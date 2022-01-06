import React from "react";
// import ProductCard from "./ProductCard";

function CartContainer({ shoppingCart, handleAddProduct, onRemove, handleCheckout }) {
  // const productList = products.map(product => (
  //   <ProductCard key={product.id} product={product}    />
  // ))
    return(
        <aside className="block col-1">
        <h2>My Shopping Cart</h2>
        <div>
          {shoppingCart.length === 0 && <h3>Cart is Empty</h3>}
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
            <br></br>
            <button onClick={() => handleCheckout(shoppingCart)} className="orderCheckout">🛒 <em>Proceed to Checkout</em>🛒</button>
          </div>
        ))}
      </aside>
    )
}

export default CartContainer;