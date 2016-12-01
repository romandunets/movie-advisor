import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as authActions from '../../actions/authActions';
import MessageBox from '../../components/shared/MessageBox';
import UserForm from '../../components/users/UserForm';

class SignupPage extends Component {
  handleSubmit(user) {
    this.props.actions.signup(user);
  }

  render() {
    const { message } = this.props;
    return (
      <div className="center-container">
        <div className="center-content">
          <h3 className="title text-center">Sign up to Movie Advisor</h3>
          <MessageBox message={message} />
          <UserForm onSubmit={ this.handleSubmit.bind(this) } />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    message: state.auth.message
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(authActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupPage);
