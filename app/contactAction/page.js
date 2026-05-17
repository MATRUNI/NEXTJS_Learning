import {ContactAtions} from '../actions/ContactActions'

function page() {
  return (
    <div>
        <form action={ContactAtions}>
            <label>Name: </label>
            <input type='text' name='name'/>
            <label>Email: </label>
            <input type='text' name='email'/>
            <label>Message: </label>
            <textarea name='message'/>
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default page