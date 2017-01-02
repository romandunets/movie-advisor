import { browserHistory } from 'react-router';

import * as types from '../actions/actionTypes';
import MovieApi from '../api/MovieApi';

export function listMovies(query) {
  return function(dispatch) {
    dispatch(listMoviesRequest());
    MovieApi.listMovies(query)
      .then(function (response) {
        dispatch(listMoviesSuccess(response.data));
      })
      .catch(function (error) {
        dispatch(listMoviesFailure(error));
      });
  }
}

function listMoviesRequest() {
  return { type: types.LIST_MOVIES_REQUEST }
}

function listMoviesSuccess(movies) {
  return {
    type: types.LIST_MOVIES_SUCCESS,
    payload: { movies }
  }
}

function listMoviesFailure(error) {
  return {
    type: types.LIST_MOVIES_FAILURE,
    payload: { error }
  }
}

export function listRecommendedMovies(userId, query) {
  return function(dispatch) {
    dispatch(listRecommendedMoviesRequest());
    MovieApi.listRecommendedMovies(userId, query)
      .then(function (response) {
        dispatch(listRecommendedMoviesSuccess(response.data));
      })
      .catch(function (error) {
        dispatch(listRecommendedMoviesFailure(error));
      });
  }
}

function listRecommendedMoviesRequest() {
  return { type: types.LIST_RECOMMENDED_MOVIES_REQUEST }
}

function listRecommendedMoviesSuccess(movies) {
  return {
    type: types.LIST_RECOMMENDED_MOVIES_SUCCESS,
    payload: { movies }
  }
}

function listRecommendedMoviesFailure(error) {
  return {
    type: types.LIST_WATCHED_MOVIES_FAILURE,
    payload: { error }
  }
}

export function listWatchedMovies(userId, query) {
  return function(dispatch) {
    dispatch(listWatchedMoviesRequest());
    MovieApi.listWatchedMovies(userId, query)
      .then(function (response) {
        dispatch(listWatchedMoviesSuccess(response.data));
      })
      .catch(function (error) {
        dispatch(listWatchedMoviesFailure(error));
      });
  }
}

function listWatchedMoviesRequest() {
  return { type: types.LIST_WATCHED_MOVIES_REQUEST }
}

function listWatchedMoviesSuccess(movies) {
  return {
    type: types.LIST_WATCHED_MOVIES_SUCCESS,
    payload: { movies }
  }
}

function listWatchedMoviesFailure(error) {
  return {
    type: types.LIST_WATCHED_MOVIES_FAILURE,
    payload: { error }
  }
}

export function searchMovies(keyword) {
  return function(dispatch) {
    dispatch(searchMoviesRequest());
    MovieApi.searchMovies(keyword)
      .then(function (response) {
        dispatch(searchMoviesSuccess(response.data));
      })
      .catch(function (error) {
        dispatch(searchMoviesFailure(error));
      });
  }
}

function searchMoviesRequest() {
  return { type: types.SEARCH_MOVIES_REQUEST }
}

function searchMoviesSuccess(movies) {
  return {
    type: types.SEARCH_MOVIES_SUCCESS,
    payload: { movies }
  }
}

function searchMoviesFailure(error) {
  return {
    type: types.SEARCH_MOVIES_FAILURE,
    payload: { error }
  }
}

export function getMovie(id) {
  return function(dispatch) {
    dispatch(getMovieRequest());
    MovieApi.getMovie(id)
      .then(function (response) {
        dispatch(getMovieSuccess(response.data));
      })
      .catch(function (error) {
        dispatch(getMovieFailure(error));
      })
  }
}

function getMovieRequest() {
  return { type: types.GET_MOVIE_REQUEST }
}

function getMovieSuccess(movie) {
  return {
    type: types.GET_MOVIE_SUCCESS,
    payload: { movie }
  }
}

function getMovieFailure(error) {
  return {
    type: types.GET_MOVIE_FAILURE,
    payload: { error }
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
      .catch(function (error) {
        dispatch(createMovieFailure(error));
      });
  }
}

function createMovieRequest() {
  return { type: types.CREATE_MOVIE_REQUEST }
}

function createMovieSuccess(movie) {
  return {
    type: types.CREATE_MOVIE_SUCCESS,
    payload: { movie }
  }
}

function createMovieFailure(error) {
  return {
    type: types.CREATE_MOVIE_FAILURE,
    payload: { error }
  }
}

export function updateMovie(movie) {
  return function(dispatch) {
    dispatch(updateMovieRequest());
    MovieApi.updateMovie(movie)
      .then(function (response) {
        dispatch(updateMovieSuccess(response.data));
        browserHistory.push(`/movies/${movie.id}`);
      })
      .catch(function (error) {
        dispatch(updateMovieFailure(error));
      });
  }
}

function updateMovieRequest() {
  return { type: types.UPDATE_MOVIE_REQUEST }
}

