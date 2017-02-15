import { browserHistory } from 'react-router';

import * as types from '../actions/actionTypes';
import * as notificationActions from './notificationActions';
import MovieApi from '../api/MovieApi';

export function listMovies(userId, query) {
  return function(dispatch) {
    dispatch(listMoviesRequest());
    MovieApi.listMovies(userId,query)
      .then(function (response) {
        dispatch(listMoviesSuccess(response.data));
      })
      .catch(function () {
        dispatch(listMoviesFailure());
      });
  }
}

function listMoviesRequest() {
  return function(dispatch) {
    dispatch({ type: types.LIST_MOVIES_REQUEST });
    dispatch(notificationActions.clear());
  }
}

function listMoviesSuccess(movies) {
  return {
    type: types.LIST_MOVIES_SUCCESS,
    payload: { movies }
  }
}

function listMoviesFailure() {
  return function(dispatch) {
    dispatch({ type: types.LIST_MOVIES_FAILURE });
    dispatch(notificationActions.error('Getting movies failed'));
  }
}

export function listRecommendedMovies(userId, query) {
  return function(dispatch) {
    dispatch(listRecommendedMoviesRequest());
    MovieApi.listRecommendedMovies(userId, query)
      .then(function (response) {
        dispatch(listRecommendedMoviesSuccess(response.data));
      })
      .catch(function () {
        dispatch(listRecommendedMoviesFailure());
      });
  }
}

function listRecommendedMoviesRequest() {
  return function(dispatch) {
    dispatch({ type: types.LIST_RECOMMENDED_MOVIES_REQUEST });
    dispatch(notificationActions.clear());
  }
}

function listRecommendedMoviesSuccess(movies) {
  return {
    type: types.LIST_RECOMMENDED_MOVIES_SUCCESS,
    payload: { movies }
  }
}

function listRecommendedMoviesFailure() {
  return function(dispatch) {
    dispatch({ type: types.LIST_RECOMMENDED_MOVIES_FAILURE });
    dispatch(notificationActions.error('Getting recommended movies failed'));
  }
}

export function listWatchedMovies(userId, query) {
  return function(dispatch) {
    dispatch(listWatchedMoviesRequest());
    MovieApi.listWatchedMovies(userId, query)
      .then(function (response) {
        dispatch(listWatchedMoviesSuccess(response.data));
      })
      .catch(function () {
        dispatch(listWatchedMoviesFailure());
      });
  }
}

function listWatchedMoviesRequest() {
  return function(dispatch) {
    dispatch({ type: types.LIST_WATCHED_MOVIES_REQUEST });
    dispatch(notificationActions.clear());
  }
}

function listWatchedMoviesSuccess(movies) {
  return {
    type: types.LIST_WATCHED_MOVIES_SUCCESS,
    payload: { movies }
  }
}

function listWatchedMoviesFailure() {
  return function(dispatch) {
    dispatch({ type: types.LIST_WATCHED_MOVIES_FAILURE });
    dispatch(notificationActions.error('Getting watched movies failed'));
  }
}

export function getMovie(id, userId) {
  return function(dispatch) {
    dispatch(getMovieRequest());
    MovieApi.getMovie(id, userId)
      .then(function (response) {
        dispatch(getMovieSuccess(response.data));
      })
      .catch(function () {
        dispatch(getMovieFailure());
      })
  }
}

function getMovieRequest() {
  return function(dispatch) {
    dispatch({ type: types.GET_MOVIE_REQUEST });
    dispatch(notificationActions.clear());
  }
}

function getMovieSuccess(movie) {
  return {
    type: types.GET_MOVIE_SUCCESS,
    payload: { movie }
  }
}

function getMovieFailure() {
  return function(dispatch) {
    dispatch({ type: types.GET_MOVIE_FAILURE });
    dispatch(notificationActions.error('Getting movie failed'));
  }
}

export function createMovie(movie) {
  return function(dispatch) {
    dispatch(createMovieRequest());
    MovieApi.createMovie(movie)
      .then(function (response) {
        dispatch(createMovieSuccess(response.data));
        browserHistory.push(`/movies`);
      })
      .catch(function () {
        dispatch(createMovieFailure());
      });
  }
}

function createMovieRequest() {
  return function(dispatch) {
    dispatch({ type: types.CREATE_MOVIE_REQUEST });
    dispatch(notificationActions.clear());
  }
}

function createMovieSuccess(movie) {
  return function(dispatch) {
    dispatch({
      type: types.CREATE_MOVIE_SUCCESS,
      payload: { movie }
    });
    dispatch(notificationActions.info('Movie successfully created'));
  }
}

function createMovieFailure() {
  return function(dispatch) {
    dispatch({ type: types.CREATE_MOVIE_FAILURE });
    dispatch(notificationActions.error('Creating movie failed'));
  }
}

export function updateMovie(id, movie) {
  return function(dispatch) {
    dispatch(updateMovieRequest());
    MovieApi.updateMovie(id, movie)
      .then(function (response) {
        dispatch(updateMovieSuccess(response.data));
        browserHistory.push(`/movies/${id}`);
      })
      .catch(function () {
        dispatch(updateMovieFailure());
      });
  }
}

function updateMovieRequest() {
  return function(dispatch) {
    dispatch({ type: types.UPDATE_MOVIE_REQUEST });
    dispatch(notificationActions.clear());
  }
}

