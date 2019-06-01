import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

const Movie = (props) => (
  <div>
    <h1>{props.title}</h1>
    <p><MovieGenres genres={props.genres} /></p>
    <MoviePoster title={props.title} poster={props.poster} />
  </div>
);

const MovieGenres = (props) => {
  const gener = props.genres.map((gener, index) =>
    <span key={index}>{gener} / </span>
  );
  return gener;
}

const MoviePoster = (props) => (
  <img className="moviePoster" src={props.poster} alt={props.title} />
);

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  genres: PropTypes.array.isRequired,
  poster: PropTypes.string.isRequired
};

MovieGenres.propTypes = {
  genres: PropTypes.array.isRequired,
}

MoviePoster.protoTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired
};

export default Movie;