import axios from 'axios';

import * as types from './actionTypes';

export function info(message) {
  console.log(message);
  return function(dispatch) {
    console.log(message);
    dispatch({
      type: types.SEND_NOTIFICATION_INFO,
      payload: { message, type: "INFO" }
    });
  }
}
