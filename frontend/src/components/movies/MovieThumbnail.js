import React from 'react';

const MovieThumbnail = ({ movie }) => (
  <div className="thumbnail-box col-md-3">
    <img src={ movie.image } className="img-fluid"/>
  </div>
)

export default MovieThumbnail;