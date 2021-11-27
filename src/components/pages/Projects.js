import React from 'react'
import '../styles/Projects.css'

export default function Projects ({project}) {
    return(
        <div>
            <div className="card">
                <img src={project.image} alt="Dynamtie Recipes Project"/>
                <h2>{project.name}</h2>
                <p></p>
                <button id="GitHub">GitHub</button>
            </div>
        </div>
       
    )
}

