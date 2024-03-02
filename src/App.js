import Homepage from "./pages/Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MoviePage from "./pages/MoviePage";
import Genrespage from "./pages/Genrespage";
import MovieRecommandation from "./pages/MovieRecommandation";
import About from "./pages/About";
import Watchlist from "./pages/Watchlist";
import AlreadySeen from "./pages/AlreadySeen";
import PageNotFound from "./pages/PageNotFound";
import Upcoming from "./pages/Upcoming";
import Popular from "./pages/Popular";
import YourReviews from "./pages/YourReviews";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/movie/:id" element={<MoviePage />} />
        <Route path="/genre/:genre" element={<Genrespage />} />
        <Route
          path="/movie-recommandation-engine"
          element={<MovieRecommandation />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/Watchlist" element={<Watchlist />} />
        <Route path="/Already-seen" element={<AlreadySeen />} />
        <Route path="/*" element={<PageNotFound />} />
        <Route path="/upcoming" element={<Upcoming />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/contributions" element={<YourReviews />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
