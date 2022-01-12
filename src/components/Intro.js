import React from 'react';
import '../styles/Intro.css';

export default function Intro () {
    return(
        <>
            <figure className='intro'>
              <figcaption className='name'>Hello, I'm <span className='name steph'>Stephanie</span><br></br>
                <span>Full Stack Web Developer</span><br></br>
                <a href="https://github.com/CortezStephanie" target="_blank" rel="noreferrer" className='icons'>
                  <i className="fab fa-github"></i>
                </a>
                <a href="https://www.linkedin.com/feed/" target="_blank" rel="noreferrer" className='icons'>
                  <i className="fab fa-linkedin"></i>
                </a>
              </figcaption>
              <img src='/images/me.jpg' alt='Image of Stephanie' className='picMe'></img>
            </figure>
        </>
    )
}