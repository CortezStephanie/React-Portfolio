import React, {useState}  from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import './styles/Header.css';

export default function Header () {
    const projectOne = {
      name: 'Dynamite Recipes',
      descripton: 'Find recipes with what you have on hand application',
      id: 1,
    };
    const projectTwo = {
      name: 'Dynamite Recipes',
      descripton: 'Find recipes with what you have on hand application',
      id: 1,
    };
    const projectThree = {
      name: 'Dynamite Recipes',
      descripton: 'Find recipes with what you have on hand application',
      id: 1,
    };
    const projectFour = {
      name: 'Dynamite Recipes',
      descripton: 'Find recipes with what you have on hand application',
      id: 1,
    };
    const projectFive = {
      name: 'Dynamite Recipes',
      descripton: 'Find recipes with what you have on hand application',
      id: 1,
    };
    const projectSix = {
      name: 'Dynamite Recipes',
      descripton: 'Find recipes with what you have on hand application',
      id: 1,
    };


    const [currentPage, setCurrentPage] = useState('About');

    // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
    const renderPage = () => {
      if (currentPage === 'About') {
        return <About />;
      }
      if (currentPage === 'Projects') {
        return <Projects />;
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

