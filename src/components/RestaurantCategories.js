import React from "react";
import ItemList from "../components/ItemList";
import { useState } from "react";

const RestaurantCategories = ({ catData, itemChecked, setSelectedIndex }) => {
  const { title, itemCards } = catData;
  const [checkItemList, setCheckItemList] = useState(false);
  const toggleAccordion = () => {
    setSelectedIndex();
    console.log(itemChecked);
    setCheckItemList(!checkItemList);
  };
  return (
    <div className="accordion__faq">
      <div
        onClick={toggleAccordion}
        className="w-[700px] m-auto flex items-center border-b-2 border-gray-300 justify-between cursor-pointer bg-slate-100 p-2 mt-2 shadow-xl"
      >
        <h1>
          {title}- ({itemCards.length})
        </h1>
        <span>🔽</span>
      </div>
      <div className="w-[700px] m-auto">
        {checkItemList === true ? <ItemList items={itemCards} /> : null}
      </div>
    </div>
  );
};

export default RestaurantCategories;
