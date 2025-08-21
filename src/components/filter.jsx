import React, { useState } from "react";
import { CiSearch, CiLocationOn } from "react-icons/ci";
import { PiUserSoundThin } from "react-icons/pi";
import { Range } from "react-range";

function Filter() {
  const [values, setValues] = useState([50000, 80000]); // initial salary range

  return (
    <div className="flex text-[#686868] py-8 justify-around items-center">
      {/* Search Input */}
      <div className="flex gap-6 w-80 border-r-2 border-[#EAEAEA] pr-4">
        <CiSearch className="h-7 w-7 font-semibold" />
        <input
          type="text"
          placeholder="Search by job title, role"
          className="border-none outline-none bg-transparent placeholder-gray-400 text-base w-full"
        />
      </div>

      {/* Location Input */}
      <div className="flex gap-6 w-80 border-r-2 border-[#EAEAEA] pr-4">
        <CiLocationOn className="h-7 w-7 font-semibold" />
        <input
          type="text"
          placeholder="Search by location"
          className="border-none outline-none bg-transparent placeholder-gray-400 text-base w-full"
        />
      </div>

      {/* Job Type Select */}
      <div className="flex gap-6 w-80 border-r-2 border-[#EAEAEA] pr-4">
        <PiUserSoundThin className="h-7 w-7 font-semibold" />
        <select className="border-none outline-none bg-transparent text-base w-full">
          <option value="">Full-Time</option>
          <option value="part-time">Part-Time</option>
          <option value="contract">Contract</option>
          <option value="internship">Internship</option>
        </select>
      </div>

      {/* Salary Range */}
      <div className="flex flex-col gap-3 w-80 text-black">
        <div className="flex justify-between text-sm mb-2">
          <p className="font-medium">Salary Per Month</p>
          <p>
            ₹{(values[0] / 1000).toFixed(0)}k - ₹{(values[1] / 1000).toFixed(0)}
            k
          </p>
        </div>

        <Range
          step={1000}
          min={20000}
          max={120000}
          values={values}
          onChange={(vals) => setValues(vals)}
          renderTrack={({ props, children }) => (
            <div
              {...props}
              className="h-1 w-full rounded"
              style={{
                background: `linear-gradient(to right, #d1d5db ${
                  ((values[0] - 20000) / (120000 - 20000)) * 100
                }%, #000 ${
                  ((values[0] - 20000) / (120000 - 20000)) * 100
                }%, #000 ${
                  ((values[1] - 20000) / (120000 - 20000)) * 100
                }%, #d1d5db ${
                  ((values[1] - 20000) / (120000 - 20000)) * 100
                }%)`,
              }}
            >
              {children}
            </div>
          )}
          renderThumb={({ props }) => (
            <div
              {...props}
              className="h-5 w-5 bg-white border-2 border-black rounded-full"
            />
          )}
        />
      </div>
    </div>
  );
}

export default Filter;
