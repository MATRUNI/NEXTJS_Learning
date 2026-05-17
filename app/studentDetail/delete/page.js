'use client'

import { useState, useActionState } from "react"
import {deleteOne} from '../StudentAction'
function page() 
{
  const [type,setType]=useState('text')
  const [placeHolder,setPlaceholder]=useState('id')
  const [deleted,formData]=useActionState(deleteOne,null)
  return (
    <div>
      <form action={formData}>
        <select onChange={(e)=>{
          setPlaceholder(e.target.value)
          setType(e.target.options[e.target.selectedIndex].dataset.type)
          }} name="field">
          <option value={'id'} data-type="text">id</option>
          <option value={'name'} data-type="text">name</option>
          <option value={'email'} data-type="email">email</option>
          <option value={'age'} data-type="number">age</option>
          <option value={'phone'} data-type="tel">phone</option>
        </select>
        <input type={`${type}`} name="data" placeholder={`Enter ${placeHolder}`}/>
          <button >Submit</button>
      </form>
        {deleted&&<div>
          <h1>Deleted document</h1>
            <h4>ID: {deleted._id}</h4>
            <h4>Name: {deleted.name}</h4>
            <p>Email: {deleted.email}</p>
            <b>Age: {deleted.age}</b>
            <h5>Phone: {deleted.phone}</h5>
            <h5>Time Of Creation: {new Date(deleted.createdAt).toLocaleString()}</h5>
        </div>}
    </div>
  )
}

export default page