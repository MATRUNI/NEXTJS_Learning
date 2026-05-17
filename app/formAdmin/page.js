import {getMessage} from '../actions/conAction'

async function page() {
    const message=await getMessage();
  return (
    <div>
        <h1>Messages</h1>
        <ul>
            {message.map(item=>(
                <li key={item._id}>
                    <h2>{item.name}</h2>
                    <b>{item.email}</b>
                    <p>{item.message}</p>
                </li>
            ))}

        </ul>
    </div>
  )
}

export default page