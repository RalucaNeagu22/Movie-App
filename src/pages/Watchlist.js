import React from "react";
import Navbar from "../components/NavbarComponents/Navbar";
import Filters from "../components/Filters";
import MovieList from "../components/MovieList";
import { useState, useEffect } from "react";

function Watchlist() {
  const [favorites, setFavorites] = useState([]);
  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  }, []);
  const wishlistGenre = { name: "Movies you would like to see" };
  return (
    <div>
      <Navbar />
      <Filters />
      <MovieList genre={wishlistGenre} movies={favorites} />
    </div>
  );
}

export default Watchlist;
