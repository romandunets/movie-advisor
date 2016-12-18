import * as types from '../actions/actionTypes';
import initialState from './initialState';

const moviesReducer = (state = initialState.movies, action) => {
  switch(action.type) {
    case types.LIST_MOVIES_REQUEST:
      return {...state, movies: []}
    case types.LIST_MOVIES_SUCCESS:
      return {...state, movies: action.payload.movies}
    case types.LIST_MOVIES_FAILURE:
      return {...state, error: action.payload}
    case types.LIST_RECOMMENDED_MOVIES_REQUEST:
      return {...state, movies: []}
    case types.LIST_RECOMMENDED_MOVIES_SUCCESS:
      return {...state, movies: action.payload.movies}
    case types.LIST_RECOMMENDED_MOVIES_FAILURE:
      return {...state, error: action.payload}
    case types.LIST_WATCHED_MOVIES_REQUEST:
      return {...state, movies: []}
    case types.LIST_WATCHED_MOVIES_SUCCESS:
      return {...state, movies: action.payload.movies}
    case types.LIST_WATCHED_MOVIES_FAILURE:
      return {...state, error: action.payload}
    case types.SEARCH_MOVIES_REQUEST:
      return {...state, movies: []}
    case types.SEARCH_MOVIES_SUCCESS:
      return {...state, movies: action.payload.movies}
    case types.SEARCH_MOVIES_FAILURE:
      return {...state, error: action.payload}
    case types.GET_MOVIE_REQUEST:
      return {...state, movie: {}, isLoading: true}
    case types.GET_MOVIE_SUCCESS:
      return {...state, movie: action.payload.movie, isLoading: false}
    case types.GET_MOVIE_FAILURE:
      return {...state, error: action.payload, isLoading: false}
    case types.CREATE_MOVIE_REQUEST:
      return {...state, message: '', error: ''}
    case types.CREATE_MOVIE_SUCCESS:
      return {...state, message: 'Movie successfully created', error: ''}
    case types.CREATE_MOVIE_FAILURE:
      return {...state, message: '', error: action.payload}
    case types.UPDATE_MOVIE_REQUEST:
      return {...state, message: '', error: ''}
    case types.UPDATE_MOVIE_SUCCESS:
      return {...state, message: 'Movie successfully updated', error: ''}
    case types.UPDATE_MOVIE_FAILURE:
      return {...state, message: '', error: action.payload}
    case types.DELETE_MOVIE_REQUEST:
      return {...state, message: '', error: ''}
    case types.DELETE_MOVIE_SUCCESS:
      return {...state, message: 'Movie successfully deleted', error: ''}
    case types.DELETE_MOVIE_FAILURE:
      return {...state, message: '', error: action.payload}
    case types.LOAD_MOVIE_FROM_OMDB_REQUEST:
      return {...state, movie: {}, isLoading: true}
    case types.LOAD_MOVIE_FROM_OMDB_SUCCESS:
      return {...state, movie: action.payload, isLoading: false}
    case types.LOAD_MOVIE_FROM_OMDB_FAILURE:
      return {...state, error: action.payload, isLoading: false}
    default:
      return state;
  }
}

export default moviesReducer;
  