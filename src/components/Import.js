import React, { useState } from "react";
import "./import.css";
import axios from "axios";

function Import() {
  const [file, setFile] = useState("");
  const handleUpload = () => {
    const formData = new FormData();
    formData.append("excel_file", file);
    axios
      .post("http://127.0.0.1:8000/api/import", formData, {
        headers: {
          "Content-Type": "multipart/form-data ; charset=utf-8",
        },
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className="import_form">
      <input
        type="file"
        onChange={(e) => setFile(e.target.files[0])}
        accept=".xlsx,.csv"
      />
      <button className="import_btn" onClick={handleUpload}>
        Import Excel
      </button>
    </div>
  );
}

export default Import;
