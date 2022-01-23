import React from 'react';
import '../styles/Resume.css'

export default function Resume () {

    
    return (
        <div className='wholeContent'>
            <h1 className="sectionTitle">Resume</h1>
            
                <a href="/images/SCortezResume.pdf" className="resumeLink" target="_blank" rel="noopener"><i className="far fa-file"></i>
                Download Resume Here</a>
            
                <h2 className='cardTitle'>Frontend:</h2>
                <ul className='resumeCard'>
                    <li>HTML5</li>
                    <li>CSS</li>
                    <li>Bootstrap</li>
                    <li>React</li>
                    <li>MUI</li>
                </ul>
                <h2 className='cardTitle'>Backend:</h2>
                <ul className='resumeCard'>
                    <li>MongoDB</li>
                    <li>Express.js</li>
                    <li>Node.js</li>
                    <li>JavaScript</li>
                </ul>
        </div>

    )
} 