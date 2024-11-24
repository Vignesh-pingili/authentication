import React, { useState } from "react";
import Papa from 'papaparse';

const CSVUploaderFile = ({ setCsvData,setHeaders }) => {
  const [dragging, setDragging] = useState(false);
//   const [data, setData] = useState(null)

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = () => {
    setDragging(false);
  };

  const handleDrop = (e) => {
        console.log("handle file change in drop");
    e.preventDefault();
    setDragging(false);
    const file = e.dataTransfer.files[0];
    if (file && file.type === "text/csv") {
            Papa.parse(file, {
      complete: (result) => {
        setCsvData(result.data) ;
      },
    });
    setHeaders(true)
    //   onFileUpload(file);
    } else {
      alert("Please upload a valid CSV file.");
    }
  };

  const handleFileChange = (e) => {
    console.log("handle file change");
    
    const file = e.target.files[0];
    if (file && file.type === "text/csv") {
                  Papa.parse(file, {
      complete: (result) => {
        setCsvData(result.data) ;
      },
    });
    setHeaders(true)
    } else {
      alert("Please upload a valid CSV file.");
    }
  };

  return (
    <div
   style={{
        border: dragging ? "2px dashed blue" : "2px dashed gray",
        padding: "20px",
        borderRadius: "5px",
        textAlign: "center",
        backgroundColor: dragging ? "#f0f8ff" : "#fafafa",
        cursor: "pointer",
        position: "relative",
        width: "100%",
        maxWidth: "400px",
        margin: "0 auto",
      }}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <p style={{ fontSize: "16px", fontWeight: "bold", margin: 0 }}>
        Drag and drop a CSV file <span style={{ fontWeight: "normal" }}>or</span> click to upload
      </p>
      <input
        type="file"
        accept=".csv"
        onChange={handleFileChange}
        style={{
          opacity: 0,
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          cursor: "pointer",
        }}
      />
    </div>
  );
};

export default CSVUploaderFile;
