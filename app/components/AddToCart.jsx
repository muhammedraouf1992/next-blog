"use client";
// components/AddToCartButton.js

import { useState } from "react";

const AddToCartButton = ({ productId }) => {
  const [isAddingToCart, setAddingToCart] = useState(false);

  const addToCart = async () => {
    setAddingToCart(true);

    // Make a POST request to add the product to the cart
    const response = await fetch(
      `https://dev-nextblog.pantheonsite.io/wp-json/wc/v3/cart/add?consumer_key=ck_f386bf4116f590e2875c66deb8cf33277b5ac52c&consumer_secret=cs_32ac47a1258500bfa4185b49529ce913f8c67d06`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          product_id: productId,
          quantity: 1,
        }),
      }
    );

    if (response.ok) {
      console.log("Product added to cart successfully!");
      // Handle success, e.g., show a notification
    } else {
      console.error("Failed to add product to cart");
      // Handle failure, e.g., show an error message
    }

    setAddingToCart(false);
  };

  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 py-3 px-7"
      onClick={addToCart}
      disabled={isAddingToCart}
    >
      {isAddingToCart ? "Adding to Cart..." : "Add to Cart"}
    </button>
  );
};

export default AddToCartButton;
