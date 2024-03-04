import React, { useEffect, useState } from "react";
import Navbar from "../components/NavbarComponents/Navbar";
import Filters from "../components/Filters";
import { useParams } from "react-router-dom";
import MovieDetails from "../components/MovieDetails";
import Similar from "../components/Similar";
import Reviews from "../components/Reviews/Reviews";

function MoviePage() {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [expandedReviews, setExpandedReviews] = useState({});
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites")) || []
  );
  const [seen, setSeen] = useState(
    JSON.parse(localStorage.getItem("seen")) || []
  );

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

  const handleWatchlist = () => {
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
  const handleSeen = () => {
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
      <Filters />
      <div
        style={{ marginTop: "4%" }}
        className="row col-10 float-end me-1 mb-5"
      >
        <div className="p-5">
          <MovieDetails
            movie={movie}
            handleWatchlist={handleWatchlist}
            handleSeen={handleSeen}
            favorites={favorites}
            seen={seen}
          />
          <Reviews
            reviews={reviews}
            expandedReviews={expandedReviews}
            toggleShowFullReview={toggleShowFullReview}
            movieId={id}
            movie={movie}
          />
          <Similar movieId={id} />
        </div>
      </div>
    </div>
  );
}
export default MoviePage;
