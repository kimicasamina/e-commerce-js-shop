import React from "react";
import Product from "./Product";

// const products = [
//   {
//     id: 1,
//     name: "Shoes",
//     price: 200,
//     description: "Running shoes",
//   },
//   {
//     id: 2,
//     name: "Macbook",
//     price: 1210,
//     description: "Apple macbook.",
//   },
// ];

function Products({ products, onAddToCart }) {
  return (
    <div className="w-full mt-14 pt-4 p-8 bg-background">
      <div className="w-full flex flex-wrap gap-x-8 gap-y-8">
        {products.map((product) => (
          <div key={product.id}>
            <Product product={product} onAddToCart={onAddToCart} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
