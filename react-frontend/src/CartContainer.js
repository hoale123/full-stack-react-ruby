import React from "react";


function CartContainer({ shoppingCart, handleAddProduct, handleRemoveProduct, handleCheckout }) {
    const itemPrice = shoppingCart.reduce((a,c) => a + c.price * c.qty, 0)
    const taxPrice =itemPrice * 0.07;
    const discountPrice = itemPrice > 200 ? itemPrice * 0.10 : 0;
    const totalPrice = itemPrice + taxPrice - discountPrice

    function handleSubmit(e) {
      e.preventDefault();
      console.log(e);
    }

    return(
        <aside className="block col-1">
        <h2>My Shopping Cart</h2>
        <div className="col-4">
          {shoppingCart.length === 0 && <h3>Cart is Empty</h3>}
        </div>
        {shoppingCart.map((item) => (
          <div key={item.id} className="row">
            <div className="col-2">{item.name}</div>
            <div className="col-2">
              <button onClick={() => handleRemoveProduct(item)} className="remove">
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

            {shoppingCart.length !== 0 && (
              <>
              <hr></hr>
              <div className="row">
                <div className="col-2">Item Price</div>
                <div className="col-1 text-right">${itemPrice.toFixed(2)}</div>
              </div>
              <div className="row">
                <div className="col-2">Tax Price</div>
                <div className="col-1 text-right">${taxPrice.toFixed(2)}</div>
              </div>
              <div className="row">
                <div className="col-2">Discount Price</div>
                <div className="col-1 text-right">${discountPrice.toFixed(2)}</div>
              </div>              <hr></hr>
              <div className="row">
                <div className="col-2"><strong>Total Price</strong></div>
                <div className="col-1 text-right"><strong>${totalPrice.toFixed(2)}</strong></div>
              </div>
              <form>
                <a href="http://localhost:3000/order" onSubmit={()=>handleSubmit()}>🛒  Checkout 🛒 </a>
              </form>
              </>
            ) }
      </aside>
    )
}

export default CartContainer;