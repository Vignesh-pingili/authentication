"use client"
import { useState } from 'react';
import TableDisplay from '../components/TableDisplay';
import CSVUploader from './CSVUploader';
import { Box, Button, Card, Typography } from '@mui/material';

export default function FileUpload() {
  const [csvData, setCsvData] = useState(null); // Raw data from CSV
  const [headers, setHeaders] = useState(null); // Whether the file has headers
  const [jsonOutput, setJsonOutput] = useState(null); // Final JSON output

  console.log(jsonOutput,"jsonOutput");
  

  const handleCSVUpload = (data, hasHeaders) => {
    setCsvData(data);
    setHeaders(hasHeaders);
  };


  return (
    <div style={{ padding: '20px' }}>
      <Box sx={{display:"flex",justifyContent:"center",alignItems:"center"}}>
 <Typography sx={{fontSize:"28px",color:"#515457"}}>CSV File Processor</Typography>
      </Box>
     
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
          <Box sx={{display:"flex",alignItems:"center",justifyContent:"center"}}>
      <Card sx={{p:8,display:"inline-block"}}>

        <div style={{display:"inline-block",padding:12}}>
           <Typography sx={{fontSize:"22px",paddingBottom:2}}>Generated JSON Output</Typography>
          <pre style={{paddingBottom:18}}>{JSON.stringify(jsonOutput, null, 2)}</pre>
          {/* <button style={{padding:8}}
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
          </button> */}

          <button
  style={{ padding: 8 }}
  onClick={() => {
    const jsonOutput1 = jsonOutput; // Replace this with your JSON data

    try {
      const blob = new Blob([JSON.stringify(jsonOutput1, null, 2)], {
        type: 'application/json',
      });
      const url = URL.createObjectURL(blob);

      // Create an anchor element for the download
      const a = document.createElement('a');
      a.href = url;
      a.download = 'output.json';

      // Append to body to ensure it works in all environments
      document.body.appendChild(a);
      a.click();

      // Clean up: remove the anchor element and revoke the object URL
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error("File download failed:", error);
    }
  }}
>
  Download JSON
</button>
        </div>
              </Card>
   
    </Box>
      )}
    </div>
  );
}