function updateMovieSuccess(movie) {
  return {
    type: types.UPDATE_MOVIE_SUCCESS,
    payload: { movie }
  }
}

function updateMovieFailure(error) {
  return {
    type: types.UPDATE_MOVIE_FAILURE,
    payload: { error }
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
      .catch(function (error) {
        dispatch(deleteMoviesFailure(error));
      });
  }
}

function deleteMovieRequest() {
  return { type: types.DELETE_MOVIE_REQUEST }
}

function deleteMovieSuccess() {
  return { type: types.DELETE_MOVIE_SUCCESS }
}

function deleteMovieFailure(error) {
  return {
    type: types.DELETE_MOVIE_FAILURE,
    payload: { error }
  }
}


export function markMovieWatched(userid, movieid) {
  return function(dispatch) {
    dispatch(markMovieWatchedRequest());
    MovieApi.markMovieWatched(userid, movieid)
      .then(function (response) {
        dispatch(markMovieWatchedSuccess(response.data));
        browserHistory.push(`/movies/${movie.id}/watched`);
      })
      .catch(function (error) {
        dispatch(markMovieWatchedFailure(error));
      });
  }
}

function markMovieWatchedRequest() {
  return { type: types.MARK_MOVIE_WATCHED_REQUEST }
}

function markMovieWatchedSuccess(movie) {
  return {
    type: types.MARK_MOVIE_WATCHED_SUCCESS,
    payload: { movie }
  }
}

function markMovieWatchedFailure(error) {
  return {
    type: types.MARK_MOVIE_WATCHED_FAILURE,
    payload: { error }
  }
}

export function deleteMarkMovieWatched(userid, movieid) {
  return function(dispatch) {
    dispatch(deleteMarkMovieWatchedRequest());
    MovieApi.deleteMarkMovieWatched(userid, movieid)
      .then(function (response) {
        dispatch(deleteMarkMovieWatchedSuccess(response.data));
        browserHistory.push(`/movies/${movie.id}/watched`);
      })
      .catch(function (error) {
        dispatch(deleteMarkMovieWatchedFailure(error));
      });
  }
}

function deleteMarkMovieWatchedRequest() {
  return { type: types.DELETE_MARK_MOVIE_WATCHED_REQUEST }
}

function deleteMarkMovieWatchedSuccess(movie) {
  return { type: types.DELETE_MARK_MOVIE_WATCHED_SUCCESS }
}

function deleteMarkMovieWatchedFailure(error) {
  return {
    type: types.DELETE_MARK_MOVIE_WATCHED_FAILURE,
    payload: { error }
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
      .catch(function (error) {
        dispatch(rateMovieFailure(error));
      });
  }
}

function rateMovieRequest() {
  return { type: types.RATE_MOVIE_REQUEST }
}

function rateMovieSuccess(movie) {
  return {
    type: types.RATE_MOVIE_SUCCESS,
    payload: { movie }
  }
}

function rateMovieFailure(error) {
  return {
    type: types.RATE_MOVIE_FAILURE,
    payload: { error }
  }
}


export function loadMovieFromOMDB(title) {
  if (title.length > 0) {
    return function(dispatch) {
      dispatch(loadMovieFromOMDBRequest());
      MovieApi.loadFromOMDB(title)
        .then(function (response) {
          if (response.data.Response != "False") {
            dispatch(loadMovieFromOMDBSuccess(response.data));
          }
          else {
            dispatch(loadMovieFromOMDBFailure("Movie not found"));
          }
        })
        .catch(function (error) {
          dispatch(loadMovieFromOMDBFailure(error));
        });
    }
  }
}

function loadMovieFromOMDBRequest() {
  return { type: types.LOAD_MOVIE_FROM_OMDB_REQUEST }
}

function loadMovieFromOMDBSuccess(data) {
  return {
    type: types.LOAD_MOVIE_FROM_OMDB_SUCCESS,
    payload: {
      title: data.Title,
      year: data.Year,
      director: data.Director,
      duration: data.Runtime.replace(" min", ""),
      ageRestriction: data.Rated,
      coverImage: data.Poster,
      photos: [],
      description: data.Plot
    }
  }
}

function loadMovieFromOMDBFailure(error) {
  return {
    type: types.LOAD_MOVIE_FROM_OMDB_FAILURE,
    payload: { error }
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
      .catch(function (error) {
        dispatch(listGenresFailure(error));
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

function listGenresFailure(error) {
  return {
    type: types.LIST_GENRES_FAILURE,
    payload: { error }
  }
}

export function listTags() {
  return function(dispatch) {
    dispatch(listTagsRequest());
    MovieApi.listTags()
      .then(function (response) {
        dispatch(listTagsSuccess(response.data));
      })
      .catch(function (error) {
        dispatch(listTagsFailure(error));
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

function listTagsFailure(error) {
  return {
    type: types.LIST_TAGS_FAILURE,
    payload: { error }
  }
}

