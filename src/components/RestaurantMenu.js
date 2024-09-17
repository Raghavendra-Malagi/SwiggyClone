import React, { useEffect, useState } from "react";
import { MENU_API } from "../utils/constants";
import { useParams } from "react-router-dom";
import useRestauMenu from "../Hooks/useRestauMenu";
import ShimmerList from "../components/ShimmerList";
import RestaurantCategories from "../components/RestaurantCategories";

const RestaurantMenu = () => {
  const [selectIndex, setSelectIndex] = useState(-1);
  const { resId } = useParams();
  const restuMenu = useRestauMenu(resId);
  if (restuMenu == null) return <ShimmerList />;
  const { name, avgRatingString, costForTwoMessage, cuisines } =
    restuMenu.cards[2]?.card?.card?.info;
  const categories =
    restuMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (res) =>
        res?.card?.card?.["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div>
      <div className=" mt-4">
        <h1 className="text-center text-xl font-bold">
          {name} <span>{avgRatingString}</span>{" "}
        </h1>
        <p className="text-center">
          {cuisines.join(",")} - {costForTwoMessage}
        </p>

        {categories.map((res, index) => (
          <RestaurantCategories
            key={index}
            catData={res?.card?.card}
            itemChecked={index === selectIndex ? true : false}
            setSelectedIndex={() => setSelectIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
