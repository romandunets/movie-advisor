import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

class LoginForm extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={ handleSubmit }>
        <div>
          <label htmlFor="username">Username</label>
          <Field name="username" component="input" type="text" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <Field name="password" component="input" type="password" />
        </div>
        <button type="submit">Login</button>
      </form>
    );
  }
}

LoginForm = reduxForm({
  form: 'login'
})(LoginForm);

export default LoginForm;
