import React, { Component } from 'react';

class NotificationAlert extends Component {
  getClassName(type) {
    const classMap = {
      'INFO': 'alert-info',
      'ERROR': 'alert-danger'
    }

    return classMap[type];
  }

  render() {
    const { notification } = this.props;
    const className = this.getClassName(notification.type);

    return (
      <div className={ `alert ${className} alert-dismissible fade in` } role="alert">
        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
        <span>{ notification.message }</span>
      </div>
    );
  }
}

export default NotificationAlert;
