import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';

import * as userActions from '../../actions/userActions';
import UserCard from '../../components/users/UserCard';

class UserPage extends Component {
  componentWillMount() {
    this.props.actions.getUser(this.props.params.id);
  }

  deleteUser(id) {
    this.props.actions.deleteUser(id);
  }

  render() {
    const { currentUser, user, isLoading, isAuthenticated, isAdmin } = this.props;

    if (!isLoading) {
      return (
        <div>
          <UserCard currentUser={currentUser} user={user} deleteUser={this.deleteUser.bind(this, user.id)} isAuthenticated={isAuthenticated} isAdmin={isAdmin} />
        </div>
      );
    }

    return null;
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.auth.currentUser,
    user: state.users.user,
    isLoading: state.users.isLoading,
    message: state.users.message,
    isAuthenticated: state.auth.isAuthenticated,
    isAdmin: state.auth.isAdmin
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(userActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);
