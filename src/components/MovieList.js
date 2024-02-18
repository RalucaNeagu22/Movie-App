import React from "react";
import { Link } from "react-router-dom";

function MovieList({ genre, movies }) {
  console.log(genre);
  return (
    <div>
      <div>
        <div className="mx-5 my-5">
          <h1 className="fs-3">{genre}</h1>
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
                  <p className="fw-bold">{movie.vote_average}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MovieList;
