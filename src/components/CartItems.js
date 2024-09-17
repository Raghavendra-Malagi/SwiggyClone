import React from "react";
import { MENU_IMAGE } from "../utils/constants";

const CartItems = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <div
          className="flex mt-3 mb-3 justify-between border-b-2 p-3 border-black"
          key={item.card.info.id}
        >
          <div>
            <h1 className="text-xl font-bold">{item.card.info.category}</h1>
            <p>₹{item.card.info.price / 100}</p>
            <p className="w-[450px]">
              {item.card.info.description.length < 100
                ? item.card.info.description
                : item.card.info.description.substring(0, 100) + "..."}
            </p>
          </div>
          <div className=" relative">
            {item.card.info.imageId ? (
              <img
                className="w-[150px] h-[150px] object-cover"
                src={MENU_IMAGE + item.card.info.imageId}
                alt={item.card.info.category}
              />
            ) : (
              <img className="w-[150px] h-[100px] object-cover invisible" />
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartItems;
