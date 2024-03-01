import React from "react";
import Genre from "./Genre";
import { Link } from "react-router-dom";

function Filters() {
  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark row col-1 sticky-top"
      style={{ zIndex: 1000, top: "3.5rem", height: "100vh" }}
    >
      <a
        href="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
      >
        <span className="fs-4">Sidebar</span>
      </a>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li>
          <Genre />
        </li>
        <Link to={"/"} style={{ color: "inherit", textDecoration: "none" }}>
          <li>Top Rated Movies</li>
        </Link>
        <Link
          to={"/upcoming"}
          style={{ color: "inherit", textDecoration: "none" }}
        >
          <li>Upcoming</li>
        </Link>
        <Link
          to={"/popular"}
          style={{ color: "inherit", textDecoration: "none" }}
        >
          <li>Popular</li>
        </Link>
      </ul>
    </div>
  );
}

export default Filters;
