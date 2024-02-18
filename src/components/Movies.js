import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Movies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const apiKey = "66fb5ac8dfbf22ff845e82003db9b6ad";
      const url =
        "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1";

      const options = {
        method: "GET",
      };

      try {
        const response = await fetch(`${url}&api_key=${apiKey}`);
        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      <div className="mx-5 my-5">
        <h1 className="fs-3">Top Rated Movies</h1>
      </div>
      <div className="row m-auto">
        {movies.map((movie) => (
          <div key={movie.id} className="col-3">
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

export default Movies;
