import React, {useState}  from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Projects from '../pages/Projects';
import Resume from '../pages/Resume';
import '../styles/Header.css';

export default function Header () {
  const projectOne = {
    name: 'Dynamite Recipes',
    descripton: 'Find recipes with what you have on hand application',
    image: '../../images/dynamite.png',
    githubURL: '',
  };
  const projectTwo = {
    name: 'Sweepers',
    descripton: '',
    image:'../../images/sweeper.png',
  };
  const projectThree = {
    name: 'Note Taker',
    descripton: '',
    image:'../../images/notetaker.png',
  };


    const [currentPage, setCurrentPage] = useState('About');

    // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
    const renderPage = () => {
      if (currentPage === 'About') {
        return <About />;
      }
      if (currentPage === 'Projects') {
        return (
        <div>
          <h1 id="projectTitle">Projects</h1>
        <Projects project={projectOne}/>
        <Projects project={projectTwo}/>
        <Projects project={projectThree}/>
        <Projects project={projectOne}/>
        <Projects project={projectOne}/>
        <Projects project={projectOne}/>
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
            {renderPage()}
            
            <Footer/>
        </div>
    );
}

