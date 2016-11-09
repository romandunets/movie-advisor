import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { bindActionCreators } from 'redux'

import * as userActions from '../../actions/userActions'
import UsersList from '../../components/users/UsersList'

class UsersListPage extends Component {
  componentWillMount() {
    this.props.actions.listUsers();
  }

  render() {
    const { users, message, error } = this.props;
    return (
      <div>
        <h2>{ message }</h2>
        <Link to={`/users/new`}>Create user</Link>
        <UsersList users={ users } />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users.users,
    message: state.users.message,
    error: state.users.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(userActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersListPage);
