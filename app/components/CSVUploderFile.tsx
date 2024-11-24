import React, { useState } from "react";
import Papa from 'papaparse';
import { Typography } from "@mui/material";

const CSVUploaderFile = ({ setCsvData,setHeaders }) => {
  const [dragging, setDragging] = useState(false);
//   const [data, setData] = useState(null)
const [error, setError] = useState("")

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = () => {
    setDragging(false);
  };

  const handleDrop = (e) => {
    setError("");
    e.preventDefault();
    setDragging(false);
    const file = e.dataTransfer.files[0];
    if (file && file.type === "text/csv") {
    Papa.parse(file, {
      complete: (result) => {
        if (
          result.errors.length > 0 || // Check for parsing errors
          !result.data || // Ensure data exists
          result.data.length === 0 || // Check if the CSV is empty
          result.data.every((row) => row.length === 0) // Ensure rows are not empty
        ) {
          setError("The uploaded file is invalid or empty. Please upload a valid CSV file.");
          return;
        }
        setCsvData(result.data);
        setHeaders(true);
      },
      error: (error) => {
        setError(`An error occurred while parsing the file: ${error.message}`);
      },
    });
    setHeaders(true)
    //   onFileUpload(file);
    } else {
      setError("Please upload a valid CSV file.");
    }
  };

const handleFileChange = (e) => {
    setError("");
  const file = e.target.files[0];
  if (file && file.type === "text/csv") {
    Papa.parse(file, {
      complete: (result) => {
        if (
          result.errors.length > 0 || // Check for parsing errors
          !result.data || // Ensure data exists
          result.data.length === 0 || // Check if the CSV is empty
          result.data.every((row) => row.length === 0) // Ensure rows are not empty
        ) {
          setError("The uploaded file is invalid or empty. Please upload a valid CSV file.");
          return;
        }
        setCsvData(result.data);
        setHeaders(true);
      },
      error: (error) => {
        setError(`An error occurred while parsing the file: ${error.message}`);
      },
    });
  } else {
    setError("Please upload a valid CSV file with the correct format.");
  }
};


  return (
    <div>
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
    <Typography sx={{color:"red",textAlign:"center",pt:2}} >{error}</Typography>
        </div>
  );
};

export default CSVUploaderFile;
