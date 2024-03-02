import React from "react";
import Navbar from "../components/NavbarComponents/Navbar";
import Filters from "../components/Filters";
import Movies from "../components/Movies";

function Upcoming() {
  const apiUrl2 = "https://api.themoviedb.org/3/movie/upcoming?language=en-US";
  return (
    <div>
      <Navbar />
      <div className="d-flex ">
        <Filters />
        <Movies apiUrl={apiUrl2} title="Upcoming movies" />
      </div>
    </div>
  );
}

export default Upcoming;
