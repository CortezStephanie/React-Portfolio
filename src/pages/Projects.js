import React from 'react'
import '../styles/Projects.css'

export default function Projects ({project}) {
    return(
        <div>
            <li className="card">
                <h2 className='projectName'>{project.name}</h2>
                <img src={project.image} alt="project name" className='projectImage'/>
                <div className='cardContent'>
                    <p className='projectDescription'>{project.description}</p>
                    <a href={project.githubURL} target="_blank" rel="noreferrer" className='cardIcons'>
                    <i className="fab fa-github"></i></a>
                    <a href={project.deploymentURL} target='_blank' rel='noreferrer' className='cardIcons'>
                    <i className="fas fa-rocket"></i>
                    </a>
                </div>
            </li>
            
        </div>
       
    )
}

