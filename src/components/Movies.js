import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";

function Movies({ apiUrl, title }) {
  const [movies, setMovies] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    const fetchApiData = async () => {
      const apiKey = "66fb5ac8dfbf22ff845e82003db9b6ad";
      const response = await axios(
        `${apiUrl}&api_key=${apiKey}&page=${pageNumber}`
      );
      const newMovies = [...movies, ...response.data.results];
      setMovies(newMovies);
    };

    fetchApiData();
  }, [pageNumber]);

  return (
    <div style={{ marginLeft: "20rem" }}>
      <div className="mx-5 my-5">
        <h1 className="fs-3">{title}</h1>
      </div>
      <div className="row m-auto">
        {movies.map((movie) => (
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

      <InfiniteScroll
        dataLength={movies.length}
        next={() => setPageNumber(pageNumber + 1)}
        hasMore={true}
        loader={<h4>Loading...</h4>}
      />
    </div>
  );
}

export default Movies;
