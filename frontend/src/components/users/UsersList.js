import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import UsersListItem from './UsersListItem'

const UsersList = ({ users }) => (
  <table className="table table-hover table-clickable">
    <thead>
      <tr>
        <th>Username</th>
        <th>Email</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Role</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      { users.map (user => <UsersListItem key={user.id} user={user} />) }
    </tbody>
  </table>
)

export default UsersList;

