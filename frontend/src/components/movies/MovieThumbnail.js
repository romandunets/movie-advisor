import React from 'react';

const MovieThumbnail = ({ movie }) => {
  <div className="thumbnail col-md-3">
    <img src={ movie.image } className="img-fluid img-rounded" />
  </div>
}

export default MovieThumbnail;