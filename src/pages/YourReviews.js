import React from "react";
import Navbar from "../components/NavbarComponents/Navbar";
import Filters from "../components/Filters";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function YourReviews() {
  const [savedReviews, setSavedReviews] = useState([]);
  useEffect(() => {
    const existingReviews = JSON.parse(localStorage.getItem("reviews")) || [];
    setSavedReviews(existingReviews);
  }, []);
  return (
    <div>
      <Navbar />
      <Filters />
      <div
        style={{ marginLeft: "17rem" }}
        className="row row-cols-5 row-gap-3 mt-5 me-5"
      >
        {savedReviews.map((review) => (
          <Link
            to={`/movie/${encodeURIComponent(review.movieId)}`}
            style={{ color: "inherit", textDecoration: "none" }}
          >
            <div key={review.id} className="modal-content rounded-4 shadow p-3">
              <div className="modal-header border-bottom-0">
                <p className="modal-title fs-5 fw-semibold">
                  {review.movieTitle}
                </p>
              </div>
              <div>
                <p className="modal-body p-2 fst-italic">{review.comment}</p>
              </div>
              <div>
                <p className="float-end">{review.user}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default YourReviews;
