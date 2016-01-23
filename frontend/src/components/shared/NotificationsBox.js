import React, { Component } from 'react';

class NotificationsBox extends Component {
  render() {
    const { notifications } = this.props;

    return (
      <div className="notifications-box">
        { notifications.map ((notification, index) => {
            switch(notification.type) {
              case "INFO":
                return (
                  <div key={ index } className="alert alert-info alert-dismissible fade in" role="alert">
                    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                    <span>{ notification.message }</span>
                  </div>
                );
              case "ERROR":
                return (
                  <div key={ index } className="alert alert-danger alert-dismissible fade in" role="alert">
                    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                    <span>{ notification.message }</span>
                  </div>
                );
            }
          })
        }
      </div>
    );
  }
}

export default NotificationsBox;
