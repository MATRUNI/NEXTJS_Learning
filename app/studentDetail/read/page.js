'use client'
import {useActionState} from 'react'
import { getId } from '../StudentAction';
function page() {
    const [student,formAction]=useActionState(getId,null);
  return (
    <div>
        <form action={formAction}>
        <input type='text' name='id' placeholder='put your id to search'/>
        <button type='submit'>Find</button>
        </form>
        {student&&<div>
            <h4>ID: {student._id}</h4>
            <h4>Name: {student.name}</h4>
            <p>Email: {student.email}</p>
            <b>Age: {student.age}</b>
            <h5>Phone: {student.phone}</h5>
        </div>}
    </div>
  )
}

export default page