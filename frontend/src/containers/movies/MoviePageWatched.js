import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as movieActions from '../../actions/movieActions';
import MovieWatched from '../../components/movies/MovieWatched';

class MoviePageWatched extends Component {
  componentWillMount() {
    this.props.actions.getMovie(this.props.params.id);
  }

  deleteMovie(id) {
    this.props.actions.deleteMovie(id);
  }

  render() {
    const { movie, isLoading, isAuthenticated, isAdmin } = this.props;

    if (!isLoading) {
      return (
        <div>
          <MovieWatched movie={movie} isAuthenticated={isAuthenticated} />
        </div>
      );
    }

    return null;
  }
}

const mapStateToProps = (state) => {
  return {
    movie: state.movies.movie,
    isLoading: state.movies.isLoading,
    isAuthenticated: state.auth.isAuthenticated,
    isAdmin: state.auth.currentUser.roleName == 'admin'
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(movieActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MoviePageWatched);

