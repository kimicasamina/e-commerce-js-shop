import React from "react";
import { FaShoppingCart } from "react-icons/fa";

function Navbar({ totalItems }) {
  console.log("TOTAL CART ITEMS:", totalItems);

  return (
    <div className="w-full flex justify-between items-center fixed top-0 bg-primary p-4 h-14 ">
      <h1 className="text-3xl font-semibold text-white">Commerce.js</h1>
      <button className="relative bg-white/30 p-2 rounded-full cursor-pointer hover:bg-shadow-300/20 transition-all ease-in-out">
        <FaShoppingCart className="text-white font-inter " />
        <div className="absolute flex items-center justify-center w-6 h-6 text-xs font-semibold text-white bg-alert border-2 border-primary rounded-full -top-2 -end-2">
          {totalItems ? totalItems : 0}
        </div>
      </button>
    </div>
  );
}

export default Navbar;
