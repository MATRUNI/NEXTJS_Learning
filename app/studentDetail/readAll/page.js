'use server'
import { getStudents } from '../StudentAction'

export async function page() {
    let data=await getStudents()
  return (
    <div>
        <ul>
        {data.map((item,index)=>(
            <li key={index}>
                <h4>ID: {item._id.toString()}</h4>
                <h4>Name: {item.name}</h4>
                <p>Email: {item.email}</p>
                <b>Age: {item.age}</b>
                <h5>Phone: {item.phone}</h5>
            </li>
        ))}
        </ul>
    </div>
  )
}

export default page