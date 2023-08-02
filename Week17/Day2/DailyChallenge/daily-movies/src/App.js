
import React from 'react';
import MovieList from './components/movieList';
import MovieDetails from './components/movieDetails';
import './App.css';

const App = () => {
  return (
    <div className="container">
      <div className="movie-list-container">
        <h1>Movie List</h1>
        <MovieList />
      </div>
      <div className="movie-details">
        <h2>Movie Details</h2>
        <MovieDetails />
      </div>
    </div>
  );
};

export default App;