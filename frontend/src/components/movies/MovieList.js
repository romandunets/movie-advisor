import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import MovieListItem from './MovieListItem'

const MovieList = ({ movies, isAuthenticated }) => {
  return (
    <ul>{ movies.map (movie => <MovieListItem key={movie.id} movie={movie} isAuthenticated={ isAuthenticated } />) }</ul>
  );
}

MovieList.propTypes = {
  movies: PropTypes.array.isRequired
}

export default MovieList
