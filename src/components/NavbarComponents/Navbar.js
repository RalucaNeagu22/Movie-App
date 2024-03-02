import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Logo from "./Logo";
import MovieRecommandationcandAbout from "./MovieRecommandationcandAbout";
import Dropdown from "./Dropdown";
import Search from "./Search";

function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleInputChange = async (event) => {
    const query = event.target.value;
    setSearchQuery(query);

    if (query.trim() !== "") {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/search/movie`,
          {
            params: {
              api_key: "66fb5ac8dfbf22ff845e82003db9b6ad",
              query: query.trim(),
              page: 1,
            },
          }
        );

        setSearchResults(response.data.results.slice(0, 5));
      } catch (error) {
        console.error("Error fetching search results:", error);
      }
    } else {
      setSearchResults([]);
    }
  };

  return (
    <div className="sticky-top" style={{ maxHeight: "10vh" }}>
      <header className="p-3 text-bg-dark row me-0">
        <div className="row">
          <div className="col-6 d-flex">
            <Logo />
            <MovieRecommandationcandAbout />
          </div>
          <div className="col-6 d-flex gap-5 d-flex justify-content-end">
            <Search
              searchQuery={searchQuery}
              handleInputChange={handleInputChange}
              searchResults={searchResults}
            />
            <Dropdown />
          </div>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
