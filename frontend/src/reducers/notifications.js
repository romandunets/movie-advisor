import * as types from '../actions/actionTypes';
import initialState from './initialState';

const notificationsReducer = (state = initialState.notifications, action) => {
  switch(action.type) {
    case types.SEND_NOTIFICATION_INFO:
      return {...state, notifications: createNotification(state, action, 'INFO')}
    case types.SEND_NOTIFICATION_ERROR:
      return {...state, notifications: createNotification(state, action, 'ERROR')}
    case types.CLOSE_NOTIFICATION:
      return {...state, notifications: removeNotification(state, action)}
    case types.CLEAR_NOTIFICATIONS:
      return {...state, notifications: []}
    default:
      return state;
  }
}

function createNotification(state, action, type) {
  const id = new Date().getTime()
  return [{ id, message: action.payload.message, type }];
}

function appendNotification(state, action, type) {
  const notification = createNotification(state, action, type);
  if (!containsNotification(state, notification)) {
    return state.notifications.concat(notification);
  }
}

function removeNotification(state, action) {
  return state.notifications.filter((n) => n.id != action.payload.id);
}

function containsNotification(state, notification) {
  return state.notifications.findIndex(e => { return e.message == notification.message }) > -1;
}

export default notificationsReducer;
