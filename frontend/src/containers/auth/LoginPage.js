import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';

import * as authActions from '../../actions/authActions';
import LoginForm from '../../components/auth/LoginForm';

class LoginPage extends Component {
  handleSubmit(credentials) {
    this.props.actions.login(credentials);
  }

  render() {
    const { message } = this.props;
    return (
      <div className="center-container">
        <div className="center-content">
          <h3 className="title text-center">Sign in to Movie Advisor</h3>
          { message && <h5>{ message }</h5> }
          <LoginForm onSubmit={ this.handleSubmit.bind(this) } />
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

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
