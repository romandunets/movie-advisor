import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux';
import { browserHistory, Link } from 'react-router';
import { bindActionCreators } from 'redux';

import * as movieActions from '../../actions/movieActions';
import ProgressBar from '../../components/shared/ProgressBar';
import MoviesList from '../../components/movies/MoviesList';
import MoviesSearchBar from '../../components/movies/MoviesSearchBar';
import MoviesActionBar from '../../components/movies/MoviesActionBar';
import Pagination from '../../components/shared/Pagination';

class RecommendedMoviesListPage extends Component {
  componentWillMount() {
    this.props.actions.listRecommendedMovies(this.props.currentUser.id, { page: this.props.location.query.page });
  }

  handleSearch(search) {
    this.props.actions.listRecommendedMovies(this.props.currentUser.id, search);
    browserHistory.push({ pathname: this.props.location.pathname, query: { ...search }});
  }

  handlePageSelect(page) {
    const search = this.props.location.query.search;
    this.props.actions.listRecommendedMovies(this.props.currentUser.id, { search, page });
    browserHistory.push({ pathname: this.props.location.pathname, query: { search, page }});
  }

  render() {
    const { movies, isLoading, total, isAuthenticated, isAdmin } = this.props;
    const page = this.props.location.query.page;

    if (isLoading) {
      return <ProgressBar />;
    } else {
      return (
        <div>
          <div className="header"></div>
          <MoviesList movies={movies} isAuthenticated={isAuthenticated} />
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    movies: state.movies.movies,
    isLoading: state.movies.isLoading,
    total: state.movies.pages,
    currentUser: state.auth.currentUser,
    isAuthenticated: state.auth.isAuthenticated,
    isAdmin: state.auth.isAdmin
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(movieActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RecommendedMoviesListPage);
