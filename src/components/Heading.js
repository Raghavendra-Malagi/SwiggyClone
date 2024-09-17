import React, { useState } from "react";
import { Logo } from "../utils/constants";
import { FaSearch } from "react-icons/fa";
import { MdCorporateFare } from "react-icons/md";
import { BiSolidOffer } from "react-icons/bi";
import { IoHelpBuoyOutline } from "react-icons/io5";
import { PiUserThin } from "react-icons/pi";
import { CiShoppingCart } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";
import { IoIosClose } from "react-icons/io";
import { useSelector } from "react-redux";

const Heading = () => {
  const cartItemsCount = useSelector((store) => store.cart.items);
  const [slide, setSlide] = useState(false);
  const handleSlide = () => {
    setSlide(!slide);
  };

  return (
    <div>
      {slide && (
        <>
          <div
            className={
              slide &&
              "active w-[500px] h-[1000px] bg-white fixed top-0 z-[100001] transition-all"
            }
          >
            <div className="pt-20">
              <IoIosClose
                onClick={handleSlide}
                className="font-bold text-2xl ml-4 cursor-pointer"
              />
              <h1 className="text-center font-bold text-3xl ">Search text</h1>
            </div>
          </div>
          <div
            onClick={handleSlide}
            className="fixed top-0 left-0 right-0 bottom-0 bg-slate-200 opacity-40 z-[10000] overflow-hidden"
          ></div>
        </>
      )}
      <div className="w-full  shadow-lg">
        <div className="p-2 flex flex-row items-center justify-between">
          <Link to="/">
            <img src={Logo} alt="" className="w-[100px] cursor-pointer" />
          </Link>

          <div className="flex flex-row" onClick={handleSlide}>
            <span className="inline-block cursor-pointer  mr-3 underline text-[#3d4152] hover:text-[#ff5200] font-bold">
              Other
            </span>
            <span className=" cursor-pointer flex items-center text-xs text-[#686b78] ">
              Bengaluru, Karnataka, India{" "}
              <span className=" text-[#ff5200] text-lg">
                <IoIosArrowDown />
              </span>
            </span>
          </div>
          <div>
            <p className="flex items-center">
              <span className="mr-3">
                <MdCorporateFare />
              </span>
              <p className=" cursor-pointer  text-[#3d4152] hover:text-[#ff5200] font-bold">
                Swiggy Corporate
              </p>
            </p>
          </div>

          <div>
            <ul className="flex justify-center items-center text-right">
              <li className=" p-4 cursor-pointer text-[#3d4152] hover:text-[#ff5200] font-bold">
                <Link to="/offers" className="flex items-center">
                  <span className="mr-3">
                    <BiSolidOffer />
                  </span>{" "}
                  Offers <sup className="text-[#ffa700]">New</sup>
                </Link>
              </li>
              <li className=" p-4 cursor-pointer  text-[#3d4152] hover:text-[#ff5200] font-bold">
                <Link to="/help" className="flex items-center">
                  <span className="mr-3">
                    <IoHelpBuoyOutline />
                  </span>
                  Help
                </Link>
              </li>
              <li className="p-4 cursor-pointer  text-[#3d4152] hover:text-[#ff5200] font-bold">
                <Link to="/signup" className="flex items-center">
                  <span className="mr-3">
                    <PiUserThin />
                  </span>
                  Sign In
                </Link>
              </li>

              <li className="p-4 cursor-pointer  text-[#3d4152] hover:text-[#ff5200] font-bold relative">
                <Link to="/cart" className="flex items-center ">
                  <span className="mr-3 relative">
                    <span className="bg-red-800 p-1 text-sm text-center w-[25px] h-[25px] absolute rounded-full bottom-[50%] left-[50%] text-white">
                      {cartItemsCount.length}
                    </span>
                    <CiShoppingCart />
                  </span>
                  Cart
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heading;
