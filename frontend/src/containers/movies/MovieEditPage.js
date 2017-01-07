import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as movieActions from '../../actions/movieActions';
import MessageBox from '../../components/shared/MessageBox';
import MovieForm from '../../components/movies/MovieForm';

class MovieEditPage extends Component {
  componentWillMount() {
    this.props.actions.getMovie(this.props.params.id, this.props.currentUser.id);
    this.props.actions.listGenres();
    this.props.actions.listTags();
  }

  handleSubmit(data) {
    const movie = {
      title: data.title,
      year: data.year,
      studio: data.studio,
      producer: data.producer,
      duration: data.duration,
      ageRestriction: data.ageRestriction,
      coverImage: data.coverImage,
      description: data.description
    }

    if (data.genres.length > 0) {
      movie.genres = Object.keys(data.genres).join(",");
    }

    if (data.tags.length > 0) {
      movie.tags = Object.keys(data.tags).join(",");
    }

    this.props.actions.updateMovie(this.props.params.id, movie);
  }

  handleLoadFromOMDB(title) {
    this.props.actions.loadMovieFromOMDB(title);
  }

  handleAddPhoto(photo) {
    this.props.actions.addPhoto(photo);
  }

  render() {
    const { message, movie, genres, tags, isLoading } = this.props;
    const initialValues = { ...movie, availableGenres: genres, availableTags: tags };

    return (
      <div className="center-container">
        <div className="center-content">
          <h3 className="title text-center">Edit movie</h3>
          <MessageBox message={ message } />
          { !isLoading &&
            <MovieForm onSubmit={ this.handleSubmit.bind(this) } loadFromOMDB={ this.handleLoadFromOMDB.bind(this) } addPhoto={ this.handleAddPhoto.bind(this) } initialValues={ initialValues } />
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    movie: state.movies.movie,
    genres: state.movies.genres,
    tags: state.movies.tags,
    isLoading: state.movies.isLoading,
    message: state.movies.message,
    currentUser: state.auth.currentUser
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(movieActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieEditPage);
