import React from "react";

import '../my-app.css';

import myImage from '../passport size photo.jpg';


const Nav= () => {
    const List=[
        {name:"Pavan",id:1},
        {name:"Kalyan",id:2},
        {name:"Bhukya",id:3}
      ];
      const Items=List.map(Item => 
        <li key={Item.id}>Name of the User : {Item.name} and his Employement ID :{Item.id}</li>
        );
    return(
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
                <li><a href="/">Home</a></li>
                <li><a href="/About">About</a></li>
                <li><a href="/Projects">Projects</a></li>
                <li><a href="/Contact">Contact</a></li>
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
        
        
      <ul>
        {Items}
      </ul>
        </div>
    );
};

export default Nav;