"use client";
import { useSession } from "next-auth/react";
import FileUpload from "./components/FileUpload";
import SigninButton from "./components/SigninButton";

export default function Home() {

    const { data: session } = useSession();


  return (
    <div >
    <SigninButton></SigninButton>
     <div style={{padding:"150"}}>
     {
      session && <FileUpload></FileUpload>
     }
     
     </div>
    </div>
  );
}
