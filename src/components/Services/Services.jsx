import React from 'react';
import "./Services.css"
import {BiCheck} from "react-icons/bi"

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Service</h2>

      <div className="container services__container">
        <article className='service'>
          <div className="service__head">
            <h3>BEGINER</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Static Website</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Company Profile</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>WordPress</p>
            </li>
          </ul>
        </article>
        {/* END OF UI/ UX */}
        <article className='service'>
          <div className="service__head">
            <h3>SILVER</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Web Application</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Web Design</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Free Consultation</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>2 months warranty</p>
            </li>
          </ul>
        </article>
        {/* END WEB DEVELOPMENT */}
        <article className='service'>
          <div className="service__head">
            <h3>GOLD</h3>
          </div>

          <ul className='service__list'>
          <li>
              <BiCheck className='service__list-icon' />
              <p>Web Application</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Web Design</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Free Consultation</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>5 months warranty</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Hosting</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Domain</p>
            </li>
          </ul>
        </article>
        {/* END Content creation */}
      </div>
    </section>
  )
}

export default Services