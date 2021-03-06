import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as movieActions from '../../actions/movieActions';
import MovieWatched from '../../components/movies/MovieWatched';

class MoviePageWatched extends Component {
  componentWillMount() {
    this.props.actions.getMovie(this.props.params.id, this.props.currentUser.id);
  }

  rateMovie(rating) {
    this.props.actions.rateMovie(this.props.currentUser.id, this.props.movie.id, rating);
  }

  render() {
    const { movie, isLoading, isAuthenticated, currentUser } = this.props;

    if (!isLoading) {
      return (
        <div>
          <MovieWatched movie={movie} rateMovie={this.rateMovie.bind(this)} isAuthenticated={isAuthenticated} />
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
    currentUser: state.auth.currentUser
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(movieActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MoviePageWatched);

