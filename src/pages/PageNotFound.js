import React from "react";
import pageNotFound from "../assets/pageNotFound.jpg";

function PageNotFound() {
  return (
    <div
      style={{
        backgroundImage: `url(${pageNotFound})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        width: "100vw",
        height: "100vh",
      }}
    ></div>
  );
}

export default PageNotFound;
