"use client"
import { useState } from 'react';
import TableDisplay from '../components/TableDisplay';
import CSVUploader from './CSVUploader';
import { Box, Button, Card, Typography } from '@mui/material';
import CSVUploaderFile from './CSVUploderFile';
import AlertDialogSlide from './RowChecker';

export default function FileUpload() {
  const [csvData, setCsvData] = useState(null); // Raw data from CSV
  const [headers, setHeaders] = useState(""); // Whether the file has headers
  const [headersDialog, setHeadersDialog] = useState(false)
  const [jsonOutput, setJsonOutput] = useState(null); // Final JSON output

  console.log(jsonOutput,"jsonOutput");
      console.log(csvData,"data");
      console.log(headers,"headers");

  return(
    <Box>
      <Typography sx={{color:"#5d5a63",fontSize:"1.8rem",fontWeight:"650",pl:5,pt:2,pb:2,textAlign:"center"}}>CSV File Processor</Typography>
      <Box >
       <CSVUploaderFile setCsvData={setCsvData} setHeaders={setHeadersDialog} />
      </Box>
      {
        csvData && headers && <TableDisplay csvData={csvData} hasHeaders={headers} setJsonOutput={setJsonOutput}></TableDisplay>
      }
     
      <AlertDialogSlide open={headersDialog} setOpen={setHeadersDialog} setHeaders={setHeaders}></AlertDialogSlide>

    {jsonOutput && (
          <Box sx={{display:"flex",alignItems:"center",justifyContent:"center"}}>
        <div style={{display:"inline-block",padding:12}}>
           <Typography sx={{fontSize:"18px",paddingBottom:2,fontWeight:"600"}}>Generated JSON Output</Typography>
          <pre style={{paddingBottom:18}}>{JSON.stringify(jsonOutput, null, 2)}</pre>
          <Button variant='contained'
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
</Button>
        </div>
    </Box>
    )}

    </Box>
  )
}
