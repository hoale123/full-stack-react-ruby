import React, { useState } from "react";

function ProductCard ({ product }) {

  const { id, name, image, description, price, likes } = product;
  const [addLikes, setAddLikes] = useState(likes);

  function handleLikes() {
    // handleAddLikes(product)
    setAddLikes((likes + 1));
    let numbers = likes + 1;
    fetch(`http://localhost:9001/products/${id}`, {
      method: "PATCH",
      headers: { 
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        likes: numbers,
      }),
    })
    .then(r=>r.json())
    .then((result)=> console.log("success:", result))
    .catch((error)=> {
      console.error("Error:", error);
    })
  }

  return (
    <li className="card">
      <img src={image} alt={"product name"} />
      <h4>{name}</h4>
      <p>{description}</p>
      <p>Price: ${price}</p>
      <button className="emoji-button favorite active" onClick={handleLikes}>✨ {addLikes} likes</button>

      {/* <div className="details" onClick={handleClick}>
        {star ? (
          <button className="emoji-button favorite active" onClick={handleLikes}>★ {addLikes} likes</button>
        ) : (

          <button className="emoji-button favorite">☆ {addLikes} likes</button>
        )}
      </div> */}
      
      {/* {favorite ? (
        <button className="unfavorite" onClick={handleRemove}>Remove from Favorites</button>
      ) : (
        <button className="favorite" onClick={handleFavorite}>Add to Favorites</button>
      )} */}
    
    </li>
  );
}

export default ProductCard ;