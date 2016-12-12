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

function listMoviesSuccess(movies){
  return{
    type: types.LIST_MOVIES_SUCCESS,
    payload: { movies }
  }
}

function listMoviesFailure(error){
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
        dispatch(searchMoviesFailure(error));
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

function searchMoviesFailure(error){
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

function getMovieSuccess(movie){
  return{
    type: types.GET_MOVIE_SUCCESS,
    payload: { movie }
  }
}

function getMovieFailure(error){
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
  return function(dispatch) {
    if (title.length > 0) {
      dispatch(loadMovieFromOMDBRequest());
      MovieApi.loadFromOMDB(id)
        .then(function (response) {
          if (res.data.Response != "False") {
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
      image: data.Poster,
      director: data.Director,
      duration: data.Runtime.replace(" min", ""),
      age_restriction: data.Rated
    }
  }
}

function loadMovieFromOMDBFailure(error) {
  return {
    type: types.LOAD_MOVIE_FROM_OMDB_FAILURE,
    payload: { error }
  }
}

/*searchOMDB(change){
    var title = document.getElementsByName("title")[0].value;

    if(title.length > 0){
      axios("http://www.omdbapi.com/?t="+title+"&y=&plot=short&r=json")
        .then(function(res){
          var data = res.data;
          if(res.data.Response != "False"){
            change("title", data.Title);
            change("description", data.Plot);
            change("year", data.Year);
            change("image", data.Poster);
            change("producer", data.Director);
            change("duration", data.Runtime.replace(" min", ""));
            change("age_restriction", data.Rated);
          }
      });
    }
  }
*/