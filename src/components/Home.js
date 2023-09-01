import React from 'react'
import home from '../images/passport size photo.jpg'
import myImage from '../passport size photo.jpg'
import './components.css'

const Home = () => {
  return (
    <div className='homeData'>
      {/* <p className='componentsName'>Home</p> */}
      <div className='home'>
      <div className='homeContent'>
        <h1>Hi ,<br/> I'm Pavan Kalyan ,</h1>
        <h3>Front-End web Developer</h3>
        <h5>proficiency in problem-solving using Data Structures and algorithms.
          Proficient in deploying projects in Github repositories using Git commands.
          Experience in working with programming Languages and Front-end Web Technologies with more than 1 year Experience .
          A good knowledge on SQL to manage the database.</h5>
      </div>
      <div className='homeImage'>
      <img className='homeImage' src={home}  alt='My logo' />
      </div>
      </div>
    </div>
    
  )
}

export default Home