import React from 'react';
//import Navbar from './component/Navbar';
//import Footer from './components/Footer';
import About from './pages/About';
import Contact from './pages/Contact';

export default function Header () {
    const [currentPage, setCurrentPage] = useState('About');

    // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
    const renderPage = () => {
      if (currentPage === 'About') {
        return <About />;
      }
      if (currentPage === '') {
        return <Contact />;
      }
      if (currentPage === 'Blog') {
        return <Blog />;
      }
      return <Contact />;
    };
  
    const handlePageChange = (page) => setCurrentPage(page);


    return (
        <div>
            {/*<Navbar/>*/}
        </div>
    );
}

