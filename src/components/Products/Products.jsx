import React from "react";
import Product from "./Product";

function Products({ products, onAddToCart }) {
  return (
    <div className="h-full py-8 px-4">
      <div className="w-full flex flex-wrap justify-center gap-x-8 gap-y-8">
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
