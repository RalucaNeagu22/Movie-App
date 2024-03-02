import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Genre() {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    fetchGenres();
  }, []);

  const fetchGenres = async () => {
    const apiKey = "66fb5ac8dfbf22ff845e82003db9b6ad";
    const url = "https://api.themoviedb.org/3/genre/movie/list?language=en";
    try {
      const response = await fetch(`${url}&api_key=${apiKey}`);
      const data = await response.json();
      setGenres(data.genres);
    } catch (error) {
      console.error("Error fetching genres:", error);
    }
  };
  return (
    <div>
      <div className="btn-group float-start btn w-100 p-0">
        <button
          className="btn btn-dark text-white nav-item w-100 d-flex justify-content-start"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Movie Genre
        </button>
        <ul className="dropdown-menu">
          {genres.map((genre) => (
            <Link
              to={`/genre/${encodeURIComponent(genre.id)}`}
              style={{ color: "inherit", textDecoration: "none" }}
              key={genre.id}
            >
              <li className="dropdown-item">{genre.name}</li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Genre;
