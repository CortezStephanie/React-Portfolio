import React, {useState} from 'react';
import '../styles/Contact.css';
import {validateEmail} from '../utils/helpers';



function Contact () {
    const [email, setEmail] = useState('');
    const [errorMessage, setErrorMessage] = useState('')

    const handleInputChange = (e) => {
        const inputType= e.target.name;
        const inputValue = e.target.value;

        if (inputType === 'email') {
            setEmail(inputValue);
            console.log('i worked');
        }
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if(!validateEmail(email)){
            setErrorMessage('Email is invalid');
            return;
        }
        setEmail('');

    }
    return (
        <div className='Container'>
            <h1 id="contactTitle">Contact Me</h1>
            <form id="formstuff">
                <input placeholder="Full Name" className="inputs"></input>
                <input value={email} type="email" onChange={handleInputChange} name="email"  placeholder="Email" className="inputs"></input>
                <textarea placeholder="Message" id="textA"></textarea>
                <button type="button" onClick={handleFormSubmit}>Submit</button>
            </form>
            {errorMessage && (
                <div>
                    <p className='error-text'>{errorMessage}</p>
                    </div>
            )}
        </div>
    );  
}

export default Contact;