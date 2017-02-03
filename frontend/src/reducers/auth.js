import * as types from '../actions/actionTypes';
import initialState from './initialState';

function authReducer(state = initialState.auth, action) {
  switch(action.type) {
    case types.SIGNUP_REQUEST:
      return {...state, isAuthenticated: false}
    case types.SIGNUP_SUCCESS:
      return {...state, currentUser: action.payload, isAuthenticated: true}
    case types.SIGNUP_FAILURE:
      return {...state, isAuthenticated: false}
    case types.LOGIN_REQUEST:
      return {...state, isAuthenticated: false}
    case types.LOGIN_SUCCESS:
      const currentUser = action.payload;
      const isAdmin = currentUser && currentUser.role.name == 'admin';
      return {...state, isAuthenticated: true, currentUser, isAdmin}
    case types.LOGIN_FAILURE:
      return {...state, isAuthenticated: false}
    case types.LOGOUT:
      return {...state, isAuthenticated: false, isAdmin: false}
    default:
      return state;
  }
}

export default authReducer;
