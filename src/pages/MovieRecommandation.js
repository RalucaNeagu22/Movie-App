import React, { useState, useEffect } from "react";
import Navbar from "../components/NavbarComponents/Navbar";
import Filters from "../components/Filters";
import axios from "axios";
import { Link } from "react-router-dom";
import popcorn from "../assets/popcorn.jpg";

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
    <div
      style={{
        backgroundImage: `url(${popcorn})`,
        backgroundSize: "cover",
        backgroundRepeat: "repeat",
        height: "100vh",
      }}
    >
      <Navbar />
      <Filters />
      <div
        style={{ marginTop: "4%" }}
        className="row col-10 float-end me-1 d-flex justify-content-center text-center"
      >
        <div
          className="mt-5"
          style={{
            color: "#868B8E",
          }}
        >
          <h1 className="fs-3">MOVIE RECOMMENDATION ENGINE</h1>
        </div>
        <p style={{ color: "#868B8E" }} className="fs-5 text-center">
          You can't decide between thousands of movies?
        </p>
        <p style={{ color: "#868B8E" }} className="fs-5  text-center">
          Press the button and let us do the work!
        </p>
        <div className="text-center">
          <button
            type="button"
            className="btn btn-dark btn-lg mb-xxl-4 mb-xl-0 mb-lg-0"
            onClick={handleSubmit}
          >
            Start Now
          </button>
        </div>
        <div className="d-flex justify-content-center">
          {randomMovie && (
            <Link
              to={`/movie/${encodeURIComponent(randomMovie.id)}`}
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <div
                className="mt-3  bg-dark bg-gradient  rounded-4 d-flex justify-content-center d-flex flex-column"
                style={{ maxHeight: "370px" }}
              >
                <div className="d-flex gap-3 justify-content-center px-3">
                  <p
                    className="fs-5 fw-bold text-center pt-2"
                    style={{ color: "#fafafa" }}
                  >
                    {randomMovie.title}
                  </p>
                  <p
                    className="fs-5 fw-bold text-center pt-2"
                    style={{ color: "#fafafa" }}
                  >
                    {randomMovie.vote_average.toFixed(1)}/10
                  </p>
                </div>
                <div
                  className="d-flex justify-content-center d-flex justify-content-center align-content-center align-items-center px-4"
                  style={{ color: "red" }}
                >
                  <img
                    src={`https://image.tmdb.org/t/p/w500${randomMovie.poster_path}`}
                    alt={randomMovie.title}
                    style={{ maxHeight: "280px" }}
                    className="mb-4"
                  />
                </div>
              </div>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default MovieRecommandation;
