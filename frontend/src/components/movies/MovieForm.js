import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { browserHistory } from 'react-router';

import FileDropzone from '../shared/FileDropzone';

class MovieForm extends Component {
  handleLoadFromOMDB(event) {
    event.preventDefault();
    const title = document.getElementsByName("title")[0].value;
    this.props.loadFromOMDB(title);
  }

  afterDrop(file) {
    this.props.addPhoto(file);
  }

  render() {
    const { handleSubmit } = this.props;
    const { photos } = this.props.initialValues;

    return (
      <form className="form-horizontal" onSubmit={ handleSubmit }>
        <div className="form-group required">
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <Field name="title" component="input" type="text" required="required" id="movie-title" className="form-control" />
          </div>
          <button onClick={ this.handleLoadFromOMDB.bind(this) } className="btn btn-secondary btn-sm">Load from OMDB</button>
        </div>
        <div className="form-group required">
          <label htmlFor="year">Year</label>
          <Field name="year" component="input" type="text" required="required" className="form-control"/>
        </div>
        <div className="form-group required">
          <label htmlFor="studio">Studio</label>
          <Field name="studio" component="input" type="text" required="required" className="form-control"/>
        </div>
        <div className="form-group required">
          <label htmlFor="producer">Director</label>
          <Field name="producer" component="input" type="text" required="required" className="form-control"/>
        </div>
        <div className="form-group required">
          <label htmlFor="duration">Duration (min)</label>
          <Field name="duration" component="input" type="text" required="required" className="form-control"/>
        </div>
        <div className="form-group required">
          <label htmlFor="ageRestriction">Age restriction</label>
          <Field name="ageRestriction" component="select" required="required" className="form-control">
            <option value="N/A">N/A</option>
            <option value="PG">G</option>
            <option value="PG">PG</option>
            <option value="PG-13">PG-13</option>
            <option value="R">R</option>
            <option value="NC-17">NC-17</option>
          </Field>
        </div>
        <div className="form-group required">
          <label htmlFor="coverImage">Poster</label>
          <Field name="coverImage" component={ FileDropzone } />
        </div>
        <div className="form-group">
          <label htmlFor="photos">Photos</label>
          <div className="dropzone-block">
            <Field name="photo_new" component={ FileDropzone } afterDrop={ this.afterDrop.bind(this) } />
            { photos &&
              photos.map (photo =>
                <Field key={ photos.indexOf(photo) } name={ `photo_${photos.indexOf(photo)}` } component={ FileDropzone } photo={ photo } afterDrop={ this.afterDrop.bind(this) }/>
              )
            }
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <Field name="description" component="textarea" className="form-control"/>
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary">Submit</button>
          <button className="btn btn-link float-xs-right" onClick={ browserHistory.goBack }>Cancel</button>
        </div>
      </form>
    );
  }
}

MovieForm = reduxForm({
  form: 'movieForm'
})(MovieForm);

export default MovieForm;
