import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class MoviesSearchBar extends Component {
  render() {
    const { handleSubmit } = this.props;

    return (
      <form className="form-inline float-md-left" onSubmit={ handleSubmit }>
        <div className="form-group">
          <Field name="free_search" component="input" type="text" className="form-control" placeholder="Free text search"/>
        </div>
        <button type="submit" className="btn btn-primary">Search</button>
      </form>
    );
  }
}

MoviesSearchBar = reduxForm({
  form: 'moviesSearch'
})(MoviesSearchBar);

export default MoviesSearchBar;
