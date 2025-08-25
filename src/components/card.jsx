import React from "react";
import { BiUserPlus } from "react-icons/bi";
import { RiBuildingLine } from "react-icons/ri";
import { FiLayers } from "react-icons/fi";

function JobCard({ jobs = [] }) {
  if (jobs.length === 0) {
    return (
      <div className="flex justify-center mt-10 text-gray-500">
        No jobs created yet. Click "Create Job".
      </div>
    );
  }
  return (
    <div className="flex justify-center items-center p-6">
      <div
        className="
          grid gap-6
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          xl:grid-cols-4
          justify-items-center
        "
      >
        {jobs.map((job, index) => (
          <div
            key={index}
            className="flex p-4 justify-start items-start w-80 shadow-lg rounded-xl bg-white"
          >
            <div className="flex flex-col justify-start items-start gap-3">
              {/* Logo + Posted Time */}
              <div className="flex justify-between w-full">
                <img
                  src={job.logo}
                  alt={job.company}
                  className="w-16 h-16 object-contain"
                />
                <div className="bg-[#B0D9FF] h-fit p-2 text-black rounded-2xl">
                  {job.posted}
                </div>
              </div>

              {/* Job Title */}
              <h3 className="text-lg text-start font-semibold">
                {job.company}
              </h3>

              {/* Stats */}
              <div className="flex justify-between text-[#5A5A5A] items-center w-full text-md font-medium">
                <span className="flex gap-1 items-center">
                  <BiUserPlus className="w-6 h-6" />
                  <p>{job.exp}</p>
                </span>
                <span className="flex gap-1 items-center">
                  <RiBuildingLine className="w-6 h-6" />
                  <p>{job.type}</p>
                </span>
                <span className="flex gap-1 items-center">
                  <FiLayers className="w-6 h-6" />
                  <p>{job.salary}</p>
                </span>
              </div>

              {/* Description */}
              <ul className="text-xs text-[#5A5A5A] ps-4 list-disc text-left">
                {job.description.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>

              {/* Footer */}
              <button className="p-3 cursor-pointer text-white w-full rounded-xl bg-[#00AAFF] font-bold">
                Apply Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default JobCard;
