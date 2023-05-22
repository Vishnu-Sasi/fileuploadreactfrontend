import React, { useState } from "react";
import axios from "axios";
import "./FileUpload.css"

const FileUpload = () => {
  const [file, setFile] = useState([]);
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };
  const handleFileUpload = () => {
    const formData = new FormData();

    formData.append("file", file);
    let config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };

    axios
      .post("http://localhost:8090/uploads", formData, config)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="form">
      <h1> file uploader</h1>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleFileUpload}>upload file</button>
    </div>
  );
};

export default FileUpload;
