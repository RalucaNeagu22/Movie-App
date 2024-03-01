import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import logo from "../assets/logo.png";

function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleInputChange = async (event) => {
    const query = event.target.value;
    setSearchQuery(query);

    if (query.trim() !== "") {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/search/movie`,
          {
            params: {
              api_key: "66fb5ac8dfbf22ff845e82003db9b6ad",
              query: query.trim(),
              page: 1,
            },
          }
        );

        setSearchResults(response.data.results.slice(0, 5));
      } catch (error) {
        console.error("Error fetching search results:", error);
      }
    } else {
      setSearchResults([]);
    }
  };

  return (
    <div>
      <header className="p-3 text-bg-dark sticky-top row me-0">
        <div className="d-flex flex-wrap align-items-center justify-content-lg-start gap-5">
          <Link to={"/"}>
            <img
              src={logo}
              alt="Company Logo"
              style={{ width: "2rem", height: "2rem" }}
              className="mx-5"
            />
          </Link>
          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0 gap-5">
            <Link
              to={"/movie-recommendation-engine"}
              className="text-decoration-none text-white"
            >
              <li>Movie Recommendation</li>
            </Link>
            <Link to={"/About"} className="text-decoration-none text-white">
              <li>About</li>
            </Link>
          </ul>
          <div className="d-flex gap-5">
            <div style={{ width: "13rem" }}>
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
                  className="popover position-absolute mt-1"
                  style={{ zIndex: "1" }}
                >
                  <div className="mx-2 my-2" style={{ width: "12rem" }}>
                    {searchResults.map((movie) => (
                      <div key={movie.id}>
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
                              <p>No poster available</p>
                            )}
                            <p>{movie.title}</p>
                          </div>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="dropdown">
              <a
                href="#"
                className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="https://github.com/mdo.png"
                  alt=""
                  width="32"
                  height="32"
                  className="rounded-circle me-2"
                />
                <strong>My profile</strong>
              </a>
              <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
                <Link to={"/Watchlist"} className="text-decoration-none">
                  <li className="dropdown-item">Watchlist</li>
                </Link>
                <Link to={"/Already-seen"} className="text-decoration-none">
                  <li className="dropdown-item">Already seen</li>
                </Link>
                <Link to={"/Watchlist"} className="text-decoration-none">
                  <li className="dropdown-item">My reviews</li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
