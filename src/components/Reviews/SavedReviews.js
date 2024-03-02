import React from "react";

const SavedReviews = ({ savedReviews, movieId, handleDelete }) => {
  return (
    <>
      {savedReviews
        .filter((review) => review.movieId === movieId)
        .map((review) => (
          <div key={review.id} className="border p-3 mb-3">
            <div className="d-flex justify-content-between">
              <p className="fw-bold">{review.user}</p>
              <button
                type="button"
                className="btn btn-light"
                onClick={() => handleDelete(review.id)}
              >
                Delete
              </button>
            </div>
            <p>{review.comment}</p>
          </div>
        ))}
    </>
  );
};

export default SavedReviews;
