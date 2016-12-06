import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import MoviesListItem from './MoviesListItem'

const MoviesList = ({ movies, isAuthenticated }) => (
  <div>
    { movies.map (movie => <MoviesListItem key={movie.id} movie={movie} isAuthenticated={isAuthenticated} />) }
  </div>
)

export default MoviesList;
