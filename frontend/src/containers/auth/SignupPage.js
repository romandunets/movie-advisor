import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as authActions from '../../actions/authActions';
import NotificationsBox from '../../components/shared/NotificationsBox/NotificationsBox';
import UserForm from '../../components/users/UserForm';

class SignupPage extends Component {
  handleSubmit(user) {
    this.props.actions.signup(user);
  }

  render() {
    const { notifications } = this.props;

    return (
      <div className="center-container">
        <div className="center-content">
          <h3 className="title text-center">Sign up to Movie Advisor</h3>
          <NotificationsBox notifications={notifications} />
          <UserForm onSubmit={ this.handleSubmit.bind(this) } />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    notifications: state.notifications.notifications
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(authActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupPage);
