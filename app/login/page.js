'use client'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

function page() {
    const [userName,setUserName]=useState("")
    const [password,setPassword]=useState("")
    const router=useRouter()
    function handleLogin(e)
    {
        e.preventDefault()
        if(userName==='himanshu' && password==='12345')
        {
            router.push("/adminboard")
        }
        else
            alert("Wrong credentials")
    }
  return (
    <div>
        <h1>
            Welcome to Login page
        </h1>
        <form>
            <input placeholder='Enter UserName' value={userName} onChange={(e)=>setUserName(e.target.value)}/>
            <input placeholder='Enter password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
            <button onClick={handleLogin}>Login</button>
        </form>
    </div>
  )
}

export default page