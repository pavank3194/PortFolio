import React from 'react';
import { Routes , Route } from 'react-router-dom';

import Nav from './nav/nav';

import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

import './my-app.css';

const App = (p) => {
  
  return (
    <div>
      <Nav/>
      <div className='body'>
        <div id='Home' className="home"><Home/></div>
        <div id='About' className='about'><About/></div>
        <div id='Projects' className='projects'><Projects/></div>
        <div id='Contact' className='contact'><Contact/></div>
      </div>
      {/* <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/About' element={<About/>} />
        <Route path='/projects' element={<Projects/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes> */}
    </div>
  );
};

export default App;
