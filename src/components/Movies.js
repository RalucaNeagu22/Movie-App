import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";

function Movies({ key, apiUrl, title }) {
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
    <div className="row col-10 float-end me-1" style={{ marginTop: "4%" }}>
      <div className="my-5">
        <h1 className="fs-3">{title}</h1>
      </div>

      <InfiniteScroll
        dataLength={movies.length}
        next={() => setPageNumber(pageNumber + 1)}
        hasMore={true}
        loader={<h4>Loading...</h4>}
      >
        <div className="row m-0">
          {movies.map((movie, index) => (
            <div key={index} className=" col-xl-2 col-lg-2 col-md-3 col-sm-6">
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
                  <p
                    className="fw-semibold"
                    style={{
                      textOverflow: "ellipsis",
                      overflow: "hidden",
                      height: "25%",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {movie.title}
                  </p>
                  <p className="fw-bold">{movie.vote_average.toFixed(1)}/10</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
}

export default Movies;
