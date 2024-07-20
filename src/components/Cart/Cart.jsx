import React from "react";
import CartItem from "./CartItem";

function Cart({ cart }) {
  const EmptyCart = () => <p>You have no items in your shopping cart.</p>;

  const FilledCart = () => (
    <>
      <div className="w-full h-full flex flex-col justify-between items-center py-8">
        <div className="w-full flex-1 flex flex-wrap gap-x-8 gap-y-8 overflow-y-scroll py-8">
          {cart?.line_items.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>
        <div className="flex w-full justify-between items-center">
          <h4 className="text-2xl">
            Subtotal: {cart?.subtotal.formatted_with_symbol}
          </h4>
          <div className="flex gap-x-4">
            <button className="btn btn-sm bg-secondary text-white">
              EMPTY CART
            </button>
            <button className="btn btn-sm bg-primary text-white">
              CHECKOUT
            </button>
          </div>
        </div>
      </div>
    </>
  );

  if (!cart?.line_items.length === false) {
    <h1 className="">Loading...</h1>;
  }

  return (
    <div className="h-full py-8 px-4">
      <h2 className="text-2xl font-semibold">Your Shopping Cart</h2>
      {!cart?.line_items.length ? <EmptyCart /> : <FilledCart />}
    </div>
  );
}

export default Cart;
