import React from 'react'
import '../styles/Projects.css'

export default function Projects ({project}) {
    return(
        <div>
            <li className="card">
                <h2>{project.name}</h2>
                <img src={project.image} alt="project name"/>
                <div className='cardContent'>
                <p>{project.description}</p>
                <a href={project.githubURL} target="_blank" rel="noreferrer" >
                <i className="fab fa-github"></i></a>
                </div>
            </li>
            
        </div>
       
    )
}

