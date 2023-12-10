// components/Cart.js
"use client";
import { useState, useEffect } from "react";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        // Fetch cart items from the WooCommerce API
        const response = await fetch(
          `https://dev-nextblog.pantheonsite.io/wp-json/wc/v3/cart?consumer_key=ck_f386bf4116f590e2875c66deb8cf33277b5ac52c&consumer_secret=cs_32ac47a1258500bfa4185b49529ce913f8c67d06`
        );

        if (response.ok) {
          const cartData = await response.json();
          setCartItems(cartData);
        } else {
          console.error("Failed to fetch cart items");
          setError("Failed to fetch cart items");
        }
      } catch (error) {
        console.error("An error occurred while fetching cart items:", error);
        setError("An error occurred while fetching cart items");
      }
    };

    fetchCart();
  }, []); // Empty dependency array means this effect runs once when the component mounts

  return (
    <div>
      <h2>Your Shopping Cart</h2>
      {error ? (
        <p>Error: {error}</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              {item.product_name} - Quantity: {item.quantity} - Price: $
              {item.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
