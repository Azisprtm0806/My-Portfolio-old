import React from 'react'
import "./Contact.css"
import {MdOutlineMail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_4i73qzu', 'template_h3noz0k', form.current, 'vMPPFJfnUHr6_pj55')

    e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>azisprtm08@gmail.com</h5>
            <a href="mailto:azisprtm08@gmail.com" target="__blank">Send a Message</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon' />
            <h4>Messenger</h4>
            <h5>Azis</h5>
            <a href="https://m.me/muhamadazis.pratama.9" target="__blank">Send a Message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon' />
            <h4>WhatsApp</h4>
            <h5>+62 8953 4913 9240</h5>
            <a href="https://wa.me/62895349139240" target="__blank">Send a Message</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail} >
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact