"use client";
import { useSession } from "next-auth/react";
import FileUpload from "./components/FileUpload";
import SignIn from "./components/SignIn";

export default function Home() {
    const { data: session } = useSession();
  return (
    <div style={{backgroundColor:"#F0F4F9"}}>    
     <SignIn></SignIn> 
     {
      session && <FileUpload></FileUpload>
     }
    </div>
  );
}
