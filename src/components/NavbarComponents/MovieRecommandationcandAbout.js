import React from "react";
import { Link } from "react-router-dom";

function MovieRecommandationcandAbout() {
  return (
    <div className="row mb-md-0">
      <div className="col-9 m-0 p-0">
        <Link
          to={"/movie-recommandation-engine"}
          className="text-decoration-none text-white"
          style={{
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          <button className="btn btn-dark">Movie Recommendation</button>
        </Link>
      </div>
      <div className="col-3 m-0 p-0">
        <Link to={"/About"} className="text-decoration-none text-white">
          <button className="btn btn-dark">About</button>
        </Link>
      </div>
    </div>
  );
}

export default MovieRecommandationcandAbout;
