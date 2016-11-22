import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import MoviesListItem from './MoviesListItem'

const MoviesList = ({ movies, isAuthenticated }) => (
  <ul>{ movies.map (movie => <MoviesListItem key={movie.id} movie={movie} isAuthenticated={isAuthenticated} />) }</ul>
)

MoviesList.propTypes = {
  movies: PropTypes.array.isRequired
}

export default MoviesList;
