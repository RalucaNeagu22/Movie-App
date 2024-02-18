import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Filters from "../components/Filters";
import { useParams } from "react-router-dom";

function MoviePage() {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [expandedReviews, setExpandedReviews] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const apiKey = "66fb5ac8dfbf22ff845e82003db9b6ad";
      const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`;
      const reviewsUrl = `https://api.themoviedb.org/3/movie/${id}/reviews?language=en-US&api_key=${apiKey}`;
      try {
        const response = await fetch(url);
        const data = await response.json();
        setMovie(data);

        const reviewsResponse = await fetch(reviewsUrl);
        const reviewsData = await reviewsResponse.json();
        setReviews(reviewsData.results);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [id]);

  const toggleShowFullReview = (reviewId) => {
    setExpandedReviews((prevExpandedReviews) => ({
      ...prevExpandedReviews,
      [reviewId]: !prevExpandedReviews[reviewId],
    }));
  };

  return (
    <div>
      <Navbar />
      <div className="d-flex">
        <Filters />
        <div className="mx-5 my-5">
          <div>
            {movie && (
              <div>
                <h2>{movie.title}</h2>
                <p> {movie.genres?.map((genre) => genre.name).join(", ")}</p>
                <div className="row">
                  <div className="col-8 d-flex row">
                    <div className="col-6">
                      <img
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        alt={movie.title}
                        className="img-fluid"
                      />
                    </div>
                    <div className="col-6">
                      <p>
                        {movie.vote_average} ({movie.vote_count} votes)
                      </p>
                      <p>{movie.overview}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="my-5 py-5">
            <h2>Reviews</h2>
            <div className="border">
              <div className="mb-3 mx-3 my-3">
                <label for="exampleFormControlInput1" class="form-label">
                  User
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                />
              </div>

              <div className="mb-3 mx-3 my-3">
                <label for="exampleFormControlTextarea1" class="form-label">
                  Your review
                </label>
                <textarea
                  class="form-control"
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
        </div>
      </div>
    </div>
  );
}
export default MoviePage;