function updateMovieSuccess(movie) {
  return function(dispatch) {
    dispatch({
      type: types.UPDATE_MOVIE_SUCCESS,
      payload: { movie }
    });
    dispatch(notificationActions.info('Movie successfully updated'));
  }
}

function updateMovieFailure() {
  return function(dispatch) {
    dispatch({ type: types.UPDATE_MOVIE_FAILURE });
    dispatch(notificationActions.error('Updating movie failed'));
  }
}


export function deleteMovie(id) {
  return function(dispatch) {
    dispatch(deleteMovieRequest());
    MovieApi.deleteMovie(id)
      .then(function (response) {
        dispatch(deleteMovieSuccess(response.data));
        browserHistory.push(`/movies`);
      })
      .catch(function () {
        dispatch(deleteMoviesFailure());
      });
  }
}

function deleteMovieRequest() {
  return function(dispatch) {
    dispatch({ type: types.DELETE_MOVIE_REQUEST });
    dispatch(notificationActions.clear());
  }
}

function deleteMovieSuccess() {
  return function(dispatch) {
    dispatch({ type: types.DELETE_MOVIE_SUCCESS });
    dispatch(notificationActions.info('Movie successfully deleted'));
  }
}

function deleteMovieFailure() {
  return function(dispatch) {
    dispatch({ type: types.DELETE_MOVIE_FAILURE });
    dispatch(notificationActions.error('Deleting movie failed'));
  }
}

export function rateMovie(userId, movieId, rating) {
  return function(dispatch) {
    dispatch(rateMovieRequest());
    MovieApi.rateMovie(userId, movieId, rating)
      .then(function (response) {
        dispatch(rateMovieSuccess(response.data));
        browserHistory.push(`/movies/${movieId}`);
      })
      .catch(function () {
        dispatch(rateMovieFailure());
      });
  }
}

function rateMovieRequest() {
  return function(dispatch) {
    dispatch({ type: types.RATE_MOVIE_REQUEST });
    dispatch(notificationActions.clear());
  }
}

function rateMovieSuccess(movie) {
  return function(dispatch) {
    dispatch({
      type: types.RATE_MOVIE_SUCCESS,
      payload: { movie }
    });
  }
}

function rateMovieFailure() {
  return function(dispatch) {
    dispatch({ type: types.RATE_MOVIE_FAILURE });
    dispatch(notificationActions.error('Rating the movie failed'));
  }
}

export function loadMovieFromOMDB(title) {
  if (title.length > 0) {
    return function(dispatch) {
      dispatch(loadMovieFromOMDBRequest());
      MovieApi.loadFromOMDB(title)
        .then(function (response) {
          if (response.data.Response != 'False') {
            dispatch(loadMovieFromOMDBSuccess(response.data));
          }
          else {
            dispatch(loadMovieFromOMDBFailure());
          }
        })
        .catch(function () {
          dispatch(loadMovieFromOMDBFailure());
        });
    }
  }
}

function loadMovieFromOMDBRequest() {
  return function(dispatch) {
    dispatch({ type: types.LOAD_MOVIE_FROM_OMDB_REQUEST });
    dispatch(notificationActions.clear());
  }
}

function loadMovieFromOMDBSuccess(data) {
  return function(dispatch) {
    const payload = {
      title: data.Title,
      year: data.Year,
      director: data.Director,
      duration: data.Runtime.replace(' min', ''),
      ageRestriction: data.Rated,
      coverImage: data.Poster,
      photos: [],
      description: data.Plot
    };

    dispatch({
      type: types.LOAD_MOVIE_FROM_OMDB_SUCCESS,
      payload: payload
    });
    dispatch(notificationActions.info(`You successfully uploaded ${ movie.title } movie data from OMDB`));
  }
}

function loadMovieFromOMDBFailure() {
  return function(dispatch) {
    dispatch({ type: types.LOAD_MOVIE_FROM_OMDB_FAILURE });
    dispatch(notificationActions.error('Movie was not found by the given title'));
  }
}


export function addPhoto(photo) {
  return function(dispatch) {
    dispatch({
      type: types.ADD_MOVIE_PHOTO,
      payload: photo
    });
  }
}

export function listGenres() {
  return function(dispatch) {
    dispatch(listGenresRequest());
    MovieApi.listGenres()
      .then(function (response) {
        dispatch(listGenresSuccess(response.data));
      })
      .catch(function() {
        dispatch(listGenresFailure());
      });
  }
}

function listGenresRequest() {
  return { type: types.LIST_GENRES_REQUEST }
}

function listGenresSuccess(genres) {
  return {
    type: types.LIST_GENRES_SUCCESS,
    payload: { genres }
  }
}

function listGenresFailure() {
  return function(dispatch) {
    dispatch({ type: types.LIST_GENRES_FAILURE });
    dispatch(notificationActions.error('Loading movie genres failed'));
  }
}

export function listTags() {
  return function(dispatch) {
    dispatch(listTagsRequest());
    MovieApi.listTags()
      .then(function (response) {
        dispatch(listTagsSuccess(response.data));
      })
      .catch(function () {
        dispatch(listTagsFailure());
      });
  }
}

function listTagsRequest() {
  return { type: types.LIST_TAGS_REQUEST }
}

function listTagsSuccess(tags) {
  return {
    type: types.LIST_TAGS_SUCCESS,
    payload: { tags }
  }
}

function listTagsFailure() {
  return function(dispatch) {
    dispatch({ type: types.LIST_TAGS_FAILURE });
    dispatch(notificationActions.error('Loading movie tags failed'));
  }
}

