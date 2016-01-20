import * as types from '../actions/actionTypes';
import initialState from './initialState';

const notificationsReducer = (state = initialState.notifications, action) => {
  switch(action.type) {
    case types.SEND_NOTIFICATION_INFO:
      const notifications = state.notifications.concat([action.payload]);
      return {...state, notifications}
    default:
      return state;
  }
}

export default notificationsReducer;
