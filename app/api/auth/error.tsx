// app/api/auth/error/page.tsx
"use client";
import { Box, Button, Card, Typography } from "@mui/material";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import { Suspense, useState, useEffect } from "react";  // Import Suspense

const AuthErrorPage = () => {
  const searchParams = useSearchParams();
  const error = searchParams.get("error");
  const router = useRouter();

  const handleSignin = () => {
    router.push('/'); // Navigate to home page
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
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid red", height: "100vh" }}>
        <Card sx={{ display: "flex", alignItems: "center", justifyContent: "center", p: 1, maxWidth: "400px", borderRadius: "18px" }}>
          <Box sx={{ display: "flex", flexDirection: "column", pt: 6, pb: 4, justifyContent: "center", alignItems: "center" }}>
            <Typography variant="h6" sx={{ pt: 4 }}>Authentication Error</Typography>
            <Typography>{getErrorMessage()}</Typography>
            <Button onClick={handleSignin} variant="contained" sx={{ mt: 4 }}>Back to Signin</Button>
          </Box>
        </Card>
      </Box>
    </div>
  );
};

// Wrap the component with Suspense
const AuthErrorPageWrapper = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <AuthErrorPage />
  </Suspense>
);

export default AuthErrorPageWrapper;
