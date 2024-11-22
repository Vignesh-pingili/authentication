'use client'
 
import { useRouter } from 'next/navigation'
import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import { Box, Typography } from '@mui/material';
import { green } from '@mui/material/colors';
import { Router } from 'next/router';

export default function HeadersDialog({open,setOpen,setInput,fileData,setTableData}:any) {
  const router = useRouter()

  const handleClose = () => {
    setOpen(false);
  };

  const handleYes = () => {
    console.log(typeof(fileData[1]),"console.log(typeof(fileData[1]));");
    
    setTableData([...fileData[1]])
    setInput("yes");
    setOpen(false);
  }

  const handleNo = () => {
    console.log(typeof(fileData[0]),"console.log(typeof(fileData[1]));");
    setTableData([...fileData[0]])
    setInput("no");
    setOpen(false);
  }

  return (
    <React.Fragment>leCl
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <Box sx={{pt:2, m:2}}>
          <Typography sx={{p:2}}>Does your file have headers in the first row of the sheet?
</Typography>

        </Box>
        <Box sx={{display:'flex',justifyContent:"center",alignItems:"center",gap:2,pb:4}}>
          <Button sx={{color:"green"}} variant='outlined' onClick={handleYes}>Yes</Button>
          <Button sx={{color:"#000"}} variant='outlined' onClick={handleNo} autoFocus>
            No
          </Button>
        </Box>
      </Dialog>
    </React.Fragment>
  );
}

