import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { compose } from 'redux';

class UserForm extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={ handleSubmit }>
        <div>
          <label htmlFor="username">Username</label>
          <Field name="username" component="input" type="text" />
        </div>
        <button type="submit">Submit</button>
        <a href='#' onClick={browserHistory.goBack}>Cancel</a>
      </form>
    );
  }
}

UserForm = reduxForm({
  form: 'user'
})(UserForm);

export default UserForm;
