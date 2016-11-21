import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as movieActions from '../../actions/movieActions'
import MovieForm from '../../components/movies/MovieForm'

class MovieEditPage extends Component {
  componentWillMount() {
    this.props.actions.getMovie(this.props.params.id);
  }

  handleSubmit(movie) {
    this.props.actions.updateMovie(movie);
  }

  render() {
    const { movie, isLoading } = this.props;
    const formValues = { initialValues: movie }

    if (!isLoading) {
      return (
        <MovieForm onSubmit={ this.handleSubmit.bind(this) } {...formValues} />
      );
    }

    return null;
  }
}

const mapStateToProps = (state) => {
  return {
    movie: state.movies.movie,
    isLoading: state.movies.isLoading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(movieActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieEditPage);
