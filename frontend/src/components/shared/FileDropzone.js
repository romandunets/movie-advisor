import React, { Component } from 'react';
import Dropzone from 'react-dropzone';

class FileDropzone extends Component {
  onDrop(files, e) {
    const { input, afterDrop } = this.props;

    input.onChange(files);
    if (afterDrop) {
      afterDrop(files[0]);
    }
  }

  render() {
    const { name, input } = this.props;
    const file = input.value[0];

    return (
      <div className="dropzone">
        <Dropzone name={name} multiple={false} onDrop={this.onDrop.bind(this)}>
          { !file &&
            <span>Drop file here, or click to select files to upload.</span>
          }
          { file &&
            <img src={file.preview} />
          }
        </Dropzone>
      </div>
    );
  }
}

export default FileDropzone;
