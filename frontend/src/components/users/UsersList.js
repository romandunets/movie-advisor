import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import UsersListItem from './UsersListItem'

const UsersList = ({ users }) => (
  <ul>{ users.map (user => <UsersListItem key={user.id} user={user} />) }</ul>
)

UsersList.propTypes = {
  users: PropTypes.array.isRequired
}

export default UsersList;
