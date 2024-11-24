import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import { Box, Typography } from '@mui/material';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="down" ref={ref} {...props} />;
});

export default function AlertDialogSlide({open,setOpen,setHeaders}) {

  const handleClose = () => {
    setOpen(false);
  };

  const handleYes = () => {
    setHeaders("yes")
        setOpen(false);

  }
  const handleNo = () => {
    setHeaders("no")
        setOpen(false);

  }

  return (
    <React.Fragment>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
       <Box sx={{p:4}}>
        <Typography sx={{fontSize:"1.2rem",color:" #404040"}}>Does your file have headers in first row ?</Typography>
       </Box>
        <Box sx={{display:"flex",justifyContent:"center",gap:6,pb:4}}>
          <Button style={{backgroundColor:"green",color:"#FFF"}} onClick={handleYes}>Yes</Button>
          <Button style={{backgroundColor:"red",color:"#FFF"}} onClick={handleNo}>No</Button>
        </Box>
      </Dialog>
    </React.Fragment>
  );
}