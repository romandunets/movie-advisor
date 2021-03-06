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

class MoviesListPage extends Component {
  componentWillMount() {
    this.props.actions.listMovies(this.props.currentUser.id, { ...this.props.location.query });
  }

  handleSearch(search) {
    this.props.actions.listMovies(this.props.currentUser.id, search);
    browserHistory.push({ pathname: this.props.location.pathname, query: { ...search }});
  }

  handlePageSelect(page) {
    const search = this.props.location.query.search;
    this.props.actions.listMovies(this.props.currentUser.id, { search, page });
    browserHistory.push({ pathname: this.props.location.pathname, query: { search, page }});
  }

  render() {
    const { movies, total, isAuthenticated, isAdmin, isLoading } = this.props;
    const { free_search, page } = this.props.location.query;

    if (isLoading) {
      return <ProgressBar />;
    }
    else {
      return (
        <div>
          <div className="header">
            <MoviesSearchBar onSubmit={ this.handleSearch.bind(this) } initialValues={{ free_search }} />
            <Pagination page={page} total={total} onPageSelect={this.handlePageSelect.bind(this)} />
            <MoviesActionBar isAuthenticated={isAuthenticated} isAdmin={isAdmin} />
          </div>
          <MoviesList movies={movies} isAuthenticated={isAuthenticated} />
          <div>
            <Pagination className="text-center" page={page} total={total} onPageSelect={this.handlePageSelect.bind(this)} />
          </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(MoviesListPage);
