'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

function page() {
  const router=useRouter()
  return (
    <div>
      <button onClick={()=>router.back()}>GO BACK</button>
      <button onClick={()=>router.push('/')}>GO HOME</button>
        <h3>Products pages and all</h3>
        <ul>
            <li>Product 1</li>
            <li>Product 2</li>
            <li>Product 3</li>
            <li>Product 4</li>
            <li>Product 5</li>
            <li>Product 6</li>
            <li>Product 7</li>
        </ul>
    </div>
  )
}

export default page