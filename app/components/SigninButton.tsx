"use client";

import React from 'react';
import { signIn, signOut, useSession } from "next-auth/react";
import { error } from 'console';
import { Card } from '@mui/material';

function SigninButton (){

  const { data: session } = useSession();

  if(session && session.user){
    return(
          <Card sx={{p:1}}>
 <div style={{display:"flex",alignItems:"center",justifyContent:"flex-end",gap:4}}>
       <p>{session.user.name}</p>
        <button style={{padding:8}} onClick={() => signOut()}>Sign Out</button>
    </div>
    </Card>

    )
  }

  return (
    <Card>
 <div style={{padding:12,display:"flex",alignItems:"center",justifyContent:"flex-end",gap:2}}>
         <button style={{padding:8}} onClick={() => signIn('google')}> Signin with google </button>
         <button style={{padding:8}} onClick={() => signIn('linkedin')}>signin with linkedin</button>
    </div>
    </Card>
   
  )
}

export default SigninButton