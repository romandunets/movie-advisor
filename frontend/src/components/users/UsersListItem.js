import React from 'react';
import { Link } from 'react-router'

const UsersListItem = ({ user }) => (
  <li>
    <Link to={`/users/${user.id}`}>{user.username}</Link>
  </li>
)

export default UsersListItem;
