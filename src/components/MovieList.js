import React from "react";
import { Link } from "react-router-dom";

function MovieList({ genre, movies }) {
  return (
    <div className="row col-10 float-end me-1" style={{ marginTop: "4%" }}>
      <div className="my-5">
        <h1 className="fs-3">{genre.name}</h1>
      </div>
      <div className="row m-auto">
        {movies.map((movie, index) => (
          <div key={index} className="col-lg-2">
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
                <p className="fw-bold">{movie.vote_average.toFixed(1)}/10</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieList;
