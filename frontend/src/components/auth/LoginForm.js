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
          <Field name="username" component="input" type="text" placeholder="Username" className="form-control" />
        </div>
        <div className="form-group">
          <Field name="password" component="input" type="password" placeholder="Password" className="form-control" />
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary full-width">Login</button>
        </div>
        
        <Link to="/signup" className="btn btn-link">Signup</Link>
      </form>
    );
  }
}

LoginForm = reduxForm({
  form: 'login'
})(LoginForm);

export default LoginForm;
