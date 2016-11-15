import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { bindActionCreators } from 'redux'

import * as movieActions from '../../actions/movieActions'
import MovieList from '../../components/movies/MovieList'

class MovieSearchPage extends Component {
  componentWillMount() {
    this.props.actions.searchMovies(this.props.params.keyword);
  }

  componentWillReceiveProps(nextProps){
    //Check if URL params changed
    if (this.props.params.keyword != nextProps.params.keyword){
      this.props.actions.searchMovies(nextProps.params.keyword);
    }
  }

  render() {
    const { movies, message, error, isAuthenticated, params } = this.props;
    return (
      <div>
        <h4>{message}</h4>
        <h3>Search results for {params.keyword}</h3>
        <MovieList movies={ movies } isAuthenticated = { isAuthenticated }  />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    movies: state.movies.movies,
    message: state.movies.message,
    error: state.movies.error,
    isAuthenticated: state.auth.isAuthenticated
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(movieActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieSearchPage);
