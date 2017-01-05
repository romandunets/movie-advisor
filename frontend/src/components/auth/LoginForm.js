import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class LoginForm extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <form className="form-narrow" onSubmit={ handleSubmit }>
        <div className="form-group">
          To test this app as an admin please login using the following credentials: m_admin as username and Aa123456 as password
        </div>
        <div className="form-group">
          <Field name="username" component="input" type="text" placeholder="Username" required="required" className="form-control" />
        </div>
        <div className="form-group">
          <Field name="password" component="input" type="password" placeholder="Password" required="required" className="form-control" />
        </div>
        <div className="form-group text-center">
          <button type="submit" className="btn btn-primary full-width">Login</button>
          <Link to="/signup" className="btn btn-link">Create an account</Link>
        </div>
      </form>
    );
  }
}

LoginForm = reduxForm({
  form: 'login'
})(LoginForm);

export default LoginForm;
