import React, { useEffect, useState } from "react";
import { API_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import Shimmer from "../components/Shimmer";

const Card = ({ resData }) => {
  const { name, cuisines, cloudinaryImageId, areaName, id, avgRating } =
    resData?.info;
  const { deliveryTime } = resData?.info.sla;

  return (
    <div className="m-2" id={id}>
      <Link to={"/restaurants/" + id}>
        <div className="w-[280px] rounded-lg shadow-lg ">
          <img
            src={
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
              cloudinaryImageId
            }
            alt="image"
            className="w-full h-[200px] object-cover rounded-xl"
          />
          <div className="p-2">
            <h1 className="text-xl font-bold">
              {name.substring(0, 20) + "..."}
            </h1>
            <h2>{cuisines.join(",").substring(0, 25) + "..."}</h2>
            <h3>{areaName}</h3>
            <h3>🚲 {deliveryTime} min</h3>
            <p>{avgRating}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
