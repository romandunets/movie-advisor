import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as authActions from '../../actions/authActions';
import UserForm from '../../components/users/UserForm';

class SignupPage extends Component {
  handleSubmit(user) {
    this.props.actions.signup(user);
  }

  render() {
    return (
      <UserForm onSubmit={ this.handleSubmit.bind(this) } />
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(authActions, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(SignupPage);
