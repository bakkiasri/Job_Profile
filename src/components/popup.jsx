import React, { useState } from "react";
import { FaAnglesDown } from "react-icons/fa6";
import { FaAngleDoubleRight } from "react-icons/fa";

function Popup({ setOpen }) {
  const [date, setDate] = useState("");

  return (
    <div className="fixed inset-0 bg-transparent flex items-center justify-center z-50">
      {/* Desktop / Tablet Popup */}
      <div className="hidden sm:block flex-row bg-white rounded-2xl shadow-xl p-6 relative animate-fadeIn">
        <h2 className="text-center pb-0 lg:pb-4 text-4xl font-semibold mb-4">
          Create A Job
        </h2>

        {/* form */}
        <FormFields date={date} setDate={setDate} />

        {/* Close Button */}
        <button
          onClick={() => setOpen(false)}
          className="absolute top-2 cursor-pointer right-2 text-gray-600 hover:text-black"
        >
          ✕
        </button>
      </div>

      {/* Mobile Full Page */}
      <div className="block sm:hidden w-full h-full bg-white p-6 relative overflow-y-auto animate-fadeIn">
        <h2 className="text-center pb-0 text-3xl font-semibold mb-4">
          Create A Job
        </h2>

        {/* form */}
        <FormFields date={date} setDate={setDate} />

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

function FormFields({ date, setDate }) {
  return (
    <form className="space-y-5 ps-0 me-5 ">
      {/* First & Last Name */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-[#BCBCBC] hover:text-[#222222] text-sm font-medium mb-1">
            First Name
          </label>
          <input
            type="text"
            className="w-full border-1 rounded-lg border-[#BCBCBC] p-3 focus:outline-none focus:ring-1 focus:ring-[#222222]"
            placeholder="Enter your first name"
          />
        </div>
        <div>
          <label className="block text-[#BCBCBC] hover:text-[#222222] text-sm font-medium mb-1">
            Last Name
          </label>
          <input
            type="text"
            className="w-full border-1 rounded-lg border-[#BCBCBC] p-3 focus:outline-none focus:ring-1 focus:ring-[#222222]"
            placeholder="Enter your last name"
          />
        </div>
      </div>

      {/* Location & Job Type */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-[#BCBCBC] hover:text-[#222222] text-sm font-medium mb-1">
            Location
          </label>
          <select className="w-full border-1 rounded-lg border-[#BCBCBC] p-3 focus:outline-none focus:ring-1 focus:ring-[#222222]">
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
          <label className="block text-[#BCBCBC] hover:text-[#222222] text-sm font-medium mb-1">
            Job Type
          </label>
          <select className="w-full border-1 rounded-lg border-[#BCBCBC] p-3 focus:outline-none focus:ring-1 focus:ring-[#222222]">
            <option value="" disabled>
              Full-Time
            </option>
            <option value="part-time">Part-Time</option>
            <option value="contract">Contract</option>
            <option value="internship">Internship</option>
          </select>
        </div>
      </div>

      {/* Salary & Deadline */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-[#BCBCBC] hover:text-[#222222] text-sm font-medium mb-1">
            Salary
          </label>
          <div className="flex gap-5">
            <input
              type="text"
              className="w-full border-1 rounded-lg border-[#BCBCBC] p-3 focus:outline-none focus:ring-1 focus:ring-[#222222]"
              placeholder="0"
            />
            <input
              type="text"
              className="w-full border-1 rounded-lg border-[#BCBCBC] p-3 focus:outline-none focus:ring-1 focus:ring-[#222222]"
              placeholder="12,00,000"
            />
          </div>
        </div>
        <div className="relative">
          <label className="block text-[#BCBCBC] hover:text-[#222222] text-sm font-medium mb-1">
            Application deadline
          </label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="appearance-none w-full border-1 rounded-lg border-[#BCBCBC] p-3 focus:outline-none focus:ring-1 focus:ring-[#222222]"
          />
        </div>
      </div>

      {/* Job Description */}
      <div>
        <label className="block text-[#BCBCBC] hover:text-[#222222] text-sm font-medium mb-1">
          Job description
        </label>
        <textarea
          rows="4"
          className="w-full border-1 rounded-lg border-[#BCBCBC] p-3 focus:outline-none focus:ring-1 focus:ring-[#222222]"
          placeholder="Please share a description to let the candidate know more about the job role"
        ></textarea>
      </div>

      {/* Buttons */}
      <div className="flex justify-between items-center">
        <button
          type="submit"
          className="flex bg-transparent p-2 px-4 rounded-lg text-black border-1 border-black"
        >
          <p>Save Draft</p>
          <FaAnglesDown className="pt-2 h-5 w-5" />
        </button>
        <button
          type="submit"
          className="flex bg-[#00AAFF] p-2 px-4 rounded-lg text-white"
        >
          <p>Publish</p>
          <FaAngleDoubleRight className="pt-2 h-5 w-5" />
        </button>
      </div>
    </form>
  );
}

export default Popup;
