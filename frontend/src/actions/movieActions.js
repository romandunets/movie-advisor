import { browserHistory } from 'react-router';

import * as types from '../actions/actionTypes';
import MovieApi from '../api/MovieApi';

export function fetchMovies() {
  return function(dispatch) {
    dispatch(fetchMoviesRequest());
    MovieApi.fetchMovies()
      .then(function (response) {
        dispatch(fetchMoviesSuccess(response.data));
      })
      .catch(function (error) {
        dispatch(fetchMoviesFail(error));
      });
  }
}

function fetchMoviesRequest() {
  return { type: types.FETCH_MOVIES_REQUEST }
}

function fetchMoviesSuccess(movies){
  return{
    type: types.FETCH_MOVIES_SUCCESS,
    payload: { movies }
  }
}

function fetchMoviesFail(error){
  return{
    type: types.FETCH_MOVIES_FAILED,
    payload: { error }
  }
}


export function fetchMovie(id) {
  return function(dispatch) {
    dispatch(fetchMovieRequest());
    MovieApi.fetchMovie(id)
      .then(function (response) {
        dispatch(fetchMovieSuccess(response.data));
      })
      .catch(function (error) {
        dispatch(fetchMovieFail(error));
      })
  }
}

function fetchMovieRequest() {
  return { type: types.FETCH_MOVIE_REQUEST }
}

function fetchMovieSuccess(movie){
  return{
    type: types.FETCH_MOVIE_SUCCESS,
    payload: { movie }
  }
}

function fetchMovieFail(error){
  return{
    type: types.FETCH_MOVIE_FAILED,
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