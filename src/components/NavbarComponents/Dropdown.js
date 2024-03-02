import React from "react";
import { Link } from "react-router-dom";

function Dropdown() {
  return (
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
        <Link to={"/contributions"} className="text-decoration-none">
          <li className="dropdown-item">My reviews</li>
        </Link>
      </ul>
    </div>
  );
}

export default Dropdown;
