import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

const Movie = (props) => (
  <div>
    <h1>{ props.title }</h1>
    <MoviePoster poster={ props.poster }/>
  </div>
);

const MoviePoster = (props) => (
  <img className="moviePoster" src={ props.poster } alt={ props.poster } />
);

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired
};

MoviePoster.protoTypes = {
  poster: PropTypes.string.isRequired
};

export default Movie;