import React from "react";

function Popup({ setOpen }) {
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
                <option value="">Full-Time</option>
                <option value="part-time">Part-Time</option>
                <option value="contract">Contract</option>
                <option value="internship">Internship</option>
              </select>
            </div>
            <div>
              <label className="block text-[#BCBCBC] hover:text-[#222222] focus:font-bold text-sm font-medium mb-1">
                Job Type
              </label>
              <select className="w-full border-1 rounded-lg hover:text-[#222222] hover:border-[#222222] border-[#BCBCBC] p-3 focus:outline-none focus:ring-1 focus:ring-[#222222]">
                <option value="">Full-Time</option>
                <option value="part-time">Part-Time</option>
                <option value="contract">Contract</option>
                <option value="internship">Internship</option>
              </select>
            </div>
          </div>

          {/* Mobile Number */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-[#BCBCBC] hover:text-[#222222] focus:font-bold text-sm font-medium mb-1">
                Salary
              </label>
              <div className="flex gap-5">
                <input
                  type="text"
                  className="w-full border-1 rounded-lg hover:text-[#222222] hover:border-[#222222] border-[#BCBCBC] p-3 focus:outline-none focus:ring-1 focus:ring-[#222222]"
                  placeholder="Enter your first name"
                />
                <input
                  type="text"
                  className="w-full border-1 rounded-lg hover:text-[#222222] hover:border-[#222222] border-[#BCBCBC] p-3 focus:outline-none focus:ring-1 focus:ring-[#222222]"
                  placeholder="Enter your first name"
                />
              </div>
            </div>
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
          </div>
          {/* What can we help you with? */}
          <div>
            <label className="block text-[#BCBCBC] hover:text-[#222222] focus:font-bold text-sm font-medium mb-1">
              What can we help you with?
            </label>
            <textarea
              rows="4"
              className="w-full border-1 rounded-lg hover:text-[#222222] hover:border-[#222222] border-[#BCBCBC] p-3 focus:outline-none focus:ring-1 focus:ring-[#222222]"
              placeholder="Describe your query"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className=" bg-[#D66026]  text-white text-lg    px-6 py-1 "
          >
            Enquiry
          </button>
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
