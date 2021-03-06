import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import MoviesListItem from './MoviesListItem';

const MoviesList = ({ movies, isAuthenticated, markAsWatched, deleteMarkAsWatched }) => (
  <div>
    { movies.map (movie => <MoviesListItem key={movie.id} movie={movie} isAuthenticated={isAuthenticated} markAsWatched={markAsWatched} deleteMarkAsWatched={deleteMarkAsWatched} />) }
  </div>
)

export default MoviesList;
