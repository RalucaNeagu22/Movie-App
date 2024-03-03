import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/NavbarComponents/Navbar";
import Filters from "../components/Filters";
import Movies from "../components/Movies";

function Genrespage() {
  const { genre: genreId } = useParams();
  const [movies, setMovies] = useState([]);
  const [genre, setGenre] = useState(null);

  useEffect(() => {
    fetchMoviesByGenre();
  }, [genreId]);

  const fetchMoviesByGenre = async () => {
    const apiKey = "66fb5ac8dfbf22ff845e82003db9b6ad";
    const genreUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${encodeURIComponent(
      genreId
    )}`;

    try {
      const response = await fetch(genreUrl);
      const data = await response.json();
      setMovies(data.results);
    } catch (error) {
      console.error(error);
    }

    const genresUrl = `https://api.themoviedb.org/3/genre/movie/list?language=en&api_key=${apiKey}`;
    try {
      const genresResponse = await fetch(genresUrl);
      const genresData = await genresResponse.json();
      console.log(genresData);
      const selectedGenre = genresData.genres.find(
        (g) => g.id.toString() === genreId
      );
      setGenre(selectedGenre);
    } catch (error) {
      console.error("Error fetching genres:", error);
    }
  };
  if (genre == null) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <Navbar />
      <Filters />
      <Movies
        key={genreId}
        apiUrl={`https://api.themoviedb.org/3/discover/movie?&with_genres=${encodeURIComponent(
          genreId
        )}`}
        title={genre.name}
      />
    </div>
  );
}

export default Genrespage;
