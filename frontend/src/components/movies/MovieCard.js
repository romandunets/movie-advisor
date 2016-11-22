import React from 'react';
import { Link } from 'react-router';

import MovieThumbnail from './MovieThumbnail';
import MovieInfo from './MovieInfo';
import MovieActions from './MovieActions';

const MovieCard = ({ movie, deleteMovie, isAuthenticated }) => (
  <div className="row">
    <MovieThumbnail movie={movie} />
    <MovieInfo movie={movie} />
    <MovieActions movie={movie} movie={deleteMovie} movie={isAuthenticated} />
  </div>
)

export default MovieCard;
