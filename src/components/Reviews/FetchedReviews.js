import React from "react";

const FetchedReviews = ({ reviews, expandedReviews, toggleShowFullReview }) => {
  return (
    <>
      {reviews.map((review) => (
        <div key={review.id} className="border p-3 mb-3">
          <p className="fw-bold">{review.author}</p>
          {expandedReviews[review.id] ? (
            <p>{review.content}</p>
          ) : (
            <p>{review.content.slice(0, 700)}...</p>
          )}
          {review.content.length > 700 && (
            <button
              onClick={() => toggleShowFullReview(review.id)}
              className="btn btn-light"
            >
              {expandedReviews[review.id] ? "See Less" : "See More"}
            </button>
          )}
        </div>
      ))}
    </>
  );
};

export default FetchedReviews;
