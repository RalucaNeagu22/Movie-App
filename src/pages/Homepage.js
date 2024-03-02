import Navbar from "../components/NavbarComponents/Navbar";
import Filters from "../components/Filters";
import Movies from "../components/Movies";
import React from "react";

function Homepage() {
  const apiUrl = "https://api.themoviedb.org/3/movie/top_rated?language=en-US";

  return (
    <div>
      <Navbar />
      <Filters />
      <Movies apiUrl={apiUrl} title="Top Rated Movies" />
    </div>
  );
}

export default Homepage;
