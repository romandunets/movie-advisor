import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as movieActions from '../../actions/movieActions';
import MovieForm from '../../components/movies/MovieForm';

class MovieNewPage extends Component {
  componentWillMount() {
    this.props.actions.listGenres();
    this.props.actions.listTags();
  }

  handleSubmit(data) {
    /*const { photos } = this.props.movie;
    var body = new FormData();

    Object.keys(data).forEach(key => {
      if (key != "photos") {
        body.append(key, data[key]);
      }
    });

    for (var i = 0; i < photos.length; i++) {
      body.append("photos", photos[i]);
    }*/

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

    this.props.actions.createMovie(movie);
  }

  handleLoadFromOMDB(title) {
    this.props.actions.loadMovieFromOMDB(title);
  }

  handleAddPhoto(photo) {
    this.props.actions.addPhoto(photo);
  }

  render() {
    const { movie, genres, tags, isLoading } = this.props;
    const initialValues = { ...movie, availableGenres: genres, availableTags: tags };

    return (
      <div className="center-container">
        <div className="center-content">
          <h3 className="title text-center">Create new movie</h3>
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
    isLoading: state.movies.isLoading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(movieActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieNewPage);
