import React, { useState } from "react";
import logo from "../assets/Clip.png";
import Popup from "./popup"; // make sure the file is Popup.js

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="shadow-sm bg-white px-10 py-5 rounded-2xl flex justify-between items-center">
      {/* Left Side */}
      <div className="flex text-sm justify-center items-center gap-10">
        <div>
          <img src={logo} alt="Logo" className="h-10" />
        </div>
        <div className="p-2 px-5 hover:shadow-xl hover:rounded-xl cursor-pointer hover:scale-110 transition-transform">
          Home
        </div>
      </div>

      {/* Right Side - Button */}
      <div className="text-sm font-bold">
        <button
          onClick={() => setOpen(true)}
          className="relative group  w-30 cursor-pointer bg-gradient-to-b from-[#A128FF] to-[#6100AD] text-white px-4 py-2 rounded-2xl shadow-lg hover:scale-110 transition-transform"
        >
          <span className="block transition-transform duration-300 group-hover:-translate-y-full ">
            Create Job
          </span>
          <span className="block absolute  transition-transform duration-300 group-hover:-translate-y-full">
            Login
          </span>
        </button>
      </div>
      {open && <Popup setOpen={setOpen} />}
      {/* Popup */}
    </nav>
  );
}

export default Navbar;
