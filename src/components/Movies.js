import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";

function Movies() {
  const [movies, setMovies] = useState([]);
  const [total_results, setResults] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    const fetchApiPost = async () => {
      console.log("effect");
      const apiKey = "66fb5ac8dfbf22ff845e82003db9b6ad";
      const url = "https://api.themoviedb.org/3/movie/top_rated?language=en-US";

      try {
        const response = await axios(
          `${url}&api_key=${apiKey}&page=${pageNumber}`
        );
        setResults(response.data.total_results);
        setMovies(response.data.results);
      } catch (error) {
        console.error(error);
      }
    };

    fetchApiPost();
  }, [pageNumber]);

  const fetchData = () => {
    console.log("fetch");
    setPageNumber(pageNumber + 1);
    const fetchApiPost = async () => {
      const apiKey = "66fb5ac8dfbf22ff845e82003db9b6ad";
      const url = "https://api.themoviedb.org/3/movie/top_rated?language=en-US";

      try {
        const response = await axios(
          `${url}&api_key=${apiKey}&page=${pageNumber}`
        );
        setResults(response.data.total_results);
        setMovies((prevMovies) => [...prevMovies, ...response.data.results]);
      } catch (error) {
        console.error(error);
      }
    };

    fetchApiPost();
  };

  return (
    <div style={{ marginLeft: "20rem" }}>
      <div className="mx-5 my-5">
        <h1 className="fs-3">Top Rated Movies</h1>
      </div>
      <div className="row m-auto">
        {movies.map((movie) => (
          <div key={movie.id} className="col-2">
            {console.log(movie.id)}
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
        next={fetchData}
        hasMore={true}
        loader={<h4>Loading...</h4>}
      />
    </div>
  );
}

export default Movies;
