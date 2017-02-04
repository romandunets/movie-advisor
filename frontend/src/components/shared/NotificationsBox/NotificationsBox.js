import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as notificationActions from '../../../actions/notificationActions';
import NotificationAlert from './NotificationAlert';

class NotificationsBox extends Component {
  closeNotification(id) {
    this.props.actions.close(id);
  }

  render() {
    const { notifications } = this.props;

    return (
      <div className="notifications-box">
        { notifications.map ((notification, index) => 
          <NotificationAlert key={index} notification={ notification } closeNotification={ this.closeNotification.bind(this) } />
        )}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(notificationActions, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(NotificationsBox);

