import React from 'react'
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import { FaWhatsapp } from 'react-icons/fa'

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdOutlineEmail />
            <h4>Email</h4>
            <h5>tatakrgb@gmail.com</h5>
            <a href='mailto:tatakrgb@gmail.com' target='_blank'>
              Send a message
            </a>
          </article>
          <article className='contact__option'>
            <RiMessengerLine />
            <h4>Messenger</h4>
            <h5>tatakrgb@gmail.com</h5>
            <a href='https://m.me.com/tatakrgb' target='_blank'>
              Send a message
            </a>
          </article>
          <article className='contact__option'>
            <FaWhatsapp />
            <h4>WhatsApp</h4>
            <h5>+1234567</h5>
            <a href='https://api.whatsapp.com/send?phone+12345678'>
              Send a message
            </a>
          </article>
        </div>
        <form action=''>
          <input
            type='text'
            name='name'
            placeholder='Your Full Name'
            required
          />
          <input type='email' name='email' placeholder='Your Email' required />
          <textarea
            type='message'
            rows='7'
            placeholder='Your Message'
            required
          />
          <textarea />
          <button type='submit' className='btn btn-primary'>
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
