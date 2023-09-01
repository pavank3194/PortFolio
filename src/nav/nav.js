import React from "react";
import { Link } from "react-router-dom";

import '../my-app.css';
import '../nav/nav.css'

import myImage from '../passport size photo.jpg';


const ScrollToSection1 = (propss) => {

  const values=propss.data
  const section = document.getElementById(values);
  section.scrollIntoView({ behavior: 'smooth' });

}

const Nav= () => {


  const ScrollToSection = () => {

    const section = document.getElementById('Home');
    section.scrollIntoView({ behavior: 'smooth' });
    
  };
  const ScrollToSection1 = () => {
    const section = document.getElementById('About');
    section.scrollIntoView({ behavior: 'smooth' });
    
  };
  const ScrollToSection2 = () => {
    const section = document.getElementById('Projects');
    section.scrollIntoView({ behavior: 'smooth' });
    
  };
  const ScrollToSection3 = () => {
    const section = document.getElementById('Contact');
    section.scrollIntoView({ behavior: 'smooth' });
    
  };
    
    return(
      <nav className="nav">
        <div className="navBar">
          <div>
            <p className='My-Name'>
        Hello , 
        <b>
          Welcome to my 
          <strong>
            Portfolio
          </strong>
        </b>
        </p>
        </div>
        <div className="navLinks">
            <ul>
                <li><Link to="/" onClick={ ( ScrollToSection) }>Home</Link> </li>
                <li><Link to="/About" onClick={ScrollToSection1}>About</Link>  </li>
                <li><Link to="/Projects" onClick={ScrollToSection2}>Projects</Link> </li>
                <li><Link to="/Contact" onClick={ScrollToSection3}>Contact</Link> </li>
            </ul>
        </div>
        <div>
            <a href="/About"><img className='myImage' src={myImage} alt='My logo' /></a>
            <b className='myName'>BHUKYA PAVAN KALYAN</b><br/>
            <b className='myName'><a href='mailto:pavank3194@gmail.com?subject=Email%20Subject&body=Email%20Body'>E Mail </a>
             | 
             <a href='tel:+917330906448'> Phone </a>
             |
             <a href="https://www.linkedin.com/in/pavan-kalyan-bhukya-03a1a4232/"> LinkedIn </a>
             <br/>
             <a href="https://github.com/pavank3194"> Github </a>
             |
             <a href="/" > FaceBook </a>
             | 
             <a href="/"> X </a>
            </b>
        </div>
        </div>
        </nav>
    );
};

export default Nav;