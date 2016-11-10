import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { bindActionCreators } from 'redux'

import * as movieActions from '../../actions/movieActions'
import MovieList from '../../components/movies/MovieList'

class RecommendedMoviesPage extends Component {
  componentWillMount() {
    this.props.actions.fetchRecommendedMovies();
  }

  render() {
    const { movies, error } = this.props;
    return (
      <div>
        <h3>Recommended movies</h3>
        <MovieList movies={ movies } />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    movies: state.movies.movies,
    error: state.movies.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(movieActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RecommendedMoviesPage);
