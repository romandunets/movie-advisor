import React, { Component } from 'react';
import Dropzone from 'react-dropzone';

class ImageDropzone extends Component {
  onDrop(files, e) {
    const { input, afterDrop } = this.props;

    input.onChange(files);
    if (afterDrop) {
      afterDrop(files[0]);
    }
  }

  render() {
    const { name, input } = this.props;
    const image = (input.value !== undefined) ? (Array.isArray(input.value) ? input.value[0].preview : input.value) : null;

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
