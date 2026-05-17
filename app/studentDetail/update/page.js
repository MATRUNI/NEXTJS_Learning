'use client'
import { useActionState } from 'react'
import { updateStudents } from '../StudentAction'

function page() {
    const [student,formData]=useActionState(updateStudents, null);
  return (
    <div>
        <form action={formData}>
            <input type='text' name='id' placeholder='ID'/>
            <input type='text' name='name' placeholder='Name'/>
            <input type='email' name='email' placeholder='Email'/>
            <input type='number' name='age' placeholder='Age'/>
            <input type='tel' name='phone' placeholder='Phone Number'/>
            <button type='submit'>Submit</button>
        </form>
        {student&&<div>
            <h4>ID: {student._id.toString()}</h4>
            <h4>Name: {student.name}</h4>
            <p>Email: {student.email}</p>
            <b>Age: {student.age}</b>
            <h5>Phone: {student.phone}</h5>
        </div>}
    </div>
  )
}

export default page