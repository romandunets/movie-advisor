import React, { Component } from 'react';

import NotificationAlert from './NotificationAlert';

class NotificationsBox extends Component {
  render() {
    const { notifications } = this.props;

    return (
      <div className="notifications-box">
        { notifications.map ((notification, index) => 
          <NotificationAlert key={index} notification={ notification } />
        )}
      </div>
    );
  }
}

export default NotificationsBox;
