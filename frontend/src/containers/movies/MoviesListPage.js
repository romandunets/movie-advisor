import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux';
import { browserHistory, Link } from 'react-router';
import { bindActionCreators } from 'redux';

import * as movieActions from '../../actions/movieActions';
import MoviesList from '../../components/movies/MoviesList';
import MoviesSearchBar from '../../components/movies/MoviesSearchBar';
import MoviesActionBar from '../../components/movies/MoviesActionBar';
import Pagination from '../../components/shared/Pagination';

class MoviesListPage extends Component {
  componentWillMount() {
    this.props.actions.listMovies({ ...this.props.location.query });
  }

  handleSearch(search) {
    this.props.actions.listMovies(search);
    browserHistory.push({ pathname: this.props.location.pathname, query: { ...search }});
  }

  handlePageSelect(page) {
    const search = this.props.location.query.search;
    this.props.actions.listMovies({ search, page });
    browserHistory.push({ pathname: this.props.location.pathname, query: { search, page }});
  }

  render() {
    const { movies, message, total, isAuthenticated, isAdmin } = this.props;
    const page = this.props.location.query.page;

    return (
      <div>
        <div className="header">
          <MoviesSearchBar onSubmit={ this.handleSearch.bind(this) } initialValues={{ search: this.props.location.query.search }} />
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

const mapStateToProps = (state) => {
  return {
    movies: state.movies.movies,
    message: state.movies.message,
    total: state.movies.pages,
    isAuthenticated: state.auth.isAuthenticated,
    isAdmin: state.auth.currentUser.role == 'admin'
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(movieActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MoviesListPage);
