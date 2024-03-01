import React from 'react';
import { useState, useEffect } from 'react';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';
import './App.css'

let API_URL = 'http://www.omdbapi.com/?apikey=ca491967';

function App() {
  const [movies, setMovies] = useState([]);
  const[searchTerm, setSearchTerm] = useState("");

  let searchMovie = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);

    // console.log("data:", data);
    // console.log("Search Data:", data.Search);
  }

  useEffect(() => {
    searchMovie("Dark");
  }, [])


  return (
    <>
      <div className="app">

        <h1>Movie Search App</h1>

        <div className="search">
          <input placeholder='Search for movie' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>

          <img src={SearchIcon} alt='search' onClick={() => searchMovie(searchTerm)}/>
        </div>

        {movies?.length > 0 ? ( // ? mtlb agar ye hwa 

          <div className='container'>
            {movies.map((movie) => (
              <MovieCard movie={movie}/>
            ))}
          </div>

        ): ( // : mtlb phir ye hina chahiye
          <div className='empty'>
            <h2>No Movie Found</h2>
          </div>
        )}

      </div>
    </>
  )
}

export default App