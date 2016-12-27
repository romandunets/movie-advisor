import React, { Component } from 'react';
import { Link } from 'react-router';

class UsersActionBar extends Component {
  render() {
    const { isAuthenticated, isAdmin } = this.props;

    return (
      <div className="actions text-md-right">
        { isAuthenticated && isAdmin && <Link to='/users/new' role="button" className="btn btn-primary btn-sm">New user</Link> }
      </div>
    );
  }
}

export default UsersActionBar;
