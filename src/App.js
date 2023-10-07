import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import SearchIcon from "./search.svg";
import MovieCard from "./MovieCard.jsx";
//f95bafff

//http://www.omdbapi.com/?i=tt3896198&apikey=f95bafff

const API_URL = "http://www.omdbapi.com/?apikey=f95bafff";

// const movie1 = {
//   Title: "Spiderman the Verse",
//   Year: "2019",
//   imdbID: "tt12122034",
//   Type: "series",
//   Poster: "N/A",
// };

// "http://www.omdbapi.com/?i=tt3896198&apikey=f95bafff";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState(" ");

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("Spiderman");
  }, []);

  return (
    <div className="app">
      <a href="/" className="a_tittle">MovieLand</a>

      <div className="search">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for movies"
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
