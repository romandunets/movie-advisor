import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux';
import { browserHistory, Link } from 'react-router';
import { bindActionCreators } from 'redux';

import * as movieActions from '../../actions/movieActions';
import MoviesList from '../../components/movies/MoviesList';
import MoviesSearchBar from '../../components/movies/MoviesSearchBar';
import Pagination from '../../components/shared/Pagination';

class MoviesListPage extends Component {
  componentWillMount() {
    this.props.actions.listMovies({ page: this.props.location.query.page });
  }

  handleSearch(search) {
    this.props.actions.listMovies(search);
    browserHistory.push({ pathname: this.props.location.pathname, query: { ...search }});
  }

  handlePageSelect(e, page) {
    e.preventDefault();
    const search = this.props.location.query.search;
    this.props.actions.listMovies({ page, search });
    browserHistory.push({ pathname: this.props.location.pathname, query: { ...search, page }});
  }

  render() {
    const { movies, message, total, isAuthenticated, isAdmin } = this.props;
    const page = this.props.location.query.page;

    return (
      <div>
        <div className="header">
          <MoviesSearchBar onSubmit={ this.handleSearch.bind(this) } />
          <Pagination page={page} total={total} location={location} onPageSelect={this.handlePageSelect.bind(this)} />
          { isAuthenticated && isAdmin &&
            <div className="actions text-md-right">
              <Link to='/movies/new' role="button" className="btn btn-primary btn-sm">New movie</Link>
            </div>
          }
        </div>
        <MoviesList movies={movies} isAuthenticated={isAuthenticated} />
        <Pagination className="text-center" page={page} total={total} location={location} onPageSelect={this.handlePageSelect.bind(this)} />
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
