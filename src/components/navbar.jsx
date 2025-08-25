import React, { useState } from "react";
import logo from "../assets/Clip.png";
import Popup from "./popup"; // ensure correct file path

function Navbar({ setOpen }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="shadow-sm bg-white px-10 py-4 rounded-2xl flex justify-between items-center relative">
      {/* Left Side */}
      <div className="flex items-center gap-4  md:gap-10">
        <img src={logo} alt="Logo" className="h-8 sm:h-10" />

        {/* Desktop Menu */}
        <div className="flex hidden md:block gap-6 text-sm">
          <div className="p-2 px-5 hover:shadow-xl hover:rounded-xl cursor-pointer hover:scale-110 transition-transform">
            Home
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="hidden md:block text-sm font-bold">
        <button
          onClick={() => setOpen(true)}
          className="relative group w-28 sm:w-32 cursor-pointer bg-gradient-to-b from-[#A128FF] to-[#6100AD] text-white px-4 py-2 rounded-2xl shadow-lg hover:scale-110 transition-transform overflow-hidden"
        >
          <span className="block transition-transform duration-300 group-hover:-translate-y-full">
            Create Job
          </span>
          <span className="block absolute inset-0 flex items-center justify-center transition-transform duration-300 translate-y-full group-hover:translate-y-0">
            Login
          </span>
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="block sm:hidden p-2 rounded-lg hover:bg-gray-100"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {/* Hamburger Icon */}
        <div className="space-y-1">
          <div className="w-6 h-0.5 bg-black"></div>
          <div className="w-6 h-0.5 bg-black"></div>
          <div className="w-6 h-0.5 bg-black"></div>
        </div>
      </button>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="absolute top-full right-0 mt-2 w-40 bg-white rounded-xl shadow-lg p-4 flex flex-col gap-4 md:hidden">
          <div className="cursor-pointer hover:text-purple-600">Home</div>
          <button
            onClick={() => {
              setOpen(true);
              setMenuOpen(false);
            }}
            className="bg-gradient-to-b from-[#A128FF] to-[#6100AD] text-white px-4 py-2 rounded-2xl shadow-lg"
          >
            Create Job
          </button>
        </div>
      )}

      {/* Popup */}
    </nav>
  );
}

export default Navbar;
