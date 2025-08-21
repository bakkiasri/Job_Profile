import React from "react";
import Amazon from "../assets/amazon.png";
import { BiUserPlus } from "react-icons/bi";
import { RiBuildingLine } from "react-icons/ri";
import { FiLayers } from "react-icons/fi";

function Card() {
  return (
    <div className="flex p-4 justify-start  items-start w-80 shadow-lg rounded-xl bg-white">
      <div className="flex flex-col justify-start  items-start gap-3 ">
        {/* Logo */}
        <div className="flex justify-between w-full ">
          <div>
            <img
              src={Amazon}
              alt="Amazon"
              className="w-16 flex h-16  text-start object-contain"
            />
          </div>
          <div className="bg-[#B0D9FF] h-fit p-2 text-black rounded-2xl">
            24h Ago
          </div>
        </div>
        <div className="flex w-full ">
          <h3 className="text-lg  text-start font-semibold">
            Full Stack Developer
          </h3>
        </div>
        {/* Job Title */}

        {/* Stats */}
        <div className="flex justify-between text-[#5A5A5A] items-center w-full  text-md font-medium">
          <span className="flex gap-1">
            <BiUserPlus className="  w-7  h-7 " />
            <p>1-3 Yrs Exp</p>
          </span>
          <span className="flex gap-1">
            <RiBuildingLine className="  w-7  h-7 " />
            <p>Onsite</p>
          </span>
          <span className="flex gap-1">
            <FiLayers className="  w-7  h-7 " />
            <p>12LPA</p>
          </span>
        </div>

        {/* Description */}
        <ul className="text-xs text-[#5A5A5A] ps-4 text-align:justify  list-disc list-outside text-left">
          <li>
            A user-friendly interface lets you browse stunning photos and videos
          </li>
          <li>
            Filter destinations based on interests and travel style, and create
            personalized
          </li>
        </ul>

        {/* Footer */}
        <div className="text-sm flex items-center  w-full justify-center font-bold text-gray-700">
          <button className="p-3 text-white w-full rounded-xl w-50 bg-[#00AAFF]">
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
