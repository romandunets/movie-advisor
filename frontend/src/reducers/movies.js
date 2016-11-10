import * as types from '../actions/actionTypes';
import initialState from './initialState';

const movieReducer = (state = initialState.movies, action) => {
  switch(action.type) {
    case types.FETCH_MOVIES_SUCCESS:
      return {...state, movies: action.payload.movies}
    case types.FETCH_MOVIES_FAILED:
      return {...state, error: action.payload}
    case types.FETCH_MOVIES_REQUEST:
      return {...state, movies: []}
    default:
      return state;
  }
}

/*const movie = (state = {}, action) => {
  switch(action.type) {
    default:
      return state;
  }
}*/



export default movieReducer
  