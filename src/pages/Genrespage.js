import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieList from "../components/MovieList";
import Navbar from "../components/Navbar";
import Filters from "../components/Filters";

function Genrespage() {
  const { genre } = useParams();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMoviesByGenre();
  }, [genre]);

  const fetchMoviesByGenre = async () => {
    const apiKey = "66fb5ac8dfbf22ff845e82003db9b6ad";
    const genreUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${encodeURIComponent(
      genre
    )}`;

    try {
      const response = await fetch(genreUrl);
      const data = await response.json();
      setMovies(data.results);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="d-flex">
        <Filters />
        <MovieList movies={movies} genre={genre} />;
      </div>
    </div>
  );
}

export default Genrespage;
