import React, { useState } from "react";
import CartContainer from "./CartContainer";

function OrderForm({ handleAddProduct, shoppingCart, handleCheckout, handleRemoveProduct}) {
    const [formData, setFormData] = useState({
        name: "", 
        email: "",
    });
    
    function handleChange(e) {
        setFormData({
            ...formData, 
            [e.target.name]: e.target.value,
        });
    }
    
    function handleSubmit(e) {
        e.preventDefault();
        fetch("http://localhost:9292/orders", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                ...formData, 
                user_id: "",
                product_id: "",
                status: "New",
                created_at: "today"
            }),
        })
        .then(r=>r.json())
        .then(data=>console.log(data))
    }
    
    return (
        <div className="container">
            <h3>Order Checkout</h3>
            <CartContainer />
                <form className="order-form" onSubmit={()=>handleSubmit()}>
                <input
                  type="text"
                  name="name"
                  onChange={handleChange}
                  value={formData.name}
                  placeholder="Your Name"
                  className="input-text"
                />
                <br />
                <input
                  type="text"
                  name="email"
                  onChange={handleChange}
                  value={formData.email}
                  placeholder="Email"
                  className="input-text"
                />
                <br />
                <input
                  type="submit"
                  name="submit"
                  value="Submit Order"
                  className="submit"
                />
            </form>
        </div> 
    )
}

export default OrderForm;

