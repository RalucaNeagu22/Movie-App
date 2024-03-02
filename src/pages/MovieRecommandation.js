import React, { useState, useEffect } from "react";
import Navbar from "../components/NavbarComponents/Navbar";
import Filters from "../components/Filters";
import logo from "../assets/moviesblurred.png";
import axios from "axios";
import { Link } from "react-router-dom";

function MovieRecommandation() {
  const [randomMovie, setRandomMovie] = useState(null);
  useEffect(() => {
    setRandomMovie(null);
  }, []);
  const handleSubmit = async () => {
    const randomPage = Math.floor(Math.random() * 100) + 1;
    const response = await axios.get(
      "https://api.themoviedb.org/3/movie/top_rated",
      {
        params: {
          api_key: "66fb5ac8dfbf22ff845e82003db9b6ad",
          page: randomPage,
        },
      }
    );
    const movies = response.data.results;
    const randomIndex = Math.floor(Math.random() * movies.length);
    const randomSelectedMovie = movies[randomIndex];
    setRandomMovie(randomSelectedMovie);
  };

  return (
    <div className="bg-body-secondary bg-gradient" style={{ height: "100vh" }}>
      <Navbar />
      <Filters />
      <div
        style={{ marginLeft: "17rem" }}
        className="me-4 mt-5 d-flex flex-column align-items-center "
      >
        <p
          style={{
            color: "#868B8E",
          }}
          className="fs-3"
        >
          MOVIE RECOMMENDATION ENGINE
        </p>
        <p style={{ color: "#868B8E" }} className="fs-4">
          You can't decide between thousands of movies?
        </p>
        <p style={{ color: "#868B8E" }} className="fs-4">
          Press the button and let us do the work!
        </p>
        <button
          type="button"
          className="btn btn-dark btn-lg my-5"
          onClick={handleSubmit}
        >
          Start Now
        </button>
        {randomMovie && (
          <div
            className="mt-1 bg-secondary-subtle bg-opacity-10 d-flex justify-content-center"
            style={{ width: "17vw" }}
          >
            <Link
              to={`/movie/${encodeURIComponent(randomMovie.id)}`}
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <p
                className="fs-3 fw-bold text-center pt-2"
                style={{ color: "#868B8E" }}
              >
                {randomMovie.title}
              </p>

              <p
                className="fs-3 fw-bold text-center"
                style={{ color: "#868B8E" }}
              >
                {randomMovie.vote_average.toFixed(1)}/10
              </p>
              <div className="d-flex justify-content-center">
                <img
                  src={`https://image.tmdb.org/t/p/w500${randomMovie.poster_path}`}
                  alt={randomMovie.title}
                  style={{ width: "15vw" }}
                  className="p-3 mb-4"
                />
              </div>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default MovieRecommandation;
