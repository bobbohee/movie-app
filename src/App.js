// render: componentWillMount -> render -> componentDidMount

// update: componentWillReceiveProps -> shouldComponentUpdate -> componentWillUpdate -> render -> componen

import React, {useState, useEffect} from 'react';
import './App.css';
import Movie from './Movie';

const App = () => {
  let [movies, setMovies] = useState();

  useEffect(() => {
    _getMovies();
    // eslint-disable-next-line
  }, []);

  const _renderMovies = () => {
    const movie = movies.map((movie) => 
      <Movie title={movie.title} poster={movie.medium_cover_image} genres={movie.genres} key={movie.id} />
    );
    return movie;
  }

  const _getMovies = async () => {
    const movies = await _callApi();
    setMovies(movies);
  }

  const _callApi = () => {
    return fetch('https://yts.am/api/v2/list_movies.json?sort_by=rating')
    .then((response) => response.json())
    .then((json) => json.data.movies)
    .catch((err) => console.log(err));
  }

  return (
    <div className="App">
      {movies ? _renderMovies() : 'Loading'}
    </div>
  );
}

export default App;