import React from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <div className="my-auto">
      <Link to={"/"}>
        <img
          src={logo}
          alt="Company Logo"
          style={{ width: "2rem", height: "2rem" }}
          className="mx-5"
        />
      </Link>
    </div>
  );
}

export default Logo;
