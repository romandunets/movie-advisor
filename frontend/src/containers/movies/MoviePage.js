import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { bindActionCreators } from 'redux'

import * as movieActions from '../../actions/movieActions'
import MovieCard from '../../components/movies/MovieDetail'

class MoviePage extends Component {
  componentWillMount() {
    this.props.actions.getMovie(this.props.params.id);
  }

  deleteMovie(id) {
    this.props.actions.deleteMovie(id);
  }

  render() {
    const { movie, isAuthenticated } = this.props;
    return (
      <div>
        <MovieDetail movie={movie} isAuthenticated={isAuthenticated} deleteMovie={this.deleteMovie.bind(this, movie.id)} />
      </div>
    );
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

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetailPage);

