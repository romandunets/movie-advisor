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
  return{
    type: types.LIST_MOVIES_SUCCESS,
    payload: { movies }
  }
}

function listMoviesFailure(error) {
  return{
    type: types.LIST_MOVIES_FAILURE,
    payload: { error }
  }
}

export function listRecommendedMovies(query) {
  return function(dispatch) {
    dispatch(listRecommendedMoviesRequest());
    MovieApi.listRecommendedMovies(query)
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
  return{
    type: types.LIST_RECOMMENDED_MOVIES_SUCCESS,
    payload: { movies }
  }
}

function listRecommendedMoviesFailure(error) {
  return{
    type: types.LIST_WATCHED_MOVIES_FAILURE,
    payload: { error }
  }
}

export function listWatchedMovies(query) {
  return function(dispatch) {
    dispatch(listWatchedMoviesRequest());
    MovieApi.listWatchedMovies(query)
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
  return{
    type: types.LIST_WATCHED_MOVIES_SUCCESS,
    payload: { movies }
  }
}

function listWatchedMoviesFailure(error) {
  return{
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
  return{
    type: types.SEARCH_MOVIES_SUCCESS,
    payload: { movies }
  }
}

function searchMoviesFailure(error) {
  return{
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
  return{
    type: types.GET_MOVIE_SUCCESS,
    payload: { movie }
  }
}

function getMovieFailure(error) {
  return{
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
      producer: data.Director,
      duration: data.Runtime.replace(" min", ""),
      ageRestriction: data.Rated,
      image: data.Poster,
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
