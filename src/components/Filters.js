import React from "react";
import Genre from "./Genre";
import { Link } from "react-router-dom";

function Filters() {
  return (
    <div
      className="d-flex flex-column gap-3 p-3 text-bg-dark fixed-top"
      style={{ zIndex: 1000, top: "3rem", height: "100vh", width: "15rem" }}
    >
      <span className="fs-5 pt-3 pt-sm-5 ps-2">Discover</span>
      <hr />
      <div className="nav nav-pills flex-column mb-auto gap-2">
        <Genre />

        <Link to={"/"} style={{ color: "inherit", textDecoration: "none" }}>
          <button className="btn btn-dark w-100 d-flex justify-content-start">
            Top Rated Movies
          </button>
        </Link>
        <Link
          to={"/upcoming"}
          style={{ color: "inherit", textDecoration: "none" }}
        >
          <button className="btn btn-dark w-100 d-flex justify-content-start">
            Upcoming
          </button>
        </Link>
        <Link
          to={"/popular"}
          style={{ color: "inherit", textDecoration: "none" }}
        >
          <button className="btn btn-dark w-100 d-flex justify-content-start">
            Popular
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Filters;
