<<<<<<< HEAD
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import AdminPage from "./pages/AdminPage";
import CollegeManagementPage from "./pages/CollegeManagementPage";
import StudentPage from "./pages/StudentPage";
import Unauthorized from "./pages/Unauthorized";

function App() {
  const [user, setUser] = useState(null); // User data will include { name, role }
  const [isAuth, setIsAuth] = useState(false); // Tracks authentication state

  return (
    <Router>
      <div className="App">
        <h1>Role-Based Authentication App</h1>
        <nav>
          <ul>
            <li><Link to="/">Login</Link></li>
            <li><Link to="/admin">Admin</Link></li>
            <li><Link to="/college-management">College Management</Link></li>
            <li><Link to="/student">Student</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Login setUser={setUser} setIsAuth={setIsAuth} />} />
          <Route path="/admin" element={<AdminPage isAuth={isAuth} user={user} />} />
          <Route
            path="/college-management"
            element={<CollegeManagementPage isAuth={isAuth} user={user} />}
          />
          <Route path="/student" element={<StudentPage isAuth={isAuth} user={user} />} />
          <Route path="/unauthorized" element={<Unauthorized />} />
          <Route path="*" element={<h2>Page Not Found</h2>} />
        </Routes>
      </div>
    </Router>
=======
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
>>>>>>> 46304a03dc1ba6a767c32f7f1e503b1c4ff9d640
  );
}

export default App;
<<<<<<< HEAD
=======
>>>>>>> 4fd174d1c5bc9cb8467f4bcc0b94c4ba564b85c1
>>>>>>> 46304a03dc1ba6a767c32f7f1e503b1c4ff9d640
