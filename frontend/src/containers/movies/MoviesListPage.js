import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { bindActionCreators } from 'redux'

import * as movieActions from '../../actions/movieActions'
import MoviesList from '../../components/movies/MoviesList'

class MoviesListPage extends Component {
  componentWillMount() {
    this.props.actions.listMovies();
  }

  render() {
    const { movies, message, isAuthenticated } = this.props;
    return (
      <div>
        <h4>{message}</h4>
        <div className="header">
          <h3>All movies</h3>
          <div className="actions text-md-right">
            <Link to='/movies/new' role="button" className="btn btn-primary btn-sm">New movie</Link>
          </div>
        </div>
        <MoviesList movies={movies} isAuthenticated={isAuthenticated} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    movies: state.movies.movies,
    message: state.movies.message,
    isAuthenticated: state.auth.isAuthenticated
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(movieActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MoviesListPage);
