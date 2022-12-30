import React from 'react'
import Backend from './Backend';
import "./Experience.css";
import Frontend from './Frontend';


const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <Frontend />
        
        <Backend />
      </div>
    </section>
  )
}

export default Experience