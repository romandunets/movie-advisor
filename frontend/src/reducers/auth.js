import * as types from '../actions/actionTypes';
import initialState from './initialState';

function authReducer(state = initialState.auth, action) {
  switch(action.type) {
    case types.SIGNUP_REQUEST:
      return {...state, message: '', isAuthenticated: false}
    case types.SIGNUP_SUCCESS:
      return {...state, message: 'You successfully registered!', isAuthenticated: true}
    case types.SIGNUP_FAILURE:
      return {...state, message: action.payload, isAuthenticated: false}
    case types.LOGIN_REQUEST:
      return {...state, message: '', isAuthenticated: false}
    case types.LOGIN_SUCCESS:
      return {...state, message: '', isAuthenticated: true}
    case types.LOGIN_FAILURE:
      return {...state, message: action.payload, isAuthenticated: false}
    case types.LOGOUT:
      return {...state, message: 'You successfully logged out!', isAuthenticated: false}
    default:
      return state;
  }
}

export default authReducer;
