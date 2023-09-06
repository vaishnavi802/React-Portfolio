import React, {useState} from 'react'
import './form.css'

const Form = () => {

    const [enteredName, setEnteredName] = useState('')
    const [enteredEmail, setEnteredEmail] = useState('')
    const [enteredMessage, setEnteredMessage] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        console.log("Submitted")
    }

    return <form className='form' onSubmit={submitHandler}>
        <div className="form_input">
            <input type="text" placeholder="Your Name" value={enteredName} onChange={e => setEnteredName(e.target.value)} />
        </div>
        <div className="form_input">
            <input type="email" placeholder="Your Email" value={enteredEmail} onChange={e => setEnteredEmail(e.target.value)} />
        </div>
        <div className="form_input">
            <textarea placeholder='Write message' value={enteredMessage} onChange={e => setEnteredMessage(e.target.value)}>
            </textarea>
        </div>

        <button className="submit_btn" type="submit">
            Submit
        </button>
    </form>
}

export default Form