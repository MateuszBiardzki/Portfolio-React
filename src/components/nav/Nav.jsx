/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import './nav.css';
import { IoHomeOutline } from 'react-icons/io5';
import { FaRegUser, FaBookMedical } from 'react-icons/fa';
import { RiServiceLine } from 'react-icons/ri';
import { MdOutlineContactSupport } from 'react-icons/md';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');

  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}>
        <IoHomeOutline />
      </a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}>
        <FaRegUser />
      </a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}>
        <FaBookMedical />
      </a>
      <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}>
        <RiServiceLine />
      </a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}>
        <MdOutlineContactSupport />
      </a>
    </nav>
  );
};

export default Nav;