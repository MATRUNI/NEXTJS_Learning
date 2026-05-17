import React from 'react'
import { createStudent } from '../StudentAction'

function page() {
  return (
    <div>
        <form action={createStudent}>
            <input type='text' name='name' placeholder='Name'/>
            <input type='email' name='email' placeholder='Email'/>
            <input type='number' name='age' placeholder='Age'/>
            <input type='tel' name='phone' placeholder='Phone Number'/>
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default page