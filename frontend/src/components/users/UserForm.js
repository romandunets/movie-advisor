import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { compose } from 'redux';
import { Link } from 'react-router';

class UserForm extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={ handleSubmit }>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <Field name="username" component="input" type="text" className="form-control"/>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <Field name="email" component="input" type="email" className="form-control"/>
        </div>
        <div className="form-group">
          <label htmlFor="email">Password</label>
          <Field name="password" component="input" type="password" className="form-control"/>
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary">Submit</button>
          <button className="btn btn-link float-xs-right" onClick={browserHistory.goBack}>Cancel</button>
        </div>
      </form>
    );
  }
}

UserForm = reduxForm({
  form: 'user'
})(UserForm);

export default UserForm;
