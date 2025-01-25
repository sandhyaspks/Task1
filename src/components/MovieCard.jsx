// src/components/MovieCard.js
import React from 'react';

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <img src={movie.image} alt={movie.title} className="movie-image" />
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>Genre: {movie.genre}</p>
        <p>Rating: {movie.rating}</p>
      </div>
    </div>
  );
};

export default MovieCard;
