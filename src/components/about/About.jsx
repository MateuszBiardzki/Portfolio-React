import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import { FaAward } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { GoProjectRoadmap } from "react-icons/go";

const About = () => {
  return (
    <section className='row' id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className=" container about__container">
        <div className="about__me">
            <div className="about__me-image">
              <img src={ME} alt="" />
            </div>
        </div>
        <div className="about__content">
            <div className="about__cards">
              <article className='about__card' >
                <FaAward className='about__icon' />
                <h5>Experience</h5>
                <small>3+ Years Working</small>
              </article>
            
            
              <article className='about__card' >
                <FaUsers className='about__icon' />
                <h5>Clients</h5>
                <small>200+ Worldwide</small>
              </article>
            
          
              <article className='about__card' >
                <GoProjectRoadmap className='about__icon' />
                <h5>Projects</h5>
                <small>80+ Completed Projects</small>
              </article>
              </div>
          <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero laboriosam beatae consectetur,
           vel assumenda deleniti ipsa rem enim velit numquam? Sint omnis nulla unde. Accusamus voluptatum 
           ea doloribus provident tempora?
        </p>
        <a href="#contact" className=' talk btn btn-primary'> Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About