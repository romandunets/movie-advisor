import React, { Component } from 'react';
import { browserHistory } from 'react-router';

class UsersListItem extends Component {
  render() {
    const { user, isAuthenticated } = this.props;

    return (
      <tr onClick={(e) => browserHistory.push(`users/${user.id}`)}>
        <td>{ user.username }</td>
        <td>{ user.email }</td>
        <td>{ user.firstName }</td>
        <td>{ user.secondName }</td>
        <td>{ user.role.name.charAt(0).toUpperCase() + user.role.name.slice(1) }</td>
        <td>{ user.description }</td>
      </tr>
    );
  }
}

export default UsersListItem;
