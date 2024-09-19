import { useEffect, useRef, useState } from "react";
import Card, { AdCard } from "../components/Card";
import { API_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import { FaSearch } from "react-icons/fa";
import { AdCard } from "../components/Card";
import { NewCard } from "../components/Card";
const Cards = (props) => {
  const { title } = props;
  const [resList, setResList] = useState([]);
  const [name, setName] = useState("");
  const [copyList, setCopyList] = useState([]);
  // const [isSubmitted, setIsSubmitted] = useState(true);
  const [filteredList, setFilteredList] = useState([]);
  const inputRef = useRef();
  console.log(filteredList);
  const handleInputText = () => {
    setName(inputRef.current.value);
    // {
    //   name.length === 0 && alert("Hello");
    // }
  };
  useEffect(() => {
    setTimeout(() => {
      fetchData();
    }, 1000);
  }, []);
  const fetchData = async () => {
    const data = await fetch(API_URL);
    const result = await data.json();
    setResList(
      result.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setCopyList(
      result.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    setFilteredList(
      result.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  if (resList.length === 0) return <Shimmer />;
  const PromotedCard = AdCard(Card);
  return (
    <>
      <div>
        <form
          action=""
          className="flex "
          onSubmit={(e) => {
            e.preventDefault();
            const filteredData = copyList.filter((res) =>
              res.info.name.toLowerCase().includes(name.toLowerCase())
            );
            filteredData.length
              ? setFilteredList(filteredData)
              : alert(name + " item is not deliverable at the moment");
          }}
        >
          <input
            type="text"
            placeholder="Search"
            className="border-2"
            value={name}
            ref={inputRef}
            onChange={handleInputText}
          />
          <button className="flex items-center border-none outline-none p-2 bg-slate-400 text-white">
            <FaSearch className="inline-block mr-2" /> <span>Search</span>
          </button>
        </form>
        <button
          className="mt-2 border-none outline-none p-2 bg-slate-400 text-white"
          onClick={() => {
            let ratingData = filteredList.filter(
              (res) => res.info.avgRating > 4.5
            );
            setFilteredList(ratingData);
          }}
        >
          Search By Rating
        </button>
      </div>
      <div className="flex flex-wrap">
        {filteredList[0] && <NewCard resData={filteredList[0]} />}
        {filteredList.map((res, index) => (
          <PromotedCard key={index} resData={res} />
        ))}
      </div>
    </>
  );
};

export default Cards;
