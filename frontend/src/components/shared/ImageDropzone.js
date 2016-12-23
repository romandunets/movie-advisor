import React, { Component } from 'react';
import Dropzone from 'react-dropzone';

class ImageDropzone extends Component {
  onDrop(files, e) {
    const { input, afterDrop, onDrop } = this.props;

    if (onDrop) {
      onDrop(files[0]);
    }
    else {
      input.onChange(files);
    }
  }

  render() {
    const { name, input, photo } = this.props;
    const image = photo ? photo.preview : (Array.isArray(input.value) && input.value.length > 0 ? input.value[0].preview : input.value);

    return (
      <div className="dropzone">
        <Dropzone name={name} multiple={false} onDrop={this.onDrop.bind(this)}>
          { !image && <span>Drop image here, or click to select files to upload.</span> }
          { image && <img src={image} /> }
        </Dropzone>
      </div>
    );
  }
}

export default ImageDropzone;
