import React from 'react'
import aboutImage from '../images/about.png'

import './components.css'

const About = () => {
  return (
    <div className='about'>
      {/* <span className='about-me'>About me</span > */}
      <div className='aboutContent'>
        <div>
        <button type='submit' value='Python' id='skills-langages' className='skill-1'>
        <span class="shadow"></span>
          <span class="edge"></span>
          <span className='language'>
            Python
          </span>
        </button>
          <img src={aboutImage} alt='About Me'/>
        </div>
        <div className='zigzag-paragraph'>
          <p className='para-1'>
             <label htmlFor='name'>Name :</label>
             <input name='name' placeholder='BHUKYA PAVAN KALYAN' type='text' disabled></input>
             <label htmlFor='name'>Gender :</label>
             <input name='name' placeholder='Male' type='text' disabled></input>
             <input placeholder='CSE-2023' type text disabled></input>
          </p>
          <p className='para-1' id='para-2'>
            <label htmlFor='clg'>College Name :</label>
            <input name='clg' placeholder='SREENIDHI INSTITUTE OF SCEINCE AND TECHNOLOGY  / B TECH ( CGPA 7.09 )' type='text' disabled/>
          </p>
          <p className='para-1' id='para-2'>
            <label htmlFor='inter' >Intermediate :</label>
            <input name='inter' placeholder='BALAJI JUNIOR COLLEGE / MPC ( 93.5 % )' type='text' disabled/>
          </p>
          <p className='para-1' id='para-2'>
            <label htmlFor='school' >School :</label>
            <input name='school' placeholder='ZPSS ( BOYS ) GUDUR / SSC ( 82 % )' type='text' disabled/>
          </p>
          <p className='para-1' id='para-2'>
            <label htmlFor='hobbies' >Hobbies :</label>
            <input name='hobbies' placeholder='SINGING |  DANCING  |  COOKING  |  SCROLLING INTERNET' type='text' disabled/>
          </p>
          <div className='skills'>
            <div>
              <ul>
                <li>PROBLEM SOLVING </li>
                <li> PYTHON </li>
                <li> JAVA </li>
                <li> C PROGRAMING </li>
                </ul>
            </div>
            <div>
              <ul>
                <li> HTML </li>
                <li> CSS </li>
                <li> JAVASCRIPT </li>
                <li> GIT & GITHUB </li>
              </ul>
            </div>
            <div>
              <ul>
                <li> REACT JS </li>
                <li> SQL </li>
                <li> DBMS </li>
                <li> DATA STRUCTURES & ALGORITHM </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About