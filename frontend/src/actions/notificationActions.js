import axios from 'axios';

import * as types from './actionTypes';

export function info(message) {
  return {
    type: types.SEND_NOTIFICATION_INFO,
    payload: { message }
  };
}

export function error(message) {
  return {
    type: types.SEND_NOTIFICATION_ERROR,
    payload: { message }
  };
}

export function close(id) {
  return {
    type: types.CLOSE_NOTIFICATION,
    payload: { id }
  };
}
