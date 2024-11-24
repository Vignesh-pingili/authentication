// app/api/auth/error/page.tsx
"use client";
import { Box, Button, Card, Typography } from "@mui/material";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const AuthErrorPage = () => {
    const [isMounted, setIsMounted] = useState(false);
  const searchParams = useSearchParams();
  const error = searchParams.get("error");
  const router = useRouter();

    useEffect(() => {
    setIsMounted(true); // Set to true once mounted
  }, []);

  const handleSignin = () => {
router.push('/');
  }

  const getErrorMessage = () => {
    switch (error) {
      case "OAuthCallbackError":
        return "There was an error with the OAuth callback. Please try again.";
      case "AccessDenied":
        return "Access was denied. You may not have permission to sign in.";
      default:
        return "An unexpected error occurred during authentication. Please try again.";
    }
  };

  return (
    <div>
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center",border:"1px solid red",height:"100vh" }}>
        <Card sx={{ display: "flex", alignItems: "center", justifyContent: "center", p:1,maxWidth:"400px",borderRadius:"18px" }}>
          <Box sx={{display:"flex",flexDirection:"column",pt:6,pb:4,justifyContent:"center",alignItems:"center"}}>
  <Typography variant="h6" sx={{pt:4}}>Authentication Error</Typography>
          <Typography>{getErrorMessage()}</Typography>
          <Button onClick={() => handleSignin()} variant="contained" sx={{mt:4}}>Back to Signin</Button>
          </Box>
        
        </Card>
      </Box>
    </div>
  );
};

export default AuthErrorPage;
