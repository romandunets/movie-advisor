import React from 'react';
import Dropzone from 'react-dropzone';

const FileDropzone = (field) => {
  const file = field.input.value[0];

  return (
    <div className="dropzone">
      <Dropzone name={field.name} onDrop={(fileToUpload, e) => field.input.onChange(fileToUpload)}>
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

export default FileDropzone;
