import React from 'react';
import '../styles/Contact.css';

function Contact () {
    return (
        <div className='Container'>
            <h1 id="contactTitle">Contact Me</h1>
            <form id="formstuff">
                <input placeholder="Full Name"></input>
                <input type="Email" placeholder="Email"></input>
                <textarea label="Message"></textarea>
            </form>
        </div>
    )  
}

export default Contact;