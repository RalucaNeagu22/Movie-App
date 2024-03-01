import React from "react";
import { Link } from "react-router-dom";

function MovieList({ genre, movies }) {
  if (genre == null) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <div style={{ marginLeft: "20rem" }}>
        <div className="mx-5 my-5">
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
                  <p className="fw-bold">{movie.vote_average.toFixed(1)}</p>
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
