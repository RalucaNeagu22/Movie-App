import Navbar from "../components/Navbar";
import Filters from "../components/Filters";
import Movies from "../components/Movies";
import React from "react";

function Homepage() {
  return (
    <div>
      <Navbar />
      <div className="d-flex ">
        <Filters />
        <Movies />
      </div>
    </div>
  );
}

export default Homepage;
