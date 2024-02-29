import React from "react";
import Genre from "./Genre";

function Filters() {
  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark fixed-bottom"
      style={{ width: "18rem", height: "95vh" }}
    >
      <a
        href="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
      >
        <span className="fs-4">Sidebar</span>
      </a>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <Genre />

        <li>
          <a href="#" className="nav-link text-white">
            Products
          </a>
        </li>
        <li>
          <a href="#" className="nav-link text-white">
            Customers
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Filters;
