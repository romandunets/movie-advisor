import React, { Component } from 'react';
import { Link } from 'react-router';

class MoviesActionBar extends Component {
  render() {
    const { isAuthenticated, isAdmin } = this.props;

    return (
      <div className="actions text-md-right">
        { isAuthenticated && isAdmin && <Link to='/movies/new' role="button" className="btn btn-primary btn-sm">New movie</Link> }
      </div>
    );
  }
}

export default MoviesActionBar;
