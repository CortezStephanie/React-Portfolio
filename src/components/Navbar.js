import React from 'react';
import '../styles/Navbar.css';

function Navbar ({currentPage, handlePageChange}) {
   return (
      <div>
          <div className='navBar'>
            <div className='links'>
              <a href="#about" onClick={() => handlePageChange('About')} className={currentPage === 'about' ? 'nav-link active' : 'nav-link'}>About</a>
              <a href="#projects" onClick={() => handlePageChange('Projects')} className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}>Projects</a>
              <a href="#resume" onClick={() => handlePageChange('Resume')} className={currentPage === 'resume' ? 'nav-link active' : 'nav-link'}>Resume</a>
              <a href="#contact" onClick={() => handlePageChange('Contact')} className={currentPage === 'resume' ? 'nav-link active' : 'nav-link'}>Contact</a>
            </div>
          </div>
      </div>
    )
}

export default Navbar;