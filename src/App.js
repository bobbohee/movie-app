import React from 'react';
import './App.css';
import Movie from './Movie';

const movies = [
  {
    title: 'The Avengers',
    poster: 'https://upload.wikimedia.org/wikipedia/en/f/f9/TheAvengers2012Poster.jpg'
  }, 
  {
    title: 'Avengers: Age of Ultron',
    poster: 'http://1.bp.blogspot.com/-On4arHxwtdk/VO8rjBg2s2I/AAAAAAAAANs/P1Sykk2aQXQ/s1600/Avengers%2B2%2BAge%2Bof%2BUltron%2BPoster%2B(2).jpg'
  }, 
  {
    title: 'Avengers: Infinity War',
    poster: 'https://upload.wikimedia.org/wikipedia/en/4/4d/Avengers_Infinity_War_poster.jpg'
  }, 
  {
    title: 'Avengers: Endgame',
    poster: 'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg'
  }
];

const App = () => (
  <div className="App">
    {movies.map((movie, index) => (
      <Movie title={movie.title} poster={movie.poster} key={index} />
    ))}
  </div>
);

export default App;
