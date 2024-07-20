import React from "react";
import { useLocation, Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { FaStore } from "react-icons/fa6";
import { FaHouse } from "react-icons/fa6";

function Navbar({ totalItems }) {
  console.log("TOTAL CART ITEMS:", totalItems);
  const location = useLocation();

  return (
    <div className="w-full flex justify-between items-center fixed top-0 bg-primary p-4 h-14 ">
      <div className="flex gap-x-2 items-center">
        <FaStore className="text-2xl text-white" />
        <h1 className="text-3xl font-semibold text-white">commerce.js</h1>
      </div>

      {location.pathname === "/" ? (
        <Link to={"/cart"}>
          <button className="relative bg-white/30 p-2 rounded-full cursor-pointer hover:bg-shadow-300/20 transition-all ease-in-out">
            <FaShoppingCart className="text-white font-inter " />
            <div className="absolute flex items-center justify-center w-6 h-6 text-xs font-semibold text-white bg-alert border-2 border-primary rounded-full -top-2 -end-2">
              {totalItems ? totalItems : 0}
            </div>
          </button>
        </Link>
      ) : (
        <Link to="/" className="text-white flex items-center gap-x-2">
          <FaHouse />
          <span className="">Home</span>
        </Link>
      )}
    </div>
  );
}

export default Navbar;
