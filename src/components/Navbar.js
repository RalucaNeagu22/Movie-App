import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
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
            to={"/movie-recommandation-engine"}
            className="text-decoration-none text-white"
          >
            <li>Movie Recommandation</li>
          </Link>
          <Link to={"/About"} className="text-decoration-none text-white">
            <li>About</li>
          </Link>
        </ul>
        <div className="col-3">
          <Link to={"/search"} className="text-decoration-none text-white">
            <form className="w-100" role="search">
              <input
                type="search"
                className="form-control form-control-dark text-bg-dark"
                placeholder="Search..."
                aria-label="Search"
              />
            </form>
          </Link>
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
    </header>
  );
}

export default Navbar;
