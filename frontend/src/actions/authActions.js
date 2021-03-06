import axios from 'axios';
import { browserHistory } from 'react-router';

import * as types from './actionTypes';
import * as notificationActions from './notificationActions';
import authApi from '../api/AuthApi';

export function signup(credentials) {
  return function(dispatch) {
    dispatch(signupRequest());
    return authApi.signup(credentials)
      .then(function (response) {
        //localStorage.setItem('token', 'TOKEN');//localStorage.setItem('token', response.data.token);
        localStorage.setItem('user', JSON.stringify(response.data));
        dispatch(signupSuccess(response.data));
        browserHistory.replace('/');
      })
      .catch(function() {
        dispatch(signupFailure());
      });
  }
}

function signupRequest() {
  return function(dispatch) {
    dispatch({ type: types.SIGNUP_REQUEST });
    dispatch(notificationActions.clear());
  }
}

function signupSuccess(user) {
  return function(dispatch) {
    dispatch({
      type: types.SIGNUP_SUCCESS,
      payload: user
    });
    dispatch(notificationActions.info('You successfully registered'));
  }
}

function signupFailure() {
  return function(dispatch) {
    dispatch({ type: types.SIGNUP_FAILURE });
    dispatch(notificationActions.error('Signup failed'));
  }
}

export function login(credentials) {
  return function(dispatch) {
    dispatch(loginRequest());
    return authApi.login(credentials)
      .then(function (response) {
        //localStorage.setItem('token', response.data.token);
        localStorage.setItem('user', JSON.stringify(response.data));
        dispatch(loginSuccess(response.data));
        browserHistory.replace('/');
      })
      .catch(function() {
        dispatch(loginFailure());
      });
  }
}

function loginRequest() {
  return function(dispatch) {
    dispatch({ type: types.LOGIN_REQUEST });
    dispatch(notificationActions.clear());
  }
}

function loginSuccess(user) {
  return {
    type: types.LOGIN_SUCCESS,
    payload: user
  }
}

function loginFailure() {
  return function(dispatch) {
    dispatch({ type: types.LOGIN_FAILURE });
    dispatch(notificationActions.error('Login failed'));
  }
}

export function logout() {
  return function(dispatch) {
    //localStorage.removeItem('token');
    localStorage.removeItem('user');
    dispatch({ type: types.LOGOUT });
    dispatch(notificationActions.info('You successfully logged out'));
    browserHistory.replace('/signin');
  }
}
