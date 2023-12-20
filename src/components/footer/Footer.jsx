import React from 'react'
import './footer.css'
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { RiTwitterXLine } from "react-icons/ri";

const Footer = () => {
  return (
    <footer>
      <a href="#a" className='footer__logo'>Mateusz</a>

      <ul className="permalinks">
          <li> <a href="#a" >Home</a></li>
          <li> <a href="#about">About</a></li>
          <li> <a href="#experience" >Experience</a></li>
          <li> <a href="#services" >Services</a></li>
          <li> <a href="#Portfolio" >Portfolio</a></li>
          <li> <a href="#Testimonials" >Testimonials</a></li>
          <li> <a href="#Contact" >Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com"><FaFacebook /></a>
        <a href="https://instagram.com"><AiFillInstagram /></a>
        <a href="https://x.com"><RiTwitterXLine /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; MATEUSZ Portfolio. All rights reserved</small>
      </div>

    </footer>
  )
}

export default Footer