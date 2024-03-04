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
        style={{ marginTop: "4%" }}
        className="row col-10 float-end me-1 mb-5 p-5"
      >
        <div className="container">
          <div className="row gap-5">
            {savedReviews.map((review) => (
              <div key={review.id} className="rounded-4 shadow p-3 col-2">
                <Link
                  to={`/movie/${encodeURIComponent(review.movieId)}`}
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  <div>
                    <div className="modal-header border-bottom-0">
                      <p className="modal-title fs-5 fw-semibold">
                        {review.movieTitle}
                      </p>
                    </div>
                    <div>
                      <p className="modal-body p-2 fst-italic">
                        {review.comment}
                      </p>
                    </div>
                    <div>
                      <p className="float-end">{review.user}</p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default YourReviews;
