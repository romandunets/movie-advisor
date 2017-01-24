import { browserHistory } from 'react-router';

import * as types from './actionTypes';
import * as notificationActions from './notificationActions';
import userApi from '../api/UserApi';

export function listUsers() {
  return function(dispatch) {
    dispatch(listUsersRequest());
    userApi.listUsers()
      .then(function (response) {
        dispatch(listUsersSuccess(response.data));
      })
      .catch(function (error) {
        dispatch(listUsersFailure(error));
      });
  }
}

function listUsersRequest() {
  return { type: types.LIST_USERS_REQUEST }
}

function listUsersSuccess(users) {
  return {
    type: types.LIST_USERS_SUCCESS,
    payload: { users }
  }
}

function listUsersFailure(error) {
  return function(dispatch) {
    dispatch(notificationActions.error('Getting users failed'));
    dispatch({ type: types.LIST_USERS_FAILURE });
  }
}

export function getUser(id) {
  return function(dispatch) {
    dispatch(getUserRequest());
    userApi.getUser(id)
      .then(function (response) {
        dispatch(getUserSuccess(response.data));
      })
      .catch(function (error) {
        dispatch(getUserFailure(error));
      });
  }
}

function getUserRequest() {
  return { type: types.GET_USER_REQUEST }
}

function getUserSuccess(user) {
  return {
    type: types.GET_USER_SUCCESS,
    payload: { user }
  }
}

function getUserFailure(error) {
  return function(dispatch) {
    dispatch(notificationActions.error('Getting user failed'));
    dispatch({ type: types.GET_USER_FAILURE });
  }
}

export function createUser(user) {
  return function(dispatch) {
    dispatch(createUserRequest());
    userApi.createUser(user)
      .then(function (response) {
        dispatch(createUserSuccess(response.data));
        browserHistory.push(`/users`);
      })
      .catch(function (error) {
        dispatch(createUserFailure(error));
      });
  }
}

function createUserRequest() {
  return { type: types.CREATE_USER_REQUEST }
}

function createUserSuccess(user) {
  return function(dispatch) {
    dispatch(notificationActions.info('User successfully created'));
    dispatch({
      type: types.CREATE_USER_SUCCESS,
      payload: { user }
    });
  }
}

function createUserFailure(error) {
  return function(dispatch) {
    dispatch(notificationActions.error('Creating user failed'));
    dispatch({ type: types.CREATE_USER_FAILURE });
  }
}

export function updateUser(user) {
  return function(dispatch) {
    dispatch(updateUserRequest());
    userApi.updateUser(user)
      .then(function (response) {
        dispatch(updateUserSuccess(response.data));
        browserHistory.push(`/users/${user.id}`);
      })
      .catch(function (error) {
        dispatch(updateUserFailure(error));
      });
  }
}

function updateUserRequest() {
  return { type: types.UPDATE_USER_REQUEST }
}

function updateUserSuccess(user) {
  return function(dispatch) {
    dispatch(notificationActions.info('User successfully updated'));
    dispatch({
      type: types.UPDATE_USER_SUCCESS,
      payload: { user }
    });
  }
}

function updateUserFailure(error) {
  return function(dispatch) {
    dispatch(notificationActions.error('Updating user failed'));
    dispatch({ type: types.UPDATE_USER_FAILURE });
  }
}

export function deleteUser(id) {
  return function(dispatch) {
    dispatch(deleteUserRequest());
    userApi.deleteUser(id)
      .then(function (response) {
        dispatch(deleteUserSuccess(response.data));
        browserHistory.push(`/users`);
      })
      .catch(function (error) {
        dispatch(deleteUserFailure());
      });
  }
}

function deleteUserRequest() {
  return { type: types.DELETE_USER_REQUEST };
}

function deleteUserSuccess() {
  return function(dispatch) {
    dispatch(notificationActions.info('User successfully deleted'));
    dispatch({ type: types.DELETE_USER_SUCCESS });
  }
}

function deleteUserFailure() {
  return function(dispatch) {
    dispatch(notificationActions.error('Deleting user failed'));
    dispatch({ type: types.DELETE_USER_FAILURE });
  }
}
