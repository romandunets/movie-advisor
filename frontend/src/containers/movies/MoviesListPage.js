import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';

import * as movieActions from '../../actions/movieActions';
import MoviesList from '../../components/movies/MoviesList';
import Pagination from '../../components/shared/Pagination';

class MoviesListPage extends Component {
  componentWillMount() {
    this.props.actions.listMovies();
  }

  handlePageSelect(page) {
    console.log(page);
  }

  render() {
    const { movies, message, isAuthenticated, isAdmin } = this.props;
    return (
      <div>
        <div className="header">
          <Pagination page={1} onSelect={this.handlePageSelect} />
          { isAuthenticated && isAdmin &&
            <div className="actions text-md-right">
              <Link to='/movies/new' role="button" className="btn btn-primary btn-sm">New movie</Link>
            </div>
          }
        </div>
        <MoviesList movies={movies} isAuthenticated={isAuthenticated} />
        <Pagination page={1} onSelect={this.handlePageSelect} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    movies: state.movies.movies,
    message: state.movies.message,
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
