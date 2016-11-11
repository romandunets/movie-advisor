import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as movieActions from '../../actions/movieActions'
import MovieForm from '../../components/movies/MovieForm'

class MovieNewPage extends Component {
  handleSubmit(movie) {
    this.props.actions.createMovie(movie);
  }

  render() {
    return (
      <MovieForm onSubmit={ this.handleSubmit.bind(this) } />
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(movieActions, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(MovieNewPage);
