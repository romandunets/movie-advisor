import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';
import StarRatingComponent from 'react-star-rating-component';


class MovieWatched extends Component {
  constructor(props){
    super(props);
    this.state = {rating: 0};
  }

  onStarClick(nextValue, prevValue, name) {
    this.setState({rating: nextValue});
  }

  render() {
    const { movie, rateMovie, isAuthenticated } = this.props;
    return (
      <div className="row">
        <div className="row">
          <div className="thumbnail-box col-md-3">
            <img src={ movie.coverImage } className="img-fluid"/>
          </div>
          <div className="col-md-9">
            <div className="row">
              <div className="col-md-6">
                <h4>
                  { movie.title }
                  <span className="text-muted"> ({ movie.year })</span>
                </h4>
              </div>
              <div className="col-md-6">
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
            { isAuthenticated &&
              <div className="row ratingrow">
                <div className="col-md-12">
                  <h5>Please rate this movie:</h5>
                </div>
                <div className="col-md-12">
                  <StarRatingComponent
                      name="rate1"
                      starCount={5}
                      value={this.state.rating}
                      renderStarIcon={() => <span className="ratingstars">&#9733;</span>}
                      onStarClick={this.onStarClick.bind(this)}
                    />
                </div>
                <div className="col-md-12">
                  <button type="button" ref="rateMovieButton" className="btn btn-primary action row" onClick={() => rateMovie(this.state.rating)}>Submit</button>
                </div>
              </div>
            }
          </div>
        </div>
      </div>
    );
  }
}

export default MovieWatched;
