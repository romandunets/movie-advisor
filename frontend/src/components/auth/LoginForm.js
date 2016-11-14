import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class LoginForm extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={ handleSubmit }>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <Field name="username" component="input" type="text" className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <Field name="password" component="input" type="password" className="form-control" />
        </div>
        <Link to="/signup" className="btn btn-secondary">Signup</Link>
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
    );
  }
}

LoginForm = reduxForm({
  form: 'login'
})(LoginForm);

export default LoginForm;
