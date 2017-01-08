import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux';
import { browserHistory, Link } from 'react-router';
import { bindActionCreators } from 'redux';

import * as movieActions from '../../actions/movieActions';
import MoviesList from '../../components/movies/MoviesList';
import MoviesSearchBar from '../../components/movies/MoviesSearchBar';
import MoviesActionBar from '../../components/movies/MoviesActionBar';
import Pagination from '../../components/shared/Pagination';

class WatchedMoviesListPage extends Component {
  componentWillMount() {
    this.props.actions.listWatchedMovies(this.props.currentUser.id, { page: this.props.location.query.page });
  }

  handleSearch(search) {
    this.props.actions.listWatchedMovies(this.props.currentUser.id,search);
    browserHistory.push({ pathname: this.props.location.pathname, query: { ...search }});
  }

  handlePageSelect(page) {
    const search = this.props.location.query.search;
    this.props.actions.listWatchedMovies(this.props.currentUser.id, { search, page });
    browserHistory.push({ pathname: this.props.location.pathname, query: { search, page }});
  }

  render() {
    const { movies, message, total, isLoading, isAuthenticated, isAdmin } = this.props;
    const page = this.props.location.query.page;

    if (!isLoading) {
      if (movies.length > 0) {
        return (
          <div>
            <div className="header">
              <MoviesSearchBar onSubmit={ this.handleSearch.bind(this) } />
              <Pagination page={page} total={total} onPageSelect={this.handlePageSelect.bind(this)} />
            </div>
            <MoviesList movies={movies} isAuthenticated={isAuthenticated} />
            <div>
              <Pagination className="text-center" page={page} total={total} onPageSelect={this.handlePageSelect.bind(this)} />
            </div>
          </div>
        );
      }
      else {
        return (
          <div>
            <h3 className="title">You haven't watched any movies yet.</h3>
            <p className="text-md-center">Please check recommended movies for you <Link to={`/movies/recommended`}>here</Link>.</p>
          </div>
        );
      }
    }

    return null;
  }
}

const mapStateToProps = (state) => {
  return {
    movies: state.movies.movies,
    message: state.movies.message,
    total: state.movies.pages,
    isLoading: state.movies.isLoading,
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

export default connect(mapStateToProps, mapDispatchToProps)(WatchedMoviesListPage);
