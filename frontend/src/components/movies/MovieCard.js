import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';


class MovieCard extends Component {
  componentDidMount() {
    var button = ReactDOM.findDOMNode(this.refs.deleteMovieButton);
    if (button) {
      button.setAttribute('data-toggle', 'modal');
      button.setAttribute('data-target', '.delete-movie-modal');
    }

    var modal = ReactDOM.findDOMNode(this.refs.deleteMovieModal);
    if (modal) {
      modal.setAttribute('tabindex', '-1');
      modal.setAttribute('aria-labelledby', 'Delete movie');
      modal.setAttribute('aria-hidden', 'true');
      modal.setAttribute('data-backdrop', 'false');
    }
  }

  render() {
    const { movie, deleteMovie, isAuthenticated, isAdmin, markAsWatched, deleteMarkAsWatched  } = this.props;
    
    return (
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
              <div className="float-xs-right actions">
                { isAuthenticated && !movie.isWatched &&
                  <Link className="btn btn-sm btn-secondary action" to={`/movies/${movie.id}/watched`}>Watched</Link>
                }
                { isAuthenticated && isAdmin &&
                  <Link to={`/movies/${movie.id}/edit`} role="button" className="btn btn-sm btn-primary action">Edit</Link>
                }
                { isAuthenticated && isAdmin &&
                  <button type="button" ref="deleteMovieButton" className="btn btn-sm btn-danger action">Delete</button>
                }
              </div>
              { isAuthenticated && !movie.isWatched &&
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
              { movie.ageRestriction }+ | { movie.duration } min | { movie.genres && movie.genres.map(g => g.name).join(', ') }
            </div>
          </div>
          <div className="row">
            <div className="col-md-8 plot">
              <p>{ movie.description }</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 properties">
              <p><b>Director:</b> { movie.producer }</p>
              <p><b>Studio:</b> { movie.studio }</p>
            </div>
          </div>
        </div>
        <div className="modal fade delete-movie-modal" ref="deleteMovieModal" role="dialog">
          <div className="modal-dialog modal-sm">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
                <h4 className="modal-title">Delete movie</h4>
              </div>
              <div className="modal-body">
                <p>Do you want to delete { movie.title } movie permanently?</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary float-xs-left" data-dismiss="modal">Cancel</button>
                <button type="button" className="btn btn-danger float-xs-right" onClick={(e) => deleteMovie(movie.id)}>Delete</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieCard;
