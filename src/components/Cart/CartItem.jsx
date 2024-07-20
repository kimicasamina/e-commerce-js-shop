import React from "react";
import { FaCirclePlus } from "react-icons/fa6";
import { FaCircleMinus } from "react-icons/fa6";

function CartItem({ item }) {
  return (
    <div className="bg-white h-[350px] w-56 flex justify-center flex-col border rounded-md shadow-lg gap-y-2">
      <div className="h-32">
        <img
          src={item.image.url}
          alt=""
          className="w-full h-full object-cover overflow-hidden"
        />
      </div>
      <div
        className="flex-1 flex flex-row items-center justify-between gap-y-2 p-2 overflow-y-scroll"
        style={{ scrollbarWidth: "none" }}
      >
        <span className="text-xl">{item.name}</span>
        <span className="">{item.line_total.formatted_with_symbol}</span>
      </div>
      <div className="flex gap-x-2 items-center justify-between p-2">
        <button className="btn btn-sm">
          <FaCircleMinus className="w-6 h-6" />
        </button>
        <span className="">{item.quantity}</span>
        <button className="btn btn-sm">
          <FaCirclePlus className="w-6 h-6" />
        </button>
        <button className="btn btn-sm">Remove</button>
      </div>
    </div>
  );
}

export default CartItem;
