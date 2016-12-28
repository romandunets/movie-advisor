import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import MoviesListItemSimple from './MoviesListItemSimple'

const MoviesList = ({ movies, isAuthenticated }) => (
  <div>
    { movies.map (movie => <MoviesListItemSimple key={movie.id} movie={movie} isAuthenticated={isAuthenticated} />) }
  </div>
)

export default MoviesList;
