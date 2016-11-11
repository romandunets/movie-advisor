import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { bindActionCreators } from 'redux'

import * as movieActions from '../../actions/movieActions'
import MovieList from '../../components/movies/MovieList'

class MoviesPage extends Component {
  componentWillMount() {
    this.props.actions.fetchMovies();
  }

  render() {
    const { movies, message, error } = this.props;
    return (
      <div>
        <h4>{message}</h4>
        <h3>All movies</h3>
        <MovieList movies={ movies } />
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
    error: state.movies.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(movieActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MoviesPage);
