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
        <h3>All movies</h3>
        <MoviesList movies={movies} isAuthenticated={isAuthenticated} />
        <div className="text-md-right">
          <Link to='/movies/new' role="button" className="btn btn-secondary">Add movie</Link>
        </div> 
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