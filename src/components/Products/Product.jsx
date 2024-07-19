import React from "react";
import { commerce } from "../../lib/commerce";
import { FaShoppingCart } from "react-icons/fa";

function Product({ product, onAddToCart }) {
  return (
    <div className="bg-white h-[350px] w-56 flex justify-center flex-col border rounded-md shadow-lg gap-y-2">
      <div className="h-40">
        <img
          src={product.image.url}
          alt=""
          className="w-full h-full object-cover overflow-hidden"
        />
      </div>
      <div
        className="flex-1 flex flex-col justify-start gap-y-2 p-2 overflow-y-scroll"
        style={{ scrollbarWidth: "none" }}
      >
        <h2 className="text-2xl">{product.name}</h2>
        <p className="">{product.price.formatted_with_symbol}</p>
        <p
          className=""
          dangerouslySetInnerHTML={{ __html: product.description }}
        ></p>
      </div>
      <button
        className="justify-self-end self-end btn btn-sm bg-secondary hover:bg-secondary/50 mb-2 mr-2"
        onClick={(e) => onAddToCart(product.id, 1)}
      >
        <FaShoppingCart className="text-white" />
      </button>
      {/* <div className="flex flex-col w-full">
      </div> */}
    </div>
  );
}

export default Product;
