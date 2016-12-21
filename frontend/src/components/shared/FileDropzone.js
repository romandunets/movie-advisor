import React from 'react';
import Dropzone from 'react-dropzone';

const FileDropzone = (field) => {
  const file = field.input.value[0];

  return (
    <div className="dropzone">
      <Dropzone name={field.name} onDrop={(fileToUpload, e) => field.input.onChange(fileToUpload)}>
        { !file &&
          <div>Drop file here, or click to select files to upload.</div>
        }
        { file &&
          <img src={file.preview} />
        }
      </Dropzone>
    </div>
  );
}

export default FileDropzone;
