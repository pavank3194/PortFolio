import React from 'react'
import home from '../images/home.jpg'
import './components.css'

const About = () => {
  return (
    <div>
      <p className='componentsName'>About</p>
      <img className='backgroundImages' src={home}  alt='My logo' />
    </div>
  )
}

export default About