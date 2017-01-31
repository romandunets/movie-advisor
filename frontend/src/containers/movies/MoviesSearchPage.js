import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as movieActions from '../../actions/movieActions';
import MoviesList from '../../components/movies/MoviesList';

class MoviesSearchPage extends Component {
  componentWillMount() {
    this.props.actions.searchMovies(this.props.search.keyword);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.search.keyword != nextProps.search.keyword){
      this.props.actions.searchMovies(nextProps.search.keyword);
    }
  }

  render() {
    const { movies, isAuthenticated, search } = this.props;
    return (
      <div>
        <h3>Search results for {search.keyword}</h3>
        <MoviesList movies={movies} isAuthenticated={isAuthenticated} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    movies: state.movies.movies,
    isAuthenticated: state.auth.isAuthenticated
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(movieActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MoviesSearchPage);
