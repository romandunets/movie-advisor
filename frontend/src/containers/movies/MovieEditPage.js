import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as movieActions from '../../actions/movieActions'
import MovieForm from '../../components/movies/MovieForm'
import { reset } from 'redux-form';

class MovieEditPage extends Component {
  componentWillMount() {
    this.props.actions.getMovie(this.props.params.id);
  }

  handleSubmit(movie) {
    this.props.actions.updateMovie(movie);
  }

  render() {
    const { movie } = this.props;
    const formValues = { initialValues: movie }

    if (Object.keys(movie).length > 0) {
      return (
        <MovieForm onSubmit={ this.handleSubmit.bind(this) } {...formValues} />
      );
    }
    else {
      return null;
    }
  }
}

const mapStateToProps = (state) => {
  return {
    movie: state.movies.movie
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(movieActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieEditPage);
