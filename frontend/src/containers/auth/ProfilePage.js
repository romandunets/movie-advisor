import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';

import * as userActions from '../../actions/userActions';
import * as authActions from '../../actions/authActions';
import UserCard from '../../components/users/UserCard';

class ProfilePage extends Component {
  componentWillMount() {
    this.props.actions.getUser(this.props.currentUser.id);
  }

  deleteUser(id) {
    this.props.actions.deleteUser(id);
    this.props.actions.logout();
  }

  render() {
    const { currentUser, user, isAuthenticated } = this.props;

    return (
      <div>
        <UserCard currentUser={currentUser} user={user} deleteUser={this.deleteUser.bind(this, user.id)} isAuthenticated={isAuthenticated} isAdmin={true} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.auth.currentUser,
    user: state.users.user,
    isAuthenticated: state.auth.isAuthenticated
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({ ...userActions, ...authActions }, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
