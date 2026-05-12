import { redirect } from 'next/navigation';
import React from 'react'
async function checkAuth() 
{
  return false;  
}
async function Dashboard() {
  const isAuthenticate=await checkAuth();
  if(!isAuthenticate)
  {
    redirect('/login')
  }
  return (
    <div>Dashboard</div>
  )
}

export default Dashboard