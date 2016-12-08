import React from 'react';
import { Link } from 'react-router';

const MovieInfo = ({ movie, deleteMovie, isAuthenticated, isAdmin }) => (
  <div className="col-md-9">
    <div className="row">
      <div className="col-md-6">
        <h4>
          { movie.title }
          <span className="text-muted"> ({ movie.year })</span>
        </h4>
      </div>
      <div className="col-md-6">
        <div className="float-xs-right">
          { isAuthenticated &&
            <Link to={`/movies/${movie.id}/watched`} role="button" className="btn btn-sm btn-secondary action">Watched</Link>
          }
          { isAuthenticated && isAdmin &&
            <Link to={`/movies/${movie.id}/edit`} role="button" className="btn btn-sm btn-primary action">Edit</Link>
          }
          { isAuthenticated && isAdmin &&
            <Link to='#' role="button" className="btn btn-sm btn-danger action" onClick={(e) => deleteMovie(movie.id)}>Delete</Link>
          }
        </div>
        { isAuthenticated &&
          <div className="float-xs-right">
            <span className="match">&#10084;</span>
            <span className="rating">{ movie.match }%</span>
          </div>
        }
        <div className="float-xs-right">
          <span className="star">&#9733;</span>
          <span className="rating">{ movie.rating }</span>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-md-12">
        { movie.age_restriction } | { movie.duration } min | { movie.genres && movie.genres.join(', ') }
      </div>
    </div>
    <div className="row">
      <div className="col-md-8 plot">
        <p>{ movie.description }</p>
      </div>
    </div>
    <div className="row">
      <div className="col-md-12 properties">
        <p><b>Director:</b> { movie.director }</p>
        <p><b>Studio:</b> { movie.studio }</p>
      </div>
    </div>
  </div>
)

export default MovieInfo;