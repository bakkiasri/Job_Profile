import React from "react";
import logo from "../assets/Clip.png";
function Navbar() {
  return (
    <nav className="px-10 py-5 shadow-sm rounded-4xl  flex justify-between items-center">
      <div className="flex text-sm justify-center items-center  flex gap-10">
        <div>
          <img src={logo} className="h-10" />
        </div>
        <div className=" p-2 px-5 hover:shadow-xl hover:rounded-xl cursor-pointer hover:scale-115 transition-transform ">
          Home
        </div>
      </div>
      <div className="text-sm font-bold">
        <button className="relative group w-30 bg-gradient-to-b from-[#A128FF] to-[#6100AD] text-white px-4  py-2 rounded-2xl shadow-lg hover:scale-115 transition-transform">
          <span className="block transition-transform duration-300 group-hover:-translate-y-full">
            Create Job
          </span>
          <span className="block absolute top-full transition-transform duration-300 group-hover:-translate-y-full">
            Login
          </span>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
