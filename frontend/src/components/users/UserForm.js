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
      <form className="form-horizontal" onSubmit={ handleSubmit }>
        <div className="form-group required">
          <label htmlFor="username">Username</label>
          <Field name="username" component="input" type="text" required="required" className="form-control"/>
        </div>
        <div className="form-group required">
          <label htmlFor="email">Email</label>
          <Field name="email" component="input" type="email" required="required" className="form-control"/>
        </div>
        <div className="form-group required">
          <label htmlFor="password">Password</label>
          <Field name="password" component="input" type="password" required="required" className="form-control"/>
        </div>
        <div className="form-group required">
          <label htmlFor="passwordConfirmation">Password confirmation</label>
          <Field name="passwordConfirmation" component="input" type="password" required="required" className="form-control"/>
        </div>
        <div className="form-group">
          <label htmlFor="firstName">First name</label>
          <Field name="firstName" component="input" type="text" className="form-control"/>
        </div>
        <div className="form-group">
          <label htmlFor="firstName">Second name</label>
          <Field name="secondName" component="input" type="text" className="form-control"/>
        </div>
        <div className="form-group">
          <label htmlFor="birthday">Birthday</label>
          <Field name="birthday" component="input" type="date" className="form-control"/>
        </div>
        <div className="form-group">
          <label htmlFor="gender">Gender</label>
          <div className="radio">
            <label><Field name="gender" component="input" type="radio" value="male" /> Male</label>
          </div>
          <div className="radio">
            <label><Field name="gender" component="input" type="radio" value="female" /> Female</label>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <Field name="description" component="textarea" className="form-control"/>
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
  form: 'userForm'
})(UserForm);

export default UserForm;
