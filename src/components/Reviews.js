import React from "react";

function Reviews({ reviews, expandedReviews, toggleShowFullReview }) {
  return (
    <div className="my-5 py-5">
      <h2>Reviews</h2>
      <div className="border">
        <div className="mb-3 mx-3 my-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            User
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
          />
        </div>

        <div className="mb-3 mx-3 my-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Your review
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
        <button type="button" className="btn btn-secondary mx-3 my-3">
          Submit
        </button>
      </div>

      {reviews.map((review) => (
        <div key={review.id} className="border my-5">
          <p className="fw-bold">{review.author}</p>
          {expandedReviews[review.id] ? (
            <p>{review.content}</p>
          ) : (
            <p>{review.content.slice(0, 700)}...</p>
          )}
          {review.content.length > 700 && (
            <button
              onClick={() => toggleShowFullReview(review.id)}
              className="btn btn-light "
            >
              {expandedReviews[review.id] ? "See Less" : "See More"}
            </button>
          )}
        </div>
      ))}
    </div>
  );
}

export default Reviews;
