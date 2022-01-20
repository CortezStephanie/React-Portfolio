import React from 'react';
import '../styles/About.css'


function About () {
    return (
        <div className='wholeContent'>
            <h1 className="sectionTitle">About Me</h1>
            <section className="aboutContent">
                <figure>
                    <img src='/images/ben-kolde-FaPxZ88yZrw-unsplash.jpg' alt='unsplash photo' className='aboutPhoto'></img>
                </figure>
                <div className='aboutCard'>
                <p>
                    Recent Full-Stack developer graduate from the University of Texas Austin, Full-Stack bootcamp. 
                    Certified in JavaScript, CSS, React.js, MERN stack, and responsive web design. My technical knowledge of 
                    cutting-edge web technologies, together with my problem-solving skills and dedication, make me a valuable 
                    member of any engineering team. I enjoy tackling programming problems from a variety of perspectives and 
                    cooperating with others. With my most recent project I worked on a team of 5 to develop a single-page MERN 
                    workbook that helps students learn to code. I am excited to immerse myself in this industry over the coming 
                    years as I continue to grow in this fast-paced world of development. 
                </p>
                </div>
            </section>
        </div>
    )
}

export default About;