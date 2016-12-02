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
          <label htmlFor="password">Password</label>
          <Field name="password" component="input" type="password" className="form-control"/>
        </div>
        <div className="form-group">
          <label htmlFor="passwordConfirmation">Password confirmation</label>
          <Field name="passwordConfirmation" component="input" type="password" className="form-control"/>
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
          <label>Gender</label>
          <div class="radio">
            <label><Field name="gender" component="input" type="radio" value="male" /> Male</label>
          </div>
          <div class="radio">
            <label><Field name="gender" component="input" type="radio" value="female" /> Female</label>
          </div>
        </div>
        <div className="form-group">
          <label for="description">About me</label>
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
  form: 'user'
})(UserForm);

export default UserForm;
