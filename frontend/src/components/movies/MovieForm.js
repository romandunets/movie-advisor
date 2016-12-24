import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { browserHistory } from 'react-router';

import ImageDropzone from '../shared/ImageDropzone';

class MovieForm extends Component {
  handleLoadFromOMDB(event) {
    event.preventDefault();
    const title = document.getElementsByName("title")[0].value;
    this.props.loadFromOMDB(title);
  }

  onDrop(file) {
    this.props.addPhoto(file);
  }

  render() {
    const { handleSubmit } = this.props;
    const { photos, genres, tags, availableGenres, availableTags } = this.props.initialValues;

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
          <label htmlFor="director">Director</label>
          <Field name="director" component="input" type="text" required="required" className="form-control"/>
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
        <div className="form-group">
          <label htmlFor="genres">Genres</label>
          <div>
            {
              availableGenres.map ((genre, index) =>
                <label key={`${index}`} className="custom-control custom-checkbox">
                  <Field name={`genres[${genre.id}]`} checked={ genres.find(g => g.id == genre.id) } component="input" type="checkbox" className="custom-control-input" />
                  <span className="custom-control-indicator"></span>
                  <span className="custom-control-description">{ genre.name }</span>
                </label>
              )
            }
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="genres">Tags</label>
          <div>
            {
              availableTags.map ((tag, index) =>
                <label key={`${index}`} className="custom-control custom-checkbox">
                  <Field name={`tags[${tag.id}]`} checked={ tags.find(t => t.id == tag.id) } component="input" type="checkbox" className="custom-control-input" />
                  <span className="custom-control-indicator"></span>
                  <span className="custom-control-description">{ tag.name }</span>
                </label>
              )
            }
          </div>
        </div>
        <div className="form-group required">
          <label htmlFor="coverImage">Poster</label>
          <Field name="coverImage" component={ ImageDropzone } />
        </div>
        <div className="form-group">
          <label htmlFor="photos">Photos</label>
          <div className="dropzone-block">
            {
              photos.map ((photo, index) =>
                <Field key={ `photo_${index}` } name={ `photo_${index}` } component={ ImageDropzone } photo={ photo } />
              )
            }
            <Field name="photo_new" component={ ImageDropzone } onDrop={ this.onDrop.bind(this) } />
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
