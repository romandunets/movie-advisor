import React, { Component } from 'react';
import { Link } from 'react-router';

class MoviesListItem extends Component {
  render() {
    const { movie, isAuthenticated } = this.props;

    return (
      <div className="list-item">
        <div className="thumbnail-box col-md-2">
          <Link to={`/movies/${movie.id}`}>
            <img src={ movie.coverImage } className="img-fluid"/>
          </Link>
        </div>
        <div className="col-md-10">
          <div className="row">
            <div className="col-md-6">
              <h4>
                <Link to={`/movies/${movie.id}`}>{ movie.title }</Link>
                <span className="text-muted"> ({ movie.year })</span>
              </h4>
            </div>
            <div className="col-md-6">
              <div className="float-xs-right actions">
                { isAuthenticated &&
                  <Link to={`/movies/${movie.id}/watched`} role="button" className="btn btn-sm btn-secondary action">Watched</Link>
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
              { movie.ageRestriction } | { movie.duration } min | { movie.genres && movie.genres.map(g => g.name).join(', ') }
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
      </div>
    );
  }
}

export default MoviesListItem;
