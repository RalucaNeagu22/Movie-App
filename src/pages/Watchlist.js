import React from "react";
import Navbar from "../components/NavbarComponents/Navbar";
import Filters from "../components/Filters";
import MovieList from "../components/MovieList";
import { useState, useEffect } from "react";

function Watchlist() {
  const [favorites, setFavorites] = useState([]);
  const [seen, setSeen] = useState([]);
  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
    const storedSeen = JSON.parse(localStorage.getItem("seen")) || [];
    setSeen(storedSeen);
  }, []);

  const handleSeenClick = (movie) => {
    const isAlreadySeen = seen.find((seenMovie) => seenMovie.id === movie.id);

    if (!isAlreadySeen) {
      const updatedSeenList = [...seen, movie];
      setSeen(updatedSeenList);
      localStorage.setItem("seen", JSON.stringify(updatedSeenList));
    }

    const updatedFavorites = favorites.filter(
      (favMovie) => favMovie.id !== movie.id
    );
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  const wishlistGenre = { name: "Movies you would like to see" };
  return (
    <div>
      <Navbar />
      <Filters />
      <MovieList
        genre={wishlistGenre}
        movies={favorites}
        showEyeIcon={true}
        handleSeenClick={handleSeenClick}
      />
    </div>
  );
}

export default Watchlist;
