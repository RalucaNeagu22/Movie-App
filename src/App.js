import Homepage from "./pages/Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MoviePage from "./pages/MoviePage";
import Genrespage from "./pages/Genrespage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/movie/:id" element={<MoviePage />} />
        <Route path="/genre/:genre" element={<Genrespage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
