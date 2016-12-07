import React, { Component } from 'react';

class MoviesSearchBar extends Component {
  render() {
    return (
      <div className="float-md-left">
        <form className="form-inline">
          <div className="form-group">
            <input className="form-control" type="text" placeholder="Free text search" />
          </div>
          <button type="submit" className="btn btn-primary">Search</button>
        </form>
      </div>
    );
  }
}

export default MoviesSearchBar;
