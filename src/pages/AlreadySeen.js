import React from "react";
import Navbar from "../components/Navbar";
import Filters from "../components/Filters";
import MovieList from "../components/MovieList";
import { useState, useEffect } from "react";

function AlreadySeen() {
  const [seen, setSeen] = useState([]);
  useEffect(() => {
    const storedSeen = JSON.parse(localStorage.getItem("seen")) || [];
    setSeen(storedSeen);
  }, []);
  const alreadySeen = { name: "Movies you have already seen" };
  return (
    <div>
      <Navbar />
      <Filters />
      <MovieList genre={alreadySeen} movies={seen} />
    </div>
  );
}

export default AlreadySeen;
