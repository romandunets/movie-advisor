import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { browserHistory } from 'react-router';

class MovieForm extends Component {
  searchOMDB(change){
    var title = document.getElementsByName("title")[0].value;

    if(title.length > 0){
      axios("http://www.omdbapi.com/?t="+title+"&y=&plot=short&r=json")
        .then(function(res){
          var data = res.data;
          if(res.data.Response != "False"){
            change("title", data.Title);
            change("description", data.Plot);
            change("year", data.Year);
            change("image", data.Poster);
            change("producer", data.Director);
            change("duration", data.Runtime.replace(" min", ""));
            change("age_restriction", data.Rated);
          }
      });
    }
  }

  handleClick(event) {
    this.searchOMDB();
  }

  render() {
    const { handleSubmit, change } = this.props;

    return (
      <form className="form-horizontal" onSubmit={ handleSubmit }>
        <div className="form-group required">
          <label htmlFor="title">Title</label>
          <Field name="title" component="input" type="text" required="required" id="movie-title" className="form-control" />
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
          <label htmlFor="producer">Producer</label>
          <Field name="producer" component="input" type="text" required="required" className="form-control"/>
        </div>
        <div className="form-group required">
          <label htmlFor="duration">Duration (min)</label>
          <Field name="duration" component="input" type="text" required="required" className="form-control"/>
        </div>
        <div className="form-group required">
          <label htmlFor="ageRestriction">Age restriction</label>
        </div>
        <div className="form-group required">
          <label htmlFor="year">Images</label>
        </div>
        <div className="form-group required">
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

/*
<form onSubmit={ handleSubmit }>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <Field name="title" component="input" type="text" className="form-control" id="TitleInput"/>
          <button onClick={this.searchOMDB.bind(this, change)} className="btn btn-secondary">Load from OMDB</button>
        </div>
        <div className="form-group">
          <label htmlFor="year">Year</label>
          <Field name="year" component="input" type="text" className="form-control"/>
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <Field name="description" component="input" type="text" className="form-control"/>
        </div>
        <div className="form-group">
          <label htmlFor="image">Image URL</label>
          <Field name="image" component="input" type="text" className="form-control"/>
        </div>
        <div className="form-group">
          <label htmlFor="studio">Studio</label>
          <Field name="studio" component="input" type="text" className="form-control"/>
        </div>
        <div className="form-group">
          <label htmlFor="producer">Producer</label>
          <Field name="producer" component="input" type="text" className="form-control"/>
        </div>
        <div className="form-group">
          <label htmlFor="duration">Duration (min)</label>
          <Field name="duration" component="input" type="text" className="form-control"/>
        </div>
        <div className="form-group">
          <label htmlFor="age_restriction">Age restriction</label>
          <Field name="age_restriction" component="input" type="text" className="form-control"/>
        </div>
        
        <a href='#' onClick={browserHistory.goBack} className="btn btn-secondary">Cancel</a>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
*/