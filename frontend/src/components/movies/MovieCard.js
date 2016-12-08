import React from 'react';

import MovieThumbnail from './MovieThumbnail';
import MovieInfo from './MovieInfo';
import MovieActions from './MovieActions';

const MovieCard = ({ movie, deleteMovie, isAuthenticated }) => (
  <div className="row">
    <MovieThumbnail movie={movie} />
    <MovieInfo movie={movie} isAuthenticated={isAuthenticated} />
    <MovieActions movie={movie} deleteMovie={deleteMovie} isAuthenticated={isAuthenticated} />
  </div>
)

export default MovieCard;
