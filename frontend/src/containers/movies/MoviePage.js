import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as movieActions from '../../actions/movieActions';
import MovieCard from '../../components/movies/MovieCard';

class MoviePage extends Component {
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
          <MovieCard movie={movie} deleteMovie={this.deleteMovie.bind(this, movie.id)} isAuthenticated={isAuthenticated} isAdmin={isAdmin} />
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

export default connect(mapStateToProps, mapDispatchToProps)(MoviePage);

