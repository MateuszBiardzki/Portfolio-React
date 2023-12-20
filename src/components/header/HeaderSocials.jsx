import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { AiOutlineGithub } from "react-icons/ai";
import { FaDribbble } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
  <a href="https://linkedin.com" target='_blank' rel='noreferrer'><FaLinkedin /></a>
  <a href="https://github.com" target='_blank' rel='noreferrer'><AiOutlineGithub /></a>
  <a href="https://dribbble.com" target='_blank' rel='noreferrer'><FaDribbble /></a>
</div>
  )
}

export default HeaderSocials