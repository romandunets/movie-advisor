import React from 'react';

const MovieInfo = ({ movie }) => {
  <div className="col-md-9">
    <div className="row">
      <div className="col-md-6">
        <h4>
          { movie.title }
          <small className="text-muted"> ({ movie.year })</small>
        </h4>
      </div>
      <div className="col-md-6">
        <div className="rating text-md-right">
          <span>★</span>
          <span>★</span>
          <span>★</span>
          <span>★</span>
          <span>☆</span>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-md-12">
        { movie.age_restriction } | { movie.duration } min | Action, Adventure, Sci-Fi
      </div>
    </div>
    <div className="row">
      <div className="col-md-12 plot">
        <p>{ movie.description }</p>
      </div>
    </div>
    <div className="row">
      <div className="col-md-12 people">
        <div>Director: { movie.producer }</div>
        <div>Actors: Robert Downey Jr., Terrence Howard, Jeff Bridges, Gwyneth Paltrow</div>
      </div>
    </div>
  </div>
}

export default MovieInfo;