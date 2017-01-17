import React from 'react';

const MessageBox = ({ message }) => (
  <div className="message-box">
    { message &&
      <div className="alert alert-info alert-dismissible fade in" role="alert">
        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
        <span>{ message }</span>
      </div>
    }
  </div>
)

export default MessageBox;
