import React from 'react'
import "./Footer.css"
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {FiGithub} from 'react-icons/fi'

const Footer = () => {
  return (
    <footer>
      <a href="#header" className='footer__logo'>AZISPRTM_</a>

      <ul className='permalinks'>
        <li><a href="#header">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.instagram.com/azisprtm_/"><FaFacebookF /></a>
        <a href="https://www.facebook.com/muhamadazis.pratama.9"><FiInstagram /></a>
        <a href="https://github.com/Azisprtm0806"><FiGithub /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Azisprtm_.</small>
      </div>
    </footer>
  )
}

export default Footer