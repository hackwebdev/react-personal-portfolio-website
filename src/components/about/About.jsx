import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import { FiAward } from 'react-icons/fi'
import { FiUsers } from 'react-icons/fi'
import { HiOutlineFolderOpen } from 'react-icons/hi'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>
      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt='me in the photo' />
          </div>
        </div>
        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FiAward className='about__icon' />
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>
            <article className='about__card'>
              <FiUsers className='about__icon' />
              <h5>Clients</h5>
              <small>200+ World Wide</small>
            </article>
            <article className='about__card'>
              <HiOutlineFolderOpen className='about__icon' />
              <h5>Projects</h5>
              <small>80+ Completed Projects</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
            accusantium dolores voluptates, sapiente quia qui, neque itaque
            reiciendis et quod laboriosam error eligendi cumque mollitia.
            Consectetur, excepturi, eveniet rerum modi autem possimus
            accusantium beatae ipsam totam deleniti amet recusandae vitae.
          </p>
          <a href='#contact' className='btn btn-primary'>
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  )
}

export default About
