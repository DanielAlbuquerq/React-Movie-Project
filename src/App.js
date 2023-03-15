import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import SearchIcon from "./search.svg";
import MovieCard from "./MovieCard";
//f95bafff

//http://www.omdbapi.com/?i=tt3896198&apikey=f95bafff

const API_URL = "http://www.omdbapi.com/?apikey=f95bafff";


// "http://www.omdbapi.com/?i=tt3896198&apikey=f95bafff";

const App = () => {
  const [movies, setMovies] = useState([]);


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
      <h1>MovieLand</h1>

      <div className="search">
        <input
          value="superman"
          onChange={() => {}}
          placeholder="Search for movies"
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => {}}
        />
      </div>

      {movies?.length > 0 ? (

        <div className="container">
          {<movies.map((movie) => (<MovieCard movie={movie} />
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
