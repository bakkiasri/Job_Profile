import React from "react";
import Navbar from "./components/navbar";
import Card from "./components/card";
import Filter from "./components/filter";
function App() {
  return (
    <div className="flex-row bg-[#FBFBFF] overflow-hidden">
      <div className="flex-row bg-[#FFFFFF] shadow-lg">
        <div className="px-10 lg:px-80 pt-10">
          <Navbar />
        </div>
        <Filter className="p-0 w-full" />
      </div>
      <div className="p-10  flex justify-center items-center">
        <Card />
      </div>
    </div>
  );
}

export default App;
