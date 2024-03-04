import React from "react";
import { Link } from "react-router-dom";

const Search = ({ searchQuery, handleInputChange, searchResults }) => {
  return (
    <div style={{ width: "21rem" }}>
      <form role="search">
        <input
          type="search"
          className="form-control form-control-dark text-bg-dark"
          placeholder="Search..."
          aria-label="Search"
          value={searchQuery}
          onChange={handleInputChange}
        />
      </form>
      {searchResults.length > 0 && (
        <div
          className="position-absolute mt-1 bg-white rounded-1"
          style={{ zIndex: "1" }}
        >
          <div className="mx-2 my-2" style={{ width: "20rem" }}>
            {searchResults.map((movie) => (
              <button key={movie.id} className="btn btn-light w-100">
                <Link
                  to={`/movie/${encodeURIComponent(movie.id)}`}
                  style={{ color: "black", textDecoration: "none" }}
                >
                  <div className="d-flex gap-2 mb-1">
                    {movie.poster_path ? (
                      <img
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        alt={movie.title}
                        style={{ width: "40px", height: "60px" }}
                      />
                    ) : (
                      <div style={{ width: "50px", height: "60px" }}>
                        <p className="font-monospace">No img</p>
                      </div>
                    )}
                    <div className="d-flex flex-column float-start">
                      <p
                        className="fs-6 text-start"
                        style={{
                          textOverflow: "ellipsis",
                          overflow: "hidden",
                          height: "30px",
                          width: "15rem",
                          whiteSpace: "nowrap",
                          margin: "0",
                        }}
                      >
                        {movie.title}
                      </p>
                      <p className="text-start">
                        ★{movie.vote_average.toFixed(1)}
                      </p>
                    </div>
                  </div>
                </Link>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;
