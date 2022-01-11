import React from 'react';
import '../styles/About.css'


function About () {
    return (
        <div>
            <h1 id="aboutTitle">About Me</h1>
            <section id="aboutContent">
            <p>
            Front-end web developer leveraging psychology background to build a more intuitive user
            experience on the web. Recently earned a certificate in full stack development from the
            University Coding, with newly developed skills in JavaScript, CSS, React.js, and responsive web
            design. Known as an innovative problem solver passionate about developing apps, with a focus
            on mobile-first design and development. With each project, my aim is to best engage my
            audience for an impactful user experience. I applied aspects of UX and agile development in a
            recent project. I worked on a team of four to develop a single-page MERN app that helps local
            business owners track their sales, inventory, and attendance at specialty events. I’m excited to
            leverage my skills as part of a fast-paced, quality-driven team to build better experiences on the web.
            </p>
            <a href="https://github.com/CortezStephanie" target="_blank" rel="noreferrer" >
            <i class="fab fa-github"></i></a>
            <a href="https://www.linkedin.com/feed/" target="_blank" rel="noreferrer"  >
            <i class="fab fa-linkedin"></i></a>
            </section>
        </div>
    )
}

export default About;