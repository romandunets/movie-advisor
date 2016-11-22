import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { bindActionCreators } from 'redux'

import * as movieActions from '../../actions/movieActions'
import MovieCard from '../../components/movies/MovieCard'

class MoviePage extends Component {
  componentWillMount() {
    this.props.actions.getMovie(this.props.params.id);
  }

  deleteMovie(id) {
    this.props.actions.deleteMovie(id);
  }

  render() {
    const { movie, isLoading, isAuthenticated } = this.props;

    if (!isLoading) {
      return (
        <div>
          <MovieCard movie={movie} isAuthenticated={isAuthenticated} deleteMovie={this.deleteMovie.bind(this, movie.id)} />
        </div>
      );
    }

    return null;
  }
}

const mapStateToProps = (state) => {
  return {
    movie: state.movies.movie,
    isAuthenticated: state.auth.isAuthenticated
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(movieActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MoviePage);

