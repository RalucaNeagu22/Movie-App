import React from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <div className="d-flex justify-content-center align-items-center align-content-center">
      <Link to={"/"}>
        <img
          src={logo}
          alt="Company Logo"
          style={{ width: "2rem", height: "2rem" }}
          className="mx-lg-5 mx-sm-3"
        />
      </Link>
    </div>
  );
}

export default Logo;
