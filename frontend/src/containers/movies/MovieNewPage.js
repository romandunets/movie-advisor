import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as movieActions from '../../actions/movieActions';
import MessageBox from '../../components/shared/MessageBox';
import MovieForm from '../../components/movies/MovieForm';

class MovieNewPage extends Component {
  handleSubmit(movie) {
    this.props.actions.createMovie(movie);
  }

  handleLoadFromOMDB(title) {
    this.props.actions.loadMovieFromOMDB(title);
  }

  render() {
    const { message, movie } = this.props;
    const formValues = { initialValues: movie };

    return (
      <div className="center-container">
        <div className="center-content">
          <h3 className="title text-center">Create new movie</h3>
          <MessageBox message={ message } />
          <MovieForm onSubmit={ this.handleSubmit.bind(this) } loadFromOMDB={ this.handleLoadFromOMDB.bind(this) } />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    movie: state.movies.movie,
    message: state.auth.message
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(movieActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieNewPage);
