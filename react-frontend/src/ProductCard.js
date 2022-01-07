import React, { useState } from "react";

function ProductCard ({ product, handleAddProduct }) {

  const { id, name, image, description, price, likes } = product;
  const [addLikes, setAddLikes] = useState(likes);

  function handleLikes() {
    // setAddLikes((addLikes) => addLikes +1);
    // let numbers = likes + 1;
    fetch(`http://localhost:9292/products/${id}`, {
      method: "PATCH",
      headers: { 
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        likes: product.likes += 1,
      }),
    })
    .then(r=>r.json())
    .then((result)=> console.log("success:", result))
    .catch((error)=> {
      console.error("Error:", error);
    })
    .then(setAddLikes((likes) => likes +1))
  }

  // function handleAdd(){
  //   onClickProduct(product)
  // }

  return (
    <li className="card">
      <img src={image} alt={"product name"} />
      <h4>{name}</h4>
      <p>{description}</p>
      <p>Price: ${price}</p>
      <button className="emoji-button favorite active" onClick={handleLikes}>✨ {addLikes} likes</button>
      <button onClick={() => handleAddProduct(product)} className="addToCart">Add</button>
    </li>
  );
}

export default ProductCard ;