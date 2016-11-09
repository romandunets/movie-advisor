import React, { PropTypes } from 'react';

const UserCard = ({ user }) => {
  return (
     <dl>
       <dt>Username</dt>
       <dd>{ user.username }</dd>
     </dl>
  );
}

UserCard.propTypes = {
  user: PropTypes.object.isRequired
}

export default UserCard;
