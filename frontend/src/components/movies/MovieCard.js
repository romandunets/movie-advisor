import React from 'react';

import MovieThumbnail from './MovieThumbnail';
import MovieInfo from './MovieInfo';
import MovieActions from './MovieActions';

const MovieCard = ({ movie, deleteMovie, isAuthenticated, isAdmin }) => (
  <div className="row">
    <MovieThumbnail movie={movie} />
    <MovieInfo movie={movie} deleteMovie={deleteMovie} isAuthenticated={isAuthenticated} isAdmin={isAdmin} />
    <MovieActions movie={movie} deleteMovie={deleteMovie} isAuthenticated={isAuthenticated} />
  </div>
)

export default MovieCard;
