import React from 'react';
import '../styles/Intro.css';

export default function Intro () {
    return(
        <>
            <figure className='intro'>
              <figcaption className='name'>Hi I'm Stephanie</figcaption>
              <img src='/images/me.jpg' alt='Image of Stephanie' className='picMe'></img>
            </figure>
        </>
    )
}