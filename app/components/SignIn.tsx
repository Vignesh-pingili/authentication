"use client"
import { Box, Button, Card, Typography } from '@mui/material'
import React from 'react'
import Divider from '@mui/material/Divider';
import { signIn, signOut, useSession } from "next-auth/react";



const SignIn = () => {
      const { data: session } = useSession();

      console.log(session,"session");

      const handleSignIn = async (provider) => {
  try {
    const result = await signIn(provider, { redirect: false }); // Disable automatic redirection
    if (result?.error) {
      console.error("Authentication error:", result.error);
      alert(`Authentication failed: ${result.error}`);
    } else {
      // Successful login
      console.log("Sign-in successful");
    }
  } catch (error) {
    console.error("Unexpected error during sign-in:", error);
    alert("An unexpected error occurred. Please try again.");
  }
};
      

      if(session){
        return(
                      <Card elevation={6} sx={{p:1,m:1}}>
 <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",gap:4}}>
    <Box sx={{display:"flex",gap:1}}>
    <img src={session?.user?.image} style={{height:"34px",width:"34px",borderRadius:"12px"}}></img>
       <Typography sx={{backgroundColor:"#3b444b",p:0.8,color:"#FFF",borderRadius:"8px",pl:2}}> Welcome, {session.user.name}  Let’s get started.</Typography>
    </Box>
    <Button variant='outlined' sx={{textTransform:"none"}} onClick={() => signOut()}>Sign Out</Button>
    </div>
    </Card>
        )
      }
  return (
    <Box sx={{height:"100vh",backgroundColor:"#F0F4F9"}}>
                              <Card elevation={6} sx={{p:1,m:1}}>
 <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",gap:4}}>
    <Box sx={{display:"flex",gap:1}}>
       <Typography sx={{backgroundColor:"#3b444b",p:0.8,color:"#FFF",borderRadius:"8px",pl:2}}> Welcome – Sign in to unlock powerful tools for your data!</Typography>
    </Box>
    <Button variant='outlined' sx={{textTransform:"none"}} onClick={() => signOut()}>Log In</Button>
    </div>
    </Card>
    <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",pt:6}}>
   
        <Card elevation={12} sx={{maxWidth:"450px",borderRadius:"18px"}}>
            <Box sx={{fontSize:"1.8rem",fontWeight:"600",textAlign:"center",pb:6,pt:2,color:"#404042"}}>
                Sign In
            </Box>
            <Divider sx={{width:"86%"}} variant="middle" />
            <Box sx={{pr:6,pl:6,pb:2}}>
                <Box sx={{pb:1,pt:4}}>
                    <Typography sx={{textAlign:"center",color:"#605f63"}}>Sign In with</Typography>
                </Box>
                <Card sx={{m:1}} elevation={3}>
                    <Box sx={{display:"flex",gap:1,p:1.2}} onClick={() => handleSignIn('google')}>
                                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="26px" height="26px"><linearGradient id="95yY7w43Oj6n2vH63j6HJb" x1="29.401" x2="29.401" y1="4.064" y2="106.734" gradientTransform="matrix(1 0 0 -1 0 66)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ff5840"></stop><stop offset=".007" stop-color="#ff5840"></stop><stop offset=".989" stop-color="#fa528c"></stop><stop offset="1" stop-color="#fa528c"></stop></linearGradient><path fill="url(#95yY7w43Oj6n2vH63j6HJb)" d="M47.46,15.5l-1.37,1.48c-1.34,1.44-3.5,1.67-5.15,0.6c-2.71-1.75-6.43-3.13-11-2.37	c-4.94,0.83-9.17,3.85-11.64,
        7.97l-8.03-6.08C14.99,9.82,23.2,5,32.5,5c5,0,9.94,1.56,14.27,4.46	C48.81,10.83,49.13,13.71,47.46,15.5z"></path><linearGradient id="95yY7w43Oj6n2vH63j6HJc" x1="12.148" x2="12.148" y1=".872" y2="47.812" gradientTransform="matrix(1 0 0 -1 0 66)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#feaa53"></stop><stop offset=".612" stop-color="#ffcd49"></stop><stop offset="1" stop-color="#ffde44"></stop></linearGradient><path fill="url(#95yY7w43Oj6n2vH63j6HJc)" d="M16.01,30.91c-0.09,2.47,0.37,4.83,1.27,6.96l-8.21,6.05c-1.35-2.51-2.3-5.28-2.75-8.22	c-1.06-6.88,0.54-13.38,
        3.95-18.6l8.03,6.08C16.93,25.47,16.1,28.11,16.01,30.91z"></path><linearGradient id="95yY7w43Oj6n2vH63j6HJd" x1="29.76" x2="29.76" y1="32.149" y2="-6.939" gradientTransform="matrix(1 0 0 -1 0 66)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#42d778"></stop><stop offset=".428" stop-color="#3dca76"></stop><stop offset="1" stop-color="#34b171"></stop></linearGradient><path fill="url(#95yY7w43Oj6n2vH63j6HJd)" d="M50.45,51.28c-4.55,4.07-10.61,6.57-17.36,6.71C22.91,58.2,13.66,52.53,9.07,43.92l8.21-6.05	C19.78,43.81,
        25.67,48,32.5,48c3.94,0,7.52-1.28,10.33-3.44L50.45,51.28z"></path><linearGradient id="95yY7w43Oj6n2vH63j6HJe" x1="46" x2="46" y1="3.638" y2="35.593" gradientTransform="matrix(1 0 0 -1 0 66)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#155cde"></stop><stop offset=".278" stop-color="#1f7fe5"></stop><stop offset=".569" stop-color="#279ceb"></stop><stop offset=".82" stop-color="#2cafef"></stop><stop offset="1" stop-color="#2eb5f0"></stop></linearGradient><path fill="url(#95yY7w43Oj6n2vH63j6HJe)" d="M59,31.97c0.01,7.73-3.26,14.58-8.55,19.31l-7.62-6.72c2.1-1.61,3.77-3.71,4.84-6.15
        c0.29-0.66-0.2-1.41-0.92-1.41H37c-2.21,0-4-1.79-4-4v-2c0-2.21,1.79-4,4-4h17C56.75,27,59,29.22,59,31.97z"></path></svg>
                        <Typography>SignIn with Google</Typography>
                    </Box>
                </Card>
                                <Card sx={{m:1,backgroundColor:"#0770A9"}} elevation={3}>
                    <Box onClick={() => handleSignIn('linkedin')} sx={{display:"flex",alignItems:"center", gap:1,p:0.8}}>
                        <Typography sx={{color:"#FFF",fontSize:"1.4rem",pl:1.6,fontWeight:"bold"}}>In</Typography>
                        <Typography sx={{color:"#FFF",lineHeight:"1.6rem"}}>SignIn with Linked In</Typography>
                    </Box>
                </Card>

                                <Card sx={{m:1}} elevation={3}>
                    <Box onClick={() => handleSignIn('orcid')} sx={{display:"flex",gap:1.8,p:1,alignItems:"center"}}>
                         <Box sx={{backgroundColor:"#A6CE39",color:"#FFF",p:1,borderRadius:"50px"}}>
                           iD
                         </Box>
                        <Typography>SignIn with <span style={{color:"#A6A8AB"}}>ORC</span><span style={{color:"#A6CE39"}}>iD</span></Typography>
                    </Box>
                </Card>
                
            </Box>
        </Card>
             
    </Box>
 
    </Box>
  )
}

export default SignIn

