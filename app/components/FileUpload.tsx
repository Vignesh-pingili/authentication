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
           <Typography sx={{fontSize:"26px",paddingBottom:2}}>Generated JSON Output</Typography>
          <pre>{JSON.stringify(jsonOutput, null, 2)}</pre>
          <Button variant='outlined'
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
          </Button>
        </div>
              </Card>
   
    </Box>
      )}
    </div>
  );
}
