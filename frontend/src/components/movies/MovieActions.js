import React from 'react';

const MovieActions = ({ movie, deleteMovie, isAuthenticated }) => {
  if (isAuthenticated) {
    return (
      <div className="row">
        <div className="col-md-12">
          <div className="text-md-right">
            <Link to='#' role="button" className="btn btn-secondary" onClick={deleteMovie(movie.id)}>Delete</Link>
            <Link to={`/movies/${movie.id}/edit`} role="button" className="btn btn-secondary">Edit</Link>
            <Link to={`/movies/${movie.id}/watched`} role="button" className="btn btn-secondary">Watched</Link>
          </div>
        </div>
      </div>
    )
  }
  return null;
}

export default MovieActions;
