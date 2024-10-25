import React, { useState } from "react";
import Header from "../components/common/Header";

const UploadMediaManager = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileChange = (event) => {
    setSelectedFiles([...event.target.files]);
  };
  return (
    <div className="container mt-5 text-light">
      <Header title="Upload Files" />
      <div
        className="mt-4 p-4 border rounded bg-dark mx-auto"
        style={{ maxWidth: "500px" }}
      >
        <div className="mb-3">
          <div className="d-flex align-items-center mb-3">
            <label className="w-25">Title:</label>
            <input
              type="text"
              placeholder="Enter title"
              className="form-control"
            />
          </div>

          <div className="d-flex align-items-center mb-3">
            <label className="w-25">Upload Files:</label>
            <input
              type="file"
              multiple
              onChange={handleFileChange}
              className="form-control"
            />
          </div>

          <div className="ms-5">
            <p className="mt-2">Files You Selected:</p>
            <ul className="list-unstyled">
              {selectedFiles.length > 0 ? (
                selectedFiles.map((file, index) => (
                  <li key={index}>
                    <i className="bi bi-file-earmark"></i> {file.name}
                  </li>
                ))
              ) : (
                <li>No files selected</li>
              )}
            </ul>
          </div>

          <div className="d-flex gap-2 mt-4">
            <button className="btn btn-primary">Upload</button>
            <button className="btn btn-secondary">Cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadMediaManager;
