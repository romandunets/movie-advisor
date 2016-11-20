import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import MoviesListItem from './MoviesListItem'

const MoviesList = ({ movies, isAuthenticated }) => {
  return (
    <ul>{ movies.map (movie => <MoviesListItem key={movie.id} movie={movie} isAuthenticated={isAuthenticated} />) }</ul>
  );
}

MovieList.propTypes = {
  movies: PropTypes.array.isRequired
}

export default MoviesList;
