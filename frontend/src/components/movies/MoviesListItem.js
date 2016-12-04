import React, { Component } from 'react';
import { Link } from 'react-router';
import StarRatingComponent from 'react-star-rating-component';

class MoviesListItem extends Component {
  onStarClick(nextValue, prevValue, name) {
    console.log(nextValue);
  }

  render() {
    const { movie, isAuthenticated } = this.props;

    return (
      <div className="list-item">
        <div className="thumbnail col-md-2">
          <Link to={`/movies/${movie.id}`}>
            <img src={ movie.image } className="img-fluid"/>
          </Link>
        </div>
        <div className="col-md-10">
          <div className="row">
            <div className="col-md-6">
              <h4>
                <Link to={`/movies/${movie.id}`}>{ movie.title } ({ movie.year })</Link>
              </h4>
            </div>
            <div className="col-md-6 text-md-right">
              <StarRatingComponent name={`movie_rating_${movie.id}`} value={movie.rating} editing={true} onStarClick={this.onStarClick.bind(this)} />
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              { movie.age_restriction } | { movie.duration } min | { movie.genres.join(', ') }
            </div>
          </div>
          <div className="row">
            <div className="col-md-8 plot">
              <p>{ movie.description }</p>
            </div>
          </div>
          <div className="row">
            <div className="text-md-right">
              { isAuthenticated &&
                <Link to={`/movies/${movie.id}/watched`} role="button" className="btn btn-secondary">Watched</Link>
              }
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
