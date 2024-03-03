import React from "react";
import Genre from "./Genre";
import { Link } from "react-router-dom";

function Filters() {
  return (
    <div className="container-fluid">
      <div
        className="d-flex flex-column gap-3 p-lg-3 p-sm-0 p-md-1 text-bg-dark fixed-top row col-2"
        style={{
          zIndex: 1000,
          top: "3rem",
          height: "100vh",
          paddingRight: "7rem",
        }}
      >
        <div className="d-flex flex-column justify-content-center align-content-center col-12">
          <p className="fs-5 pt-3 pt-sm-5 m-0">Discover</p>
          <p className="fs-5">movies</p>
          <hr />
        </div>
        <div className="nav nav-pills flex-column mb-auto gap-2 col-12">
          <Genre />
          <Link to={"/"} style={{ color: "inherit", textDecoration: "none" }}>
            <button className="btn btn-dark w-100 d-flex justify-content-start">
              Top Rated
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
    </div>
  );
}

export default Filters;
