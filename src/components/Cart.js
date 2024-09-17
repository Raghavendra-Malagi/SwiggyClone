import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CartItems from "./CartItems";
import { removeItems } from "../store/cartSlice";
// import ItemList from "./ItemList";

const Cart = () => {
  const itemCards = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  // const styleCard = {
  //   backgroundColor: "Red",
  //   color: "white",
  // };
  const hadleCartClear = () => {
    dispatch(removeItems());
  };
  return (
    <div className="text-center">
      <h1
        // style={{
        //   backgroundColor: "red",
        //   color: "white",
        //   fontSize: "28px",
        //   textAlign: "center",
        //   marginTop: "15px",
        // }}
        className="mt-5 text-3xl font-bold"
      >
        Cart
      </h1>
      <div className=" mt-4">
        {itemCards.length === 0 ? (
          "Your cart is empty"
        ) : (
          <button
            onClick={hadleCartClear}
            className="border-none outline-none p-2 bg-red-700 text-white"
          >
            Clear Cart
          </button>
        )}
      </div>
      <div className="w-[900px] m-auto">
        <CartItems items={itemCards} />
      </div>
    </div>
  );
};

export default Cart;
