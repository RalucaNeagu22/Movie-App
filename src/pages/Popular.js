import React from "react";
import Navbar from "../components/NavbarComponents/Navbar";
import Filters from "../components/Filters";
import Movies from "../components/Movies";

function Popular() {
  const apiUrl3 = "https://api.themoviedb.org/3/movie/popular?language=en-US";
  return (
    <div>
      <Navbar />
      <Filters />
      <Movies apiUrl={apiUrl3} title="Popular movies" />
    </div>
  );
}

export default Popular;
