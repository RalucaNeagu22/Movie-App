import React from "react";
import { Link } from "react-router-dom";

function MovieRecommandationcandAbout() {
  return (
    <div className="nav col-lg-auto me-lg-auto mb-2 mb-md-0 gap-2">
      <Link
        to={"/movie-recommandation-engine"}
        className="text-decoration-none text-white"
      >
        <button className="btn btn-dark">Movie Recommendation</button>
      </Link>
      <Link to={"/About"} className="text-decoration-none text-white">
        <button className="btn btn-dark">About</button>
      </Link>
    </div>
  );
}

export default MovieRecommandationcandAbout;
