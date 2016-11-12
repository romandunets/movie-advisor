import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { bindActionCreators } from 'redux'

import * as movieActions from '../../actions/movieActions'
import MovieDetail from '../../components/movies/MovieDetail'

class MovieDetailPage extends Component {
  deleteMovie(id) {
    this.props.actions.deleteMovie(id);
  }

  componentWillMount() {
    this.props.actions.getMovie(this.props.params.id);
  }

  render() {
    const { movie, error } = this.props;
    return (
      <div>
        <MovieDetail movie={ movie } deleteMovie={ this.deleteMovie.bind(this, movie.id) } />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    movie: state.movies.movie,
    error: state.movies.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(movieActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetailPage);

