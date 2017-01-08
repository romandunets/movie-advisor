import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';

import * as userActions from '../../actions/userActions';
import UsersList from '../../components/users/UsersList';
import UsersActionBar from '../../components/users/UsersActionBar';

class UsersListPage extends Component {
  componentWillMount() {
    this.props.actions.listUsers();
  }

  render() {
    const { users, isAuthenticated, isAdmin } = this.props;
    return (
      <div>
        <div className="header">
          <UsersActionBar isAuthenticated={ isAuthenticated } isAdmin={ isAdmin } />
        </div>
        <UsersList users={ users } />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users.users,
    isAuthenticated: state.auth.isAuthenticated,
    isAdmin: state.auth.isAdmin
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(userActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersListPage);
