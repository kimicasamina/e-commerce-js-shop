import React from "react";
import { commerce } from "../../lib/commerce";

function Product({ product }) {
  return (
    <div className="flex-1 flex justify-center flex-col">
      <img src="" alt="" className="" />
      <h2 className="">{product.name}</h2>
      <p className="">${product.price}</p>
      <button className="btn btn-sm btn-tertiary">Add to cart</button>
    </div>
  );
}

export default Product;
