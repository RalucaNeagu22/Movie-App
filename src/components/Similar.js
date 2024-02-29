import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Similar({ movieId }) {
  const [similarMovies, setSimilarMovies] = useState([]);
  useEffect(() => {
    const fetchSimilarMovies = async () => {
      const apiKey = "66fb5ac8dfbf22ff845e82003db9b6ad";
      const url = `https://api.themoviedb.org/3/movie/${movieId}/similar?language=en-US&page=1&api_key=${apiKey}&size=6`;

      try {
        const response = await axios.get(url);
        setSimilarMovies(response.data.results.slice(0, 6));
      } catch (error) {
        console.error(error);
      }
    };

    fetchSimilarMovies();
  }, [movieId]);

  return (
    <div>
      <h2 className="fs-3">Similar Movies</h2>
      <div className="row m-auto">
        {similarMovies.map((movie) => (
          <div key={movie.id} className="col-2">
            <Link
              to={`/movie/${encodeURIComponent(movie.id)}`}
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="img-fluid"
              />
              <div className="d-flex gap-1">
                <p className="fw-semibold">{movie.title}</p>
                <p className="fw-bold">{movie.vote_average.toFixed(1)}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Similar;
