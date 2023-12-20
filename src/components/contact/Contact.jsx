import React from 'react'
import './contact.css'
import { MdOutlineMailOutline } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_eu1uli4', 'template_xrtdacb', form.current, 'LochNa4skgEMbb-A1');

    e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Contact Section</h5>
      <h2>Contact Me</h2>


      <div className="container contact__container">
        <div className="contact__options">
              <article className="contact__option">
                <MdOutlineMailOutline className='contact__option-icon' />
                <h4>Email</h4>
                <h5>mateuszbiardzki12@gmail.com</h5>
                <a href="mailto:mateuszbiardzki12@gmail.com" target='blank'>Send a message</a>
              </article>
              <article className="contact__option">
               <RiMessengerLine className='contact__option-icon' />
                <h4>Messenger</h4>
                <h5>Mateusz Lako</h5>
                <a href="https://m.me/mateusz.biardzki.3" target='blank'>Send a message</a>
              </article>
              <article className="contact__option">
                <FaWhatsapp className='contact__option-icon' />
                <h4>WhatsApp</h4>
                <h5>+447746135365</h5>
                <a href="https://wa.me/+447746135365" target='blank'>Send a message</a>
              </article>
        </div>


        <form className='form' ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button className='btn btn-primary' type='submit' >Send Message</button>
        </form>
      </div>

    </section>
  );
};

export default Contact;