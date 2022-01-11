import React, {useState}  from 'react';
import Navbar from './Navbar';
import Intro from './Intro';
import Footer from './Footer';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Projects from '../pages/Projects';
import Resume from '../pages/Resume';
import '../styles/Header.css';

export default function Header () {
  const projectOne = {
    image: '../../images/dynamite.png',
    name: 'Dynamite Recipes',
    description: 'Find recipes with what you have on hand application',
    githubURL: 'https://github.com/CortezStephanie',
  };
  const projectTwo = {
    name: 'Sweepers',
    image:'../../images/sweeper.png',
    description: 'Find recipes with what you have on hand application',
    githubURL: 'https://github.com/CortezStephanie',
  };
  const projectThree = {
    name: 'Note Taker',
    image:'../../images/notetaker.png',
    description: 'Find recipes with what you have on hand application',
    githubURL: 'https://github.com/CortezStephanie',
  };


    const [currentPage, setCurrentPage] = useState('About');

    // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
    const renderPage = () => {
      if (currentPage === 'About') {
        return <About />;
      }
      if (currentPage === 'Projects') {
        return (
        <div className='projects'>
          <h1 id="projectTitle">Projects</h1>
        <div className='projectContainer'>  
        <Projects project={projectOne}/>
        <Projects project={projectTwo}/>
        <Projects project={projectThree}/>
        <Projects project={projectOne}/>
        <Projects project={projectOne}/>
        <Projects project={projectOne}/> 
        </div>
        </div>
        )
      }
      if (currentPage === 'Resume') {
        return <Resume />;
      }
      return <Contact />;
    };
  
    const handlePageChange = (page) => setCurrentPage(page);


    return (
        <div>
            <Navbar currentPage={currentPage} handlePageChange={handlePageChange}/>
            <Intro />
            {renderPage()}
            <Footer/>
        </div>
    );
}

