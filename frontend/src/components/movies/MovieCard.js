import React from 'react';
import { Link } from 'react-router';

import MovieInfo from './MovieInfo';

const MovieDetail = ({ movie, deleteMovie, isAuthenticated }) => {
  <div>
    <div className="row">
      <div className="thumbnail col-md-3">
        <img src={ movie.image } className="img-fluid img-rounded" />
      </div>
      <MovieInfo />
    { isAuthenticated &&
      <div className="row">
        <div className="col-md-12">
          <div className="text-md-right">
            <Link to='#' role="button" className="btn btn-secondary" onClick={deleteMovie(movie.id)}>Delete</Link>
            <Link to={`/movies/${movie.id}/edit`} role="button" className="btn btn-secondary">Edit</Link> 
            <Link to={`/movies/${movie.id}/watched`} role="button" className="btn btn-secondary">Watched</Link>
          </div>
        </div>
      </div>
    }
  </div>
}

export default MovieCard;
