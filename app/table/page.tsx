"use client"
import React, { useEffect, useState } from 'react'

const Table = () => {
    const [user, setUser] = useState(null);

      useEffect(() => {
    const userData = JSON.stringify(localStorage.getItem('data'));
    setUser(userData);
  }, []);

  console.log(user,"user............");
  
    
  return (
    <div>Table</div>
  )
}

export default Table