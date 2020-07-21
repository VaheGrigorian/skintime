import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";

import "../theme/partials/Uploader.module.css";

export default () => {
  const onDrop = useCallback((acceptedFiles) => {}, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  return (
    <>
      <div {...getRootProps({ className: "uploader" })}>
        {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          <p>Drag and drop some files here, or click to select files</p>
        )}
        <input
          {...getInputProps({
            className: "inputfile",
            style: { display: "block" },
          })}
        />
      </div>
      <div className="upload-preview"></div>
    </>
  );
};
