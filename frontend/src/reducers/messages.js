import * as types from '../actions/actionTypes';
import initialState from './initialState';

function messagesReducer(state = initialState.messages, action) {
  switch(action.type) {
    case types.SIGNUP_REQUEST:
      return {...state, message: '', isAuthenticated: false}
    case types.SIGNUP_SUCCESS:
      return {...state, message: 'You successfully registered!', currentUser: action.payload, isAuthenticated: true}
    case types.SIGNUP_FAILURE:
      return {...state, message: action.payload, isAuthenticated: false}
    case types.LOGIN_REQUEST:
      return {...state, message: '', isAuthenticated: false}
    case types.LOGIN_SUCCESS:
      const currentUser = action.payload;
      const isAdmin = currentUser && currentUser.role.name == 'admin';
      return {...state, message: '', isAuthenticated: true, currentUser, isAdmin}
    case types.LOGIN_FAILURE:
      return {...state, message: action.payload, isAuthenticated: false}
    case types.LOGOUT:
      return {...state, message: 'You successfully logged out!', isAuthenticated: false, isAdmin: false}
    default:
      return state;
  }
}

export default authReducer;
