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
    technologies: 'Materialize, Spoonacular API, JS',
    githubURL: 'https://github.com/CortezStephanie/Project-1',
    deploymentURL: 'https://damienluzzo33.github.io/Project-1/'
  };
  const projectTwo = {
    name: 'Sweepers',
    image:'../../images/sweeper.png',
    description: 'Chore application for every house hold',
    technologies: 'Materialize, JS, MySQL',
    githubURL: 'https://github.com/CortezStephanie/Sweepers_Project_Two',
    deploymentURL: 'https://sweeper-chore-chart.herokuapp.com/'
  };
  const projectThree = {
    name: 'Note Taker',
    image:'../../images/notetaker.png',
    description: 'Write notes big or small and save for future use',
    technologies: 'Node.js, Express.js, Js',
    githubURL: 'https://github.com/CortezStephanie/note-taker-express.js',
    deploymentURL: 'https://note-taker-hw11-sc.herokuapp.com/'
  };
  const projectFour = {
    image: '../../images/intheloop.png',
    name: 'In The Loop',
    description: 'Coding workbook to help everyone learn to code',
    technologies: 'React, MUI, JS, MongoDB',
    githubURL: 'https://github.com/CortezStephanie/In-The-Loop',
    deploymentURL: 'https://intheloop-app.herokuapp.com'
  };
  const projectFive = {
    name: 'Budget Tracker',
    image:'../../images/budget-tracker.png',
    description: 'Track your budget and keep progress when your offline',
    technologies: 'Node.js, MongoDB, Express.js',
    githubURL: 'https://github.com/CortezStephanie/Budget-Tracker',
    deploymentURL: 'https://budget-tracker-off-online.herokuapp.com/'
  };
  const projectSix = {
    name: 'Fitness Tracker',
    image:'../../images/getfit-fitness-tracker.png',
    description: 'Track cardio or strength workouts',
    technologies: 'Node.js, MongoDB, Express.js',
    githubURL: 'https://github.com/CortezStephanie/GetFit-Workout-Tracker',
    deploymentURL: 'https://getfit-fitness-tracker.herokuapp.com/?id=61a50211c4bc4d001647a789'
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
          <h1 className="sectionTitle">Projects</h1>
            <div className='projectContainer'>  
              <Projects project={projectOne}/>
              <Projects project={projectTwo}/>
              <Projects project={projectThree}/>
              <Projects project={projectFour}/>
              <Projects project={projectFive}/>
              <Projects project={projectSix}/> 
          </div>
        </div>
        )
      }
      if (currentPage === 'Resume') {
        return <Resume />;
      }
      // return <Contact />;
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

