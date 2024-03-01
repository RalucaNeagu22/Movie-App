import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Filters from "../components/Filters";
import { useParams } from "react-router-dom";
import MovieDetails from "../components/MovieDetails";
import Reviews from "../components/Reviews";
import Similar from "../components/Similar";

function MoviePage() {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [expandedReviews, setExpandedReviews] = useState({});
  const [favorites, setFavorites] = useState([]);
  const [seen, setSeen] = useState([]);

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

  const handleClick = () => {
    if (movie) {
      const { id, title, poster_path, vote_average, vote_count } = movie;
      const favoritesFromStorage =
        JSON.parse(localStorage.getItem("favorites")) || [];
      const isMovieInFavorites = favoritesFromStorage.some(
        (favorite) => favorite.id === movie.id
      );

      if (isMovieInFavorites) {
        const updatedFavorites = favoritesFromStorage.filter(
          (favorite) => favorite.id !== id
        );
        localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
        setFavorites(updatedFavorites);
      } else {
        const updatedFavorites = [
          ...favoritesFromStorage,
          { id, title, poster_path, vote_average, vote_count },
        ];
        localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
        setFavorites(updatedFavorites);
      }
    }
  };
  const handleClickButton = () => {
    if (movie) {
      const { id, title, poster_path, vote_average, vote_count } = movie;
      const seenFromStorage = JSON.parse(localStorage.getItem("seen")) || [];
      const isMovieInSeen = seenFromStorage.some(
        (seen) => seen.id === movie.id
      );
      if (isMovieInSeen) {
        const updatedSeen = seenFromStorage.filter((seen) => seen.id !== id);
        localStorage.setItem("seen", JSON.stringify(updatedSeen));
        setSeen(updatedSeen);
      } else {
        const updatedSeen = [
          ...seenFromStorage,
          { id, title, poster_path, vote_average, vote_count },
        ];
        localStorage.setItem("seen", JSON.stringify(updatedSeen));
        setSeen(updatedSeen);
      }
    }
  };

  return (
    <div>
      <Navbar />
      <div className="d-flex">
        <Filters />
        <div>
          <div className="mx-5 my-5">
            <MovieDetails
              movie={movie}
              handleClick={handleClick}
              handleClickButton={handleClickButton}
            />
            <Reviews
              reviews={reviews}
              expandedReviews={expandedReviews}
              toggleShowFullReview={toggleShowFullReview}
            />
            <Similar movieId={id} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default MoviePage;
