import * as types from '../actions/actionTypes';
import initialState from './initialState';

const notificationsReducer = (state = initialState.notifications, action) => {
  switch(action.type) {
    case types.SEND_NOTIFICATION_INFO:
      return {...state, notifications: appendNotification(state, action, 'INFO')}
    case types.SEND_NOTIFICATION_ERROR:
      return {...state,  notifications: appendNotification(state, action, 'ERROR')}
    default:
      return state;
  }
}

function appendNotification(state, action, type) {
  const notification = { message: action.payload.message, type };
  return state.notifications.concat([notification]);
}

export default notificationsReducer;
