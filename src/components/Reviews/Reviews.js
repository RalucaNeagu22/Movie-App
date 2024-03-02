import React, { useState, useEffect } from "react";
import FetchedReviews from "./FetchedReviews";
import SavedReviews from "./SavedReviews";

const Reviews = ({
  reviews: fetchedReviews,
  expandedReviews,
  toggleShowFullReview,
  movieId,
  movie,
}) => {
  const [userInput, setUserInput] = useState({
    user: "",
    comment: "",
  });
  const [savedReviews, setSavedReviews] = useState([]);

  useEffect(() => {
    const existingReviews = JSON.parse(localStorage.getItem("reviews")) || [];
    setSavedReviews(existingReviews);
  }, []);

  const handleInputChange = (event) => {
    setUserInput((prevUserInput) => ({
      ...prevUserInput,
      [event.target.name]: event.target.value,
    }));
  };

  const handleFormSubmit = () => {
    const newReview = {
      id: Date.now(),
      movieId,
      user: userInput.user,
      comment: userInput.comment,
      movieTitle: movie.title,
    };

    const updatedReviews = [...savedReviews, newReview];
    localStorage.setItem("reviews", JSON.stringify(updatedReviews));

    setSavedReviews(updatedReviews);
    setUserInput({
      user: "",
      comment: "",
    });
  };

  const handleDelete = (reviewId) => {
    const updatedReviews = savedReviews.filter(
      (review) => review.id !== reviewId
    );
    localStorage.setItem("reviews", JSON.stringify(updatedReviews));
    setSavedReviews(updatedReviews);
  };

  return (
    <div className="my-5 py-5">
      <h2 className="mb-3">Reviews</h2>
      <div className="border p-3 mb-3">
        <div className="mb-3">
          <label htmlFor="user" className="form-label">
            User
          </label>
          <input
            type="text"
            name="user"
            className="form-control"
            id="user"
            value={userInput.user}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="comment" className="form-label">
            Your review
          </label>
          <textarea
            name="comment"
            className="form-control"
            id="comment"
            rows="3"
            value={userInput.comment}
            onChange={handleInputChange}
          ></textarea>
        </div>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={handleFormSubmit}
        >
          Submit
        </button>
      </div>

      {/* Saved Reviews */}
      <SavedReviews
        savedReviews={savedReviews}
        movieId={movieId}
        handleDelete={handleDelete}
      />

      {/* Fetched Reviews */}
      <FetchedReviews
        reviews={fetchedReviews}
        expandedReviews={expandedReviews}
        toggleShowFullReview={toggleShowFullReview}
      />
    </div>
  );
};

export default Reviews;
