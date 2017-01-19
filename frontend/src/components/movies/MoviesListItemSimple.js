import React, { Component } from 'react';
import { Link } from 'react-router';

class MoviesListItemSimple extends Component {
  render() {
    const { movie, isAuthenticated } = this.props;

    return (
      <div className="list-item">
        <div className="thumbnail-box">
          <Link to={`/movies/${movie.id}`}>
            <img src={ movie.coverImage } className="img-fluid simple"/>
          </Link>
        </div>
        <div className="content-box">
          <div className="col-md-6">
            <h4>
              <Link to={`/movies/${movie.id}`}>{ movie.title }</Link>
              <span className="text-muted"> ({ movie.year })</span>
            </h4>
          </div>
          <div className="col-md-6">
            <div className="float-xs-right">
              <span className="star">&#9733;</span>
              <span className="rating">{ movie.rating }</span>
            </div>
          </div>
          <div className="col-md-8 plot">
            <p>{ movie.description }</p>
          </div>
        </div>
      </div>
    );
  }
}

export default MoviesListItemSimple;
