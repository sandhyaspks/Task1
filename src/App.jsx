<<<<<<< HEAD
import { useState } from 'react'

import './App.css'
import Auth from './Auth'
import User from './User'
const Authorized=Auth(User);
function App() {
  const user={name:"CSK"};
  const isAuth=true;


  return (
    <>
    <h1>userprofile</h1>
     <Authorized isAuth={isAuth}user={user}/>
    </>
  )
}

export default App
=======
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
  const [movies, setMovies] = useState([]);
  const baseUrl = "https://api.themoviedb.org/3";
  const apiKey = "c3d69381f8dc7e97447514292562a94a";

  useEffect(() => {
    axios.get(`${baseUrl}/discover/movie?api_key=${apiKey}&language=en-US&page=1`)
      .then((response) => setMovies(response.data.results))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="App">
      <h1>Netflix Clone</h1>
      <div className="movie-list">
        {movies.map((movie) => (
          <div className="movie-card" key={movie.id}>
            <img
              src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              alt={movie.title}
            />
            <h3>{movie.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
>>>>>>> 4fd174d1c5bc9cb8467f4bcc0b94c4ba564b85c1
