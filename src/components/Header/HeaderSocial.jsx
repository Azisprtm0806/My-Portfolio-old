import React from 'react'
import {FaGithub} from 'react-icons/fa'
import {AiFillInstagram} from 'react-icons/ai'
import {BsFacebook} from 'react-icons/bs'

const HeaderSocial = () => {
  return (
    <div className='header__socials'>
      <a href="https://www.instagram.com/azisprtm_/" target="_black"><AiFillInstagram /></a>
      <a href="https://www.facebook.com/muhamadazis.pratama.9" target="_black"><BsFacebook /></a>
      <a href="https://github.com/Azisprtm0806" target="_black"><FaGithub /></a>
    </div>
  )
}

export default HeaderSocial