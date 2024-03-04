import React from "react";

function MovieDetails({ movie, handleWatchlist, handleSeen, favorites, seen }) {
  const isMovieInFavorites = favorites.some(
    (favorite) => favorite.id == movie.id
  );
  const isMovieInSeen = seen.some((seen) => seen.id == movie.id);
  return (
    <div>
      {movie && (
        <div>
          <h2>{movie.title}</h2>
          <p>{movie.genres?.map((genre) => genre.name).join(", ")}</p>
          <div className="row">
            <div className="col-8 d-flex row">
              <div className="col-5">
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  className="img-fluid"
                />
              </div>
              <div className="col-7">
                <div className="d-flex flex-row-reverse gap-2">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-toggle="button"
                    onClick={handleSeen}
                  >
                    {isMovieInSeen ? "Not seen" : "Already seen"}
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-toggle="button"
                    onClick={handleWatchlist}
                  >
                    {isMovieInFavorites
                      ? "Remove from Watchlist"
                      : "Add to Watchlist"}
                  </button>
                </div>
                <p>
                  {movie.vote_average} ({movie.vote_count} votes)
                </p>
                <p>{movie.overview}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MovieDetails;
