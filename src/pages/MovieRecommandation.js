import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Filters from "../components/Filters";
import logo from "../assets/moviesblurred.png";
import axios from "axios";
import { Link } from "react-router-dom";

function MovieRecommandation() {
  const [loading, setLoading] = useState(false);
  const [randomMovie, setRandomMovie] = useState(null);

  const handleSubmit = async () => {
    setLoading(true);

    try {
      const response = await axios.get(
        "https://api.themoviedb.org/3/movie/top_rated",
        {
          params: {
            api_key: "66fb5ac8dfbf22ff845e82003db9b6ad",
          },
        }
      );

      setLoading(false);

      const movies = response.data.results;
      const randomIndex = Math.floor(Math.random() * movies.length);
      const randomSelectedMovie = movies[randomIndex];
      setRandomMovie(randomSelectedMovie);

      // Store the movie information in local storage
      localStorage.setItem("randomMovie", JSON.stringify(randomSelectedMovie));
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    // Check if there is a stored movie suggestion in local storage
    const storedMovie = localStorage.getItem("randomMovie");
    if (storedMovie) {
      setRandomMovie(JSON.parse(storedMovie));
    }
  }, []);

  // Clear the stored movie suggestion when the component unmounts
  useEffect(() => {
    return () => localStorage.removeItem("randomMovie");
  }, []);

  return (
    <div>
      <Navbar />
      <div className="d-flex">
        <Filters />
        <div>
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              textAlign: "center",
              color: "#868B8E",
              zIndex: 1,
            }}
          >
            <h1
              style={{
                color: "#868B8E",
              }}
            >
              MOVIE RECOMMENDATION ENGINE
            </h1>
            <p style={{ color: "#868B8E" }} className="fs-3">
              You can't decide between thousands of movies?
            </p>
            <p style={{ color: "#868B8E" }} className="fs-3">
              Press the button and let us do the work!
            </p>
            <button
              type="button"
              className="btn btn-dark btn-lg my-5"
              onClick={handleSubmit}
              disabled={loading}
            >
              Start Now
            </button>
            {loading && (
              <p className="placeholder-glow mt-3">
                <span className="placeholder col-12"></span>
              </p>
            )}
            {randomMovie && (
              <div className="mt-3">
                <Link
                  to={`/movie/${encodeURIComponent(randomMovie.id)}`}
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  <h2>Random Movie Suggestion:</h2>
                  <p className="fs-3 fw-bold">{randomMovie.title}</p>
                  <img
                    src={`https://image.tmdb.org/t/p/w500${randomMovie.poster_path}`}
                    alt={randomMovie.title}
                    style={{ width: "20rem" }}
                  />
                </Link>
              </div>
            )}
          </div>
          <div
            style={{
              backgroundImage: `url(${logo})`,
              backgroundSize: "contain",
              backgroundRepeat: "repeat",
              width: "100vw",
              height: "100vh",
              backgroundPositionX: "70%",
              filter: "blur(5px)",
              position: "absolute",
              top: 0,
              left: 0,
              zIndex: 0,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default MovieRecommandation;
