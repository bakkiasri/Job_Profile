import React from "react";
import { useState } from "react";
import { FaAnglesDown } from "react-icons/fa6";
import { FaAngleDoubleRight } from "react-icons/fa";

function Popup({ setOpen }) {
  const [date, setDate] = useState("");

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="flex-row bg-white rounded-2xl shadow-xl p-6  relative animate-fadeIn">
        <h2 className="text-center pb-4 text-4xl font-semibold mb-4">
          Create A Job
        </h2>
        <form className="space-y-5 ps-0 me-5 ">
          {/* First & Last Name */}
          <div className="grid grid-cols-1  md:grid-cols-2 gap-4">
            <div>
              <label className="block text-[#BCBCBC] hover:text-[#222222] focus:font-bold text-sm font-medium mb-1">
                First Name
              </label>
              <input
                type="text"
                className="w-full border-1 rounded-lg hover:text-[#222222] hover:border-[#222222] border-[#BCBCBC] p-3 focus:outline-none focus:ring-1 focus:ring-[#222222]"
                placeholder="Enter your first name"
              />
            </div>
            <div>
              <label className="block text-[#BCBCBC] hover:text-[#222222] focus:font-bold text-sm font-medium mb-1">
                Last Name
              </label>
              <input
                type="text"
                className="w-full border-1 rounded-lg hover:text-[#222222] hover:border-[#222222] border-[#BCBCBC] p-3 focus:outline-none focus:ring-1 focus:ring-[#222222]"
                placeholder="Enter your first name"
              />
            </div>
          </div>

          <div className="grid grid-cols-1  md:grid-cols-2 gap-4">
            <div>
              <label className="block text-[#BCBCBC] hover:text-[#222222] focus:font-bold text-sm font-medium mb-1">
                Location
              </label>
              <select className="w-full border-1 rounded-lg hover:text-[#222222] hover:border-[#222222] border-[#BCBCBC] p-3 focus:outline-none focus:ring-1 focus:ring-[#222222]">
                <option value="" disabled>
                  Choose preferred location
                </option>
                <option value="Chennai">Chennai</option>
                <option value="Madurai">Madurai</option>
                <option value="Coimbatore">Coimbatore</option>
                <option value="Trichy">Trichy</option>
              </select>
            </div>
            <div>
              <label className="block text-[#BCBCBC] hover:text-[#222222] focus:font-bold text-sm font-medium mb-1">
                Job Type
              </label>
              <select className="w-full border-1 rounded-lg hover:text-[#222222] hover:border-[#222222] border-[#BCBCBC] p-3 focus:outline-none focus:ring-1 focus:ring-[#222222]">
                <option value="" disabled>
                  Full-Time
                </option>
                <option value="part-time">Part-Time</option>
                <option value="contract">Contract</option>
                <option value="internship">Internship</option>
              </select>
            </div>
          </div>

          {/* Mobile Number */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block focus:text-[#222222] text-[#BCBCBC] hover:text-[#222222] focus:font-bold text-sm font-medium mb-1">
                Salary
              </label>
              <div className="flex gap-5">
                <input
                  type="text"
                  className="w-full border-1 rounded-lg hover:text-[#222222] hover:border-[#222222] border-[#BCBCBC] p-3 focus:outline-none focus:ring-1 focus:ring-[#222222]"
                  placeholder="0"
                />
                <input
                  type="text"
                  className="w-full border-1 rounded-lg hover:text-[#222222] hover:border-[#222222] border-[#BCBCBC] p-3 focus:outline-none focus:ring-1 focus:ring-[#222222]"
                  placeholder="12,00,000"
                />
              </div>
            </div>
            <div className="relative">
              <label className="block text-[#BCBCBC] hover:text-[#222222] focus:font-bold text-sm font-medium mb-1">
                Application deadline
              </label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="appearance-none w-full border-1  rounded-lg hover:text-[#222222] hover:border-[#222222] border-[#BCBCBC] p-3 focus:outline-none focus:ring-1 focus:ring-[#222222]"
              />{" "}
            </div>
          </div>
          {/* What can we help you with? */}
          <div>
            <label className="block text-[#BCBCBC] hover:text-[#222222] focus:font-bold text-sm font-medium mb-1">
              Job description
            </label>
            <textarea
              rows="4"
              className="w-full border-1 rounded-lg hover:text-[#222222] hover:border-[#222222] border-[#BCBCBC] p-3 focus:outline-none focus:ring-1 focus:ring-[#222222]"
              placeholder="Please share a description to let the candidate know more about the job role"
            ></textarea>
          </div>
          <div className="flex justify-between items-center">
            <button
              type="submit"
              className="flex bg-transparent p-2 px-4 rounded-lg text-black border-1 border-black "
            >
              <p>Save Draft</p>
              <FaAnglesDown className="pt-2 h-5 w-5" />
            </button>
            <button
              type="submit"
              className="flex bg-[#00AAFF] p-2 px-4 rounded-lg text-white border-none border-black "
            >
              <p>Publish</p>
              <FaAngleDoubleRight className="pt-2 h-5 w-5" />
            </button>
          </div>
          {/* Submit Button */}
        </form>
        {/* Close Button */}
        <button
          onClick={() => setOpen(false)}
          className="absolute top-2 cursor-pointer right-2 text-gray-600 hover:text-black"
        >
          ✕
        </button>
      </div>
    </div>
  );
}

export default Popup;
