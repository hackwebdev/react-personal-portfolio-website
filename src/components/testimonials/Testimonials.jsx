import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

const data = [
  {
    avatar: AVTR1,
    name: 'Tina Snow',
    review:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et dolor nostrum natus quisquam voluptate deleniti a aspernatur, recusandae veniam, voluptatum quasi. Consectetur recusandae dolorem, quaerat rerum quidem ad modi earum inventore exercitationem et labore illum quae saepe, doloribus nam animi ducimus veniam provident nostrum placeat fugit minima? Ab, quisquam ipsa.',
  },
  {
    avatar: AVTR2,
    name: 'Snow White',
    review:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et dolor nostrum natus quisquam voluptate deleniti a aspernatur, recusandae veniam, voluptatum quasi. Consectetur recusandae dolorem, quaerat rerum quidem ad modi earum inventore exercitationem et labore illum quae saepe, doloribus nam animi ducimus veniam provident nostrum placeat fugit minima? Ab, quisquam ipsa.',
  },
  {
    avatar: AVTR3,
    name: 'Renielle',
    review:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et dolor nostrum natus quisquam voluptate deleniti a aspernatur, recusandae veniam, voluptatum quasi. Consectetur recusandae dolorem, quaerat rerum quidem ad modi earum inventore exercitationem et labore illum quae saepe, doloribus nam animi ducimus veniam provident nostrum placeat fugit minima? Ab, quisquam ipsa.',
  },
  {
    avatar: AVTR4,
    name: 'Renren',
    review:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et dolor nostrum natus quisquam voluptate deleniti a aspernatur, recusandae veniam, voluptatum quasi. Consectetur recusandae dolorem, quaerat rerum quidem ad modi earum inventore exercitationem et labore illum quae saepe, doloribus nam animi ducimus veniam provident nostrum placeat fugit minima? Ab, quisquam ipsa.',
  },
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>

      <div className='container testimonials__container'>
        {data.map(({ avatar, name, review }, index) => {
          return (
            <article key={index} className='testimonial'>
              <div className='client__avatar'>
                <img src={avatar} alt='avatar one' />
              </div>
              <h5 className='client__name'>{name}</h5>
              <small className='client__review'>{review}</small>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Testimonials
