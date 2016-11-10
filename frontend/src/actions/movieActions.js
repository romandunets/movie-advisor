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

export function fetchRecommendedMovies() {
  return function(dispatch) {
    dispatch(fetchMoviesRequest());
    MovieApi.fetchRecommendedMovies()
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