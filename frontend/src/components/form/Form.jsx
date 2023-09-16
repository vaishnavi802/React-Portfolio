import React, {useState} from 'react'
import './form.css' 
import axios from 'axios'

const Form = () => {

    const [enteredName, setEnteredName] = useState('')
    const [enteredEmail, setEnteredEmail] = useState('')
    const [enteredMessage, setEnteredMessage] = useState('')

    const submitHandler = async (e) => {
        e.preventDefault()
        const data = {
            name: enteredName,
            email: enteredEmail,
            message: enteredMessage
        }

        if (enteredName.trim().length === 0 || enteredEmail.trim().length === 0 || enteredMessage.trim().length === 0) {
            alert('Please fill all the fields')
            return
        }
        try {
            const res = await axios.post('http://localhost:5000/form', data)
            console.log(res);
            if (res.status === 200) {
                alert('Message sent successfully')
                setEnteredName('')
                setEnteredEmail('')
                setEnteredMessage('')
            }
            else {
                alert('Something went wrong')
            }
        }
        catch (err) {
            alert('Something went wrong')
            console.log(err)
        }
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