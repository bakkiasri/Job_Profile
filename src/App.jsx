import React from "react";
import Navbar from "./components/navbar";
import Card from "./components/card";
import Filter from "./components/filter";
function App() {
  return (
    <div className="flex-row">
      <div className="flex-row shadow-lg">
        <div className="px-80 pt-10  ">
          <Navbar />
        </div>
        <Filter className="p-0 w-full" />
      </div>
      <div className="p-15">
        <Card />
      </div>
    </div>
  );
}

export default App;
