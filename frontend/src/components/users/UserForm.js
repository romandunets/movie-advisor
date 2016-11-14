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
        <Link to='#'  className="btn btn-secondary"onClick={browserHistory.goBack}>Cancel</Link>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    );
  }
}

UserForm = reduxForm({
  form: 'user'
})(UserForm);

export default UserForm;
