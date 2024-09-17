import React, { useRef, useState } from "react";
import CardsBox from "./Cardsbox";
import { FaSearch } from "react-icons/fa";
import Shimmer from "../components/Shimmer";

const Body = () => {
  // const arr = useState(0);
  // const count = arr[0];
  // const setCount = arr[1];
  // const handleCount = () => {
  //   setCount(count + 1);
  // };
  // const [name, setName] = useState("");
  // const inputRef = useRef();
  // const handleInputText = (e) => {
  //   console.log(inputRef.current.value);
  //   setName(inputRef.current.value);
  // };
  // console.log("rendered");
  return (
    <>
      <div className="p-5">
        <div>
          {/* <h1>Body</h1>
          <button
            onClick={handleCount}
            className="p-3 bg-black text-white rounded-lg"
          >
            Inc Count
          </button>
          <p>count = {count}</p>
          <input
            type="text"
            placeholder="Enter Name"
            ref={inputRef}
            // value={name}
            onChange={(e) => handleInputText(e)}
          />
          <p>{name}</p> */}
        </div>
        <CardsBox />
      </div>
    </>
  );
};

export default Body;
