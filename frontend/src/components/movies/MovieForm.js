import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { compose } from 'redux';

class MovieForm extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={ handleSubmit }>
        <div>
          <label htmlFor="title">Title</label>
          <Field name="title" component="input" type="text" />
        </div>
        <div>
          <label htmlFor="year">Year</label>
          <Field name="year" component="input" type="text" />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <Field name="description" component="input" type="text" />
        </div>
        <div>
          <label htmlFor="image">Image URL</label>
          <Field name="image" component="input" type="text" />
        </div>
        <div>
          <label htmlFor="studio">Studio</label>
          <Field name="studio" component="input" type="text" />
        </div>
        <div>
          <label htmlFor="producer">Producer</label>
          <Field name="producer" component="input" type="text" />
        </div>
        <div>
          <label htmlFor="duration">Duration (min)</label>
          <Field name="duration" component="input" type="text" />
        </div>
        <div>
          <label htmlFor="age_restriction">Age restriction</label>
          <Field name="age_restriction" component="input" type="text" />
        </div>
        
        <button type="submit">Submit</button>
        <a href='#' onClick={browserHistory.goBack}>Cancel</a>
      </form>
    );
  }
}

MovieForm = reduxForm({
  form: 'movie'
})(MovieForm);

export default MovieForm;
