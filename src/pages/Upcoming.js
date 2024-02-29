import React from "react";
import Navbar from "../components/Navbar";
import Filters from "../components/Filters";
import Movies from "../components/Movies";

function Upcoming() {
  const apiUrl2 = "https://api.themoviedb.org/3/movie/upcoming?language=en-US";
  return (
    <div>
      <Navbar />
      <Filters />
      <Movies apiUrl={apiUrl2} title="Upcoming movies" />
    </div>
  );
}

export default Upcoming;
