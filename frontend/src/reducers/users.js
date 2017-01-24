import * as types from '../actions/actionTypes';
import initialState from './initialState';

const usersReducer = (state = initialState.users, action) => {
  switch(action.type) {
    case types.LIST_USERS_REQUEST:
      return {...state, users: [], isLoading: true}
    case types.LIST_USERS_SUCCESS:
      return {...state, users: action.payload.users, isLoading: false}
    case types.LIST_USERS_FAILURE:
      return {...state, isLoading: false}
    case types.GET_USER_REQUEST:
      return {...state, user: {}, isLoading: true}
    case types.GET_USER_SUCCESS:
      return {...state, user: action.payload.user, isLoading: false}
    case types.GET_USER_FAILURE:
      return {...state, isLoading: false}
    default:
      return state;
  }
}

export default usersReducer;
