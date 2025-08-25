import React, { useState } from "react";
import Navbar from "./components/navbar";
import Card from "./components/card";
import Filter from "./components/filter";
import Popup from "./components/popup";
function App() {
  const [jobs, setJobs] = useState([]);
  const [open, setOpen] = useState(false);
  const [filter, setFilter] = useState({});

  const onAddJob = (newJob) => {
    setJobs((prev) => [...prev, newJob]);
    setOpen(false);
    console.log("new job added", newJob);
  };
  console.log("new job added", jobs);
  const filteredJobs = jobs.filter((job) => {
    const matchesTitle = job.company
      .toLowerCase()
      .includes((filter.searchTitle || "").toLowerCase());
    const matchesLocation = job.title
      .toLowerCase()
      .includes((filter.searchLocation || "").toLowerCase());
    const matchesType = job.type
      .toLowerCase()
      .includes((filter.jobType || "").toLowerCase());
    const salaryMin = filter.salaryRange ? filter.salaryRange[0] : 0;
    const salaryMax = filter.salaryRange ? filter.salaryRange[1] : Infinity;
    const jobSalary = parseInt(job.salary.replace(/[^0-9]/g, "")) || 0;

    return (
      matchesTitle &&
      matchesType &&
      matchesLocation &&
      jobSalary >= salaryMin &&
      jobSalary <= salaryMax
    );
  });

  return (
    <div className="flex-row bg-[#FBFBFF] overflow-hidden">
      <div className="flex-row bg-[#FFFFFF] shadow-lg">
        <div className="px-10 lg:px-80 pt-10">
          <Navbar setOpen={setOpen} />
        </div>
        <Filter setFilter={setFilter} className="p-0 w-full" />
      </div>
      <div className="p-10  flex justify-center items-center">
        <Card jobs={filteredJobs} />
      </div>
      {open && <Popup setOpen={setOpen} onAddJob={onAddJob} />}
    </div>
  );
}

export default App;
