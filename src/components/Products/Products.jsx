import React from "react";
import Product from "./Product";

const products = [
  {
    id: 1,
    name: "Shoes",
    price: 200,
    description: "Running shoes",
  },
  {
    id: 2,
    name: "Macbook",
    price: 1210,
    description: "Apple macbook.",
  },
];

function Products() {
  return (
    <div className="w-full">
      {products.map((product) => (
        <div
          className="w-full grid sm:grid-cols-2 md:grid-cols-3 gap-8"
          key={product.id}
        >
          <Product product={product} />
        </div>
      ))}
    </div>
  );
}

export default Products;
