import React, { useEffect, useState } from 'react'; // Import useState
import { connect } from 'react-redux';
import { setMovies } from './actions/movies';
import { setSearchResults } from './actions/search';
import './App.css';
import MovieCard from './MovieCard';

function App({ movies, setMovies, searchResults, setSearchResults }) {
 
const API_URL = "https://api.themoviedb.org/3/movie/popular?api_key=381cf5ca96fa76d872343963435afad7";
const API_SEARCH = "https://api.themoviedb.org/3/search/movie?api_key=381cf5ca96fa76d872343963435afad7&query=";

  const [term, setTerm] = useState('');

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setMovies(data.results));
  }, [setMovies]);

  const handleSearch = (e) => {
    e.preventDefault();
    fetch(API_SEARCH + term)
      .then((res) => res.json())
      .then((data) => setSearchResults(data.results));
  };

  const handleInputChange = (e) => {
    setTerm(e.target.value);
  };

  return (
    <div className='App'>
      <div className='title'>
          <h1>ALEXLIX</h1>
        </div>
      <div className='search_nav'>
        <div className='search_box'>
          <form onSubmit={handleSearch}>
            <input onChange={handleInputChange} />
            <button>Search</button>
          </form>
        </div>
      </div>
      <div className='movies'>
        {(term ? searchResults : movies).map((movie) => (
          <MovieCard key={movie.id} {...movie} />
        ))}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  movies: state.movies,
  searchResults: state.searchResults,
});

const mapDispatchToProps = {
  setMovies,
  setSearchResults,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
