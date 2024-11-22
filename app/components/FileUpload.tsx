"use client"
import { useState } from 'react';
import TableDisplay from '../components/TableDisplay';
import CSVUploader from './CSVUploader';

export default function FileUpload() {
  const [csvData, setCsvData] = useState(null); // Raw data from CSV
  const [headers, setHeaders] = useState(null); // Whether the file has headers
  const [jsonOutput, setJsonOutput] = useState(null); // Final JSON output

  const handleCSVUpload = (data, hasHeaders) => {
    setCsvData(data);
    setHeaders(hasHeaders);
  };


  return (
    <div style={{ padding: '20px' }}>
      <h1>CSV File Processor</h1>
      {/* File Upload Section */}
      {!csvData && <CSVUploader onUpload={handleCSVUpload} />}
      
      {/* Table Display Section */}
      {csvData && !jsonOutput && (
        <TableDisplay
          csvData={csvData}
          hasHeaders={headers}
          setHeaders={setHeaders}
          setJsonOutput={setJsonOutput}
        />
      )}
      
      {/* JSON Display Section */}
      {jsonOutput && (
        <div>
          <h2>Generated JSON Output</h2>
          <pre>{JSON.stringify(jsonOutput, null, 2)}</pre>
          <button
            onClick={() => {
              const blob = new Blob([JSON.stringify(jsonOutput, null, 2)], {
                type: 'application/json',
              });
              const url = URL.createObjectURL(blob);
              const a = document.createElement('a');
              a.href = url;
              a.download = 'output.json';
              a.click();
            }}
          >
            Download JSON
          </button>
        </div>
      )}
    </div>
  );
}