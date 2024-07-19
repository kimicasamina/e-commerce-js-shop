import React from "react";
import { FaShoppingCart } from "react-icons/fa";

function Navbar() {
  return (
    <div className="w-full flex justify-between items-center fixed top-0 bg-primary p-4 h-14 ">
      <h1 className="text-3xl font-semibold text-white">Commerce.js</h1>
      <div className="bg-white/30 p-2 rounded-full cursor-pointer hover:bg-shadow-300/20 transition-all ease-in-out">
        <FaShoppingCart className="text-white font-inter " />
      </div>
    </div>
  );
}

export default Navbar;
