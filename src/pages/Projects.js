import React from 'react'
import '../styles/Projects.css'

export default function Projects ({project}) {
    return(
        <div>
            <li className="card">
                <img src={project.image} alt="Dynamtie Recipes Project"/>
                <div className='cardContent'>
                <h2>{project.name}</h2>
                <p></p>
                <button id="GitHub">GitHub</button>
                </div>
            </li>
            
        </div>
       
    )
}

