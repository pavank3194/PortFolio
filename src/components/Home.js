import React from 'react'
import home from '../images/home.jpg'
import './components.css'

const Home = () => {
  return (
    <div>
      <p className='componentsName'>Home</p>
      <img className='backgroundImages' src={home}  alt='My logo' />
    </div>
    
  )
}

export default Home