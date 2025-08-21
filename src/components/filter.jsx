import React from "react";
import { CiSearch } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { PiUserSoundThin } from "react-icons/pi";

function Filter() {
  return (
    <div className="flex p-3 justify-between items-center">
      <div className="flex">
        <CiSearch />
        <input
          type="text"
          placeholder="Enter your name"
          class="border border-gray-300 rounded-lg p-2"
        />
      </div>
      <div className="flex">
        <CiLocationOn />
        <input
          type="text"
          placeholder="Enter your name"
          class="border border-gray-300 rounded-lg p-2"
        />
      </div>
      <div className="flex">
        <PiUserSoundThin />
      </div>
      <div className="flex">4</div>
    </div>
  );
}

export default Filter;
