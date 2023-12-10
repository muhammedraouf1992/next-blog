import React from "react";
import AddToCartButton from "../components/AddToCart";

const Products = async () => {
  const res = await fetch(
    "https://dev-nextblog.pantheonsite.io/wp-json/wc/v3/products?consumer_key=ck_f386bf4116f590e2875c66deb8cf33277b5ac52c&consumer_secret=cs_32ac47a1258500bfa4185b49529ce913f8c67d06"
  );
  const products = await res.json();
  return (
    <div>
      {products.map((p) => (
        <>
          <h1>{p.name}</h1>
          <p>{p.price}</p>
          <AddToCartButton productId={p.id} />
        </>
      ))}
    </div>
  );
};

export default Products;
