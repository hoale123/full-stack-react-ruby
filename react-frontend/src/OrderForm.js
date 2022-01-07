import React, { useState } from "react";
import CartContainer from "./CartContainer";
import Button from "./Button";

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
        const newOrder = {
            ...formData, 
            user_id: "",
            product_id: "",
            status: "New",
            created_at: "today"
    };
    }
    
    return (
        <div className="container">
            <h3>Order Checkout</h3>
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


// import React, { useState } from "react";
// import Button from "./Button";

// function OrderForm({ handleCheckout })  {
//     const [formData, setFormData] = useState({
//         name: "", 
//         email: "",
//     });
    
//     function handleChange(e) {
//         setFormData({
//             ...formData, 
//             [e.target.name]: e.target.value,
//         });
//     }
    
//     function handleSubmit(e) {
//         e.preventDefault();
//         const newOrder = {
//             ...formData, 
//             user_id: "",
//             product_id: "",
//             status: "New",
//             created_at: "today"
//     };
//     }
    
//     return (
//         <div className="container">
//             <h3>Order Checkout</h3>
//                 <form className="order-form" onSubmit={()=>handleSubmit()}>
//                 <input
//                   type="text"
//                   name="name"
//                   onChange={handleChange}
//                   value={formData.name}
//                   placeholder="Your Name"
//                   className="input-text"
//                 />
//                 <br />
//                 <input
//                   type="text"
//                   name="email"
//                   onChange={handleChange}
//                   value={formData.email}
//                   placeholder="Email"
//                   className="input-text"
//                 />
//                 <br />
//                 <input
//                   type="submit"
//                   name="submit"
//                   value="Submit Order"
//                   className="submit"
//                 />
//                 <Button>Submit Order</Button>
//             </form>
//         </div> 
//     )
// }


// export default OrderForm;
