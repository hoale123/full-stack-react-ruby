import React, { useState, useEffect } from "react";

function Products() {
    const [products, setProducts] = useState([]);
    // I think this is what we need to do to create state for our orders page/shopping cart 
    // const [orders, setOrders] = useState([]);

    //moved to Header.js
    // const [search, setSearch] = useState("");
    // const [sortBy, setSortBy] = useState("newest");


    useEffect(() => {
        fetch("http://localhost:3001/products")
        .then(r=>r.json())
        .then(data, setProducts(data))
    }, [])

// ***** Moved to Header.js
//    function handleSearch(searchText) {
//         setSearch(searchText);
//    }

//    function handleSort(dropdown) {
//        setSortBy(dropdown)
//    }

//    const sortedProducts = [...products].sort((a, b) => {
//     if (sortBy === "name") {
//       return a.name - b.name;
//     } else if (sortBy === "price"){
//         return a.price - b.price;
//     } else {
//         return a.id - b.id;
//     }
//   });

//     const updatedListings = sortedProducts.filter((product)=> product.name.toLowerCase().includes(search.toLowerCase()) || product.description.toLowerCase().includes(search.toLowerCase()));
    // ***** 


// I think this is how we will add products to our order page/cart 
//    function handleAddToOrder(productToAdd) {
//         const productInFavorites = orders.find(
//         (product) => product.id === productToAdd.id
//         );
//         if (!productInFavorites) {
//             setFavorites([...orders, productToAdd]);
//         }
//     }

//     function handleRemoveFavorite(productToRemove) {
//         setOrders((orders)=> orders.filter((product)=> product.id !== productToRemove.id));
//     }


    return (
        <div>
            <h2>Shop All</h2>
            <Search  handleSearch={handleSearch} />
            <Filter sortBy={sortBy} handleSort={handleSort}  />
            <MalaListings 
                products={updatedListings} 
                // handleAddLikes={handleAddLikes} 
                // handleAddFavorite={handleAddFavorite} 
                // andleRemoveFavorite={handleRemoveFavorite} 
            />
            {/* <Favorites products={orders} handleRemoveFavorite={handleRemoveFavorite} /> */}
        </div>
    )
}


export default Products;
