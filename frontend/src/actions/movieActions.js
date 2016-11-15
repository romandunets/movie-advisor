import { browserHistory } from 'react-router';

import * as types from '../actions/actionTypes';
import MovieApi from '../api/MovieApi';

export function listMovies() {
  return function(dispatch) {
    dispatch(listMoviesRequest());
    MovieApi.listMovies()
      .then(function (response) {
        dispatch(listMoviesSuccess(response.data));
      })
      .catch(function (error) {
        dispatch(listMoviesFail(error));
      });
  }
}

function listMoviesRequest() {
  return { type: types.LIST_MOVIES_REQUEST }
}

function listMoviesSuccess(movies){
  return{
    type: types.LIST_MOVIES_SUCCESS,
    payload: { movies }
  }
}

function listMoviesFail(error){
  return{
    type: types.LIST_MOVIES_FAILURE,
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
        dispatch(searchMoviesFail(error));
      });
  }
}

function searchMoviesRequest() {
  return { type: types.SEARCH_MOVIES_REQUEST }
}

function searchMoviesSuccess(movies){
  return{
    type: types.SEARCH_MOVIES_SUCCESS,
    payload: { movies }
  }
}

function searchMoviesFail(error){
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
        dispatch(listMoviesuccess(response.data));
      })
      .catch(function (error) {
        dispatch(getMovieFail(error));
      })
  }
}

function getMovieRequest() {
  return { type: types.GET_MOVIE_REQUEST }
}

function listMoviesuccess(movie){
  return{
    type: types.GET_MOVIE_SUCCESS,
    payload: { movie }
  }
}

function getMovieFail(error){
  return{
    type: types.GET_MOVIE_FAILUREED,
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