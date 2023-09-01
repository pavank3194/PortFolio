import React from 'react'
import home from '../images/home.jpg'
import './components.css'

const Projects = () => {
  return (
    <div>
      <p className='componentsName'>Projects</p>
      <img className='backgroundImages' src={home}  alt='My logo' />
    </div>
  )
}

export default Projects