import React from "react";
import Navbar from "../components/Navbar";
import Filters from "../components/Filters";
import Movies from "../components/Movies";

function Popular() {
  const apiUrl3 = "https://api.themoviedb.org/3/movie/popular?language=en-US";
  return (
    <div>
      <Navbar />
      <div className="d-flex ">
        <Filters />
        <Movies apiUrl={apiUrl3} title="Popular movies" />
      </div>
    </div>
  );
}

export default Popular;
