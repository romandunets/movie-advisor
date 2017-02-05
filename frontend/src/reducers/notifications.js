import * as types from '../actions/actionTypes';
import initialState from './initialState';

const notificationsReducer = (state = initialState.notifications, action) => {
  switch(action.type) {
    case types.SEND_NOTIFICATION_INFO:
      return {...state, notifications: appendNotification(state, action, 'INFO')}
    case types.SEND_NOTIFICATION_ERROR:
      return {...state, notifications: appendNotification(state, action, 'ERROR')}
    case types.CLOSE_NOTIFICATION:
      return {...state, notifications: removeNotification(state, action)}
    default:
      return state;
  }
}

function appendNotification(state, action, type) {
  const id = new Date().getTime()
  const notification = { id, message: action.payload.message, type };
  if (!containsNotification(state, notification)) {
    return state.notifications.concat([notification]);
  }
}

function removeNotification(state, action) {
  return state.notifications.filter((n) => n.id != action.payload.id);
}

function containsNotification(state, notification) {
  return state.notifications.findIndex(e => { return e.message == notification.message }) > -1;
}

export default notificationsReducer;
