import React from 'react'
import CTA from './CTA';
import "./Header.css";
import ME from "../../assets/me2.png"
import HeaderSocial from './HeaderSocial';

const Header = () => {
  return (
    <header id='header'>
      <div className="container header__container">
        <h3>Hello I'M</h3>
        <h1>M Ajis Pratama</h1>
        <h5 className='text-light'>MERN STACK Developer</h5>
        <CTA />
        <HeaderSocial />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header