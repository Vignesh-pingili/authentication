"use client"
import { Box, Button, Typography } from '@mui/material';
import Papa from 'papaparse';

const CSVUploader = ({ onUpload }) => {
  var data = null;
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    Papa.parse(file, {
      complete: (result) => {
        data = result.data;
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
