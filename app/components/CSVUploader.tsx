"use client"
import { Box, Button, Typography } from '@mui/material';
import Papa from 'papaparse';
import { useState } from 'react';

const CSVUploader = ({ onUpload }) => {
    const [data, setData] = useState(null);

    console.log(data,"data");
    

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    Papa.parse(file, {
      complete: (result) => {
        setData(result.data) ;
      },
    });
  };

  const handleYes = () => {
    if(data){
       onUpload(data, true);
    }
  }

  const handleNo = () => {
    if(data){
        onUpload(data,false)
    }
  }


  return (
    <div>
      <h2>Upload CSV File</h2>
      <input type="file" accept=".csv" onChange={handleFileChange} />
      <div>
        <Typography sx={{p:2}}>Does your file have headers?</Typography>
        <Box>
  <Button sx={{mr:2}} onClick={() => handleYes()} variant='contained'>Yes</Button>
        <Button onClick={() => handleNo()} variant='outlined'>No</Button>
        </Box>

      
     
      </div>
    </div>
  );
};

export default CSVUploader;
