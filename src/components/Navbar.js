import React from 'react';
import '../styles/Navbar.css';

function Navbar ({currentPage, handlePageChange}) {
   return (
     <div className="navContent">
     <h1 id="navName">Hi I'm Stephanie</h1>
        <ul className="navOptions">
        <li>
          <a
            href="#about" id="aboutlink"
            onClick={() => handlePageChange('About')}
            // This is a conditional (ternary) operator that checks to see if the current page is "Home"
            // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
            className={currentPage === 'about' ? 'nav-link active' : 'nav-link'}
          >
            About Me
          </a>
        </li>
        <li>
          <a
            href="#projects" id="aboutlink"
            onClick={() => handlePageChange('Projects')}
            // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="#contact" id="aboutlink"
            onClick={() => handlePageChange('Contact')}
            // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
          >
            Contact
          </a>
        </li>
        <li>
          <a
            href="#resume" id="aboutlink"
            onClick={() => handlePageChange('Resume')}
            // This is a conditional (ternary) operator that checks to see if the current page is "Home"
            // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
            className={currentPage === 'resume' ? 'nav-link active' : 'nav-link'}
          >
            Resume
          </a>
        </li>
      </ul>
    </div>
    )
}

export default Navbar;