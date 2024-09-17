import React from "react";
import { MENU_IMAGE } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addItems } from "../store/cartSlice";
import { IoIosClose } from "react-icons/io";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();
  const carts = useSelector((store) => store.cart.items);
  console.log(carts);
  const handleAddToCart = (item) => {
    // console.log(item.card.info.name);
    alert("Added item " + item.card.info.name + " to the cart");
    dispatch(addItems(item));
  };

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
            <button
              onClick={() => handleAddToCart(item)}
              className="outline-none  border-2 border-b-gray-400 p-2 bg-white rounded-lg hover:bg-slate-200 absolute bottom-[10px] font-bold uppercase left-[50%] translate-x-[-50%] w-[80%]"
            >
              Add
            </button>
          </div>
        </div>
      ))}
      {/* <div className="absolute top-[50%] left-[50%] bg-red-500 w-[500px] h-[300px] translate-x-[-50%] translate-y-[-50%]">
        <IoIosClose className="text-3xl" />
        <div>{data?.card?.info?.description}</div>
      </div> */}
    </div>
  );
};

export default ItemList;
