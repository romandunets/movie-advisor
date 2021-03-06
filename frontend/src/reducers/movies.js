import * as types from '../actions/actionTypes';
import initialState from './initialState';

const moviesReducer = (state = initialState.movies, action) => {
  switch(action.type) {
    case types.LIST_MOVIES_REQUEST:
      return {...state, movies: [], isLoading: true}
    case types.LIST_MOVIES_SUCCESS:
      return {...state, movies: action.payload.movies.data, pages: action.payload.movies.meta.numOfPages, isLoading: false}
    case types.LIST_MOVIES_FAILURE:
      return {...state, isLoading: false}
    case types.LIST_RECOMMENDED_MOVIES_REQUEST:
      return {...state, movies: [], isLoading: true}
    case types.LIST_RECOMMENDED_MOVIES_SUCCESS:
      return {...state, movies: action.payload.movies, isLoading: false}
    case types.LIST_RECOMMENDED_MOVIES_FAILURE:
      return {...state, isLoading: false}
    case types.LIST_WATCHED_MOVIES_REQUEST:
      return {...state, movies: [], isLoading: true}
    case types.LIST_WATCHED_MOVIES_SUCCESS:
      return {...state, movies: action.payload.movies.data, pages: action.payload.movies.meta.numOfPages, isLoading: false}
    case types.LIST_WATCHED_MOVIES_FAILURE:
      return {...state, isLoading: false}
    case types.SEARCH_MOVIES_REQUEST:
      return {...state, movies: []}
    case types.SEARCH_MOVIES_SUCCESS:
      return {...state, movies: action.payload.movies}
    case types.GET_MOVIE_REQUEST:
      return {...state, movie: { photos: [] }, isLoading: true}
    case types.GET_MOVIE_SUCCESS:
      return {...state, movie: action.payload.movie, isLoading: false}
    case types.GET_MOVIE_FAILURE:
      return {...state, isLoading: false}
    case types.LOAD_MOVIE_FROM_OMDB_REQUEST:
      return {...state, movie: {}, isLoading: true}
    case types.LOAD_MOVIE_FROM_OMDB_SUCCESS:
      return {...state, movie: action.payload, isLoading: false}
    case types.LOAD_MOVIE_FROM_OMDB_FAILURE:
      return {...state, isLoading: false}
    case types.LIST_GENRES_REQUEST:
      return {...state, genres: []}
    case types.LIST_GENRES_SUCCESS:
      return {...state, genres: action.payload.genres}
    case types.LIST_TAGS_REQUEST:
      return {...state, tags: []}
    case types.LIST_TAGS_SUCCESS:
      return {...state, tags: action.payload.tags}
    case types.ADD_MOVIE_PHOTO:
      const movie = {...state.movie, photos: state.movie.photos.concat(action.payload) };
      return {...state, movie };
    default:
      return state;
  }
}

export default moviesReducer;
  