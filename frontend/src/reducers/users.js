import * as types from '../actions/actionTypes';
import initialState from './initialState';

const usersReducer = (state = initialState.users, action) => {
  switch(action.type) {
    case types.LIST_USERS_REQUEST:
      return {...state, users: []}
    case types.LIST_USERS_SUCCESS:
      return {...state, users: action.payload.users}
    case types.LIST_USERS_FAILURE:
      return {...state, error: action.payload}
    case types.GET_USER_REQUEST:
      return {...state, user: {}, isLoading: true}
    case types.GET_USER_SUCCESS:
      return {...state, user: action.payload.user, isLoading: false}
    case types.GET_USER_FAILURE:
      return {...state, error: action.payload, isLoading: false}
    case types.CREATE_USER_REQUEST:
      return {...state, message: '', error: ''}
    case types.CREATE_USER_SUCCESS:
      return {...state, message: 'User successfully created', error: ''}
    case types.CREATE_USER_FAILURE:
      return {...state, message: '', error: action.payload}
    case types.UPDATE_USER_REQUEST:
      return {...state, message: '', error: ''}
    case types.UPDATE_USER_SUCCESS:
      return {...state, message: 'User successfully updated', error: ''}
    case types.UPDATE_USER_FAILURE:
      return {...state, message: '', error: action.payload}
    case types.DELETE_USER_REQUEST:
      return {...state, message: '', error: ''}
    case types.DELETE_USER_SUCCESS:
      return {...state, message: 'User successfully deleted', error: ''}
    case types.DELETE_USER_FAILURE:
      return {...state, message: '', error: action.payload}
    default:
      return state;
  }
}

export default usersReducer;
