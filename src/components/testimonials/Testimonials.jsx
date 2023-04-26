import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/profile-picture.png'
import AVTR2 from '../../assets/profile-picture2.png'
import AVTR3 from '../../assets/profile-picture3.png'
import AVTR4 from '../../assets/profile-picture4.png'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const testimonialData = [
  {
    id: 1,
    avatar: AVTR1,
    name: 'Unavailable',
    review: 'This is where a review would typically go, but as you can see I have no testimonials at the moment. Lucky for you my work quality will leave you satisfied. If you have any questions or comments contact me!'
  },
  {
    id: 2,
    avatar: AVTR2,
    name: 'Unavailable Again',
    review: 'This is where a review would typically go, but as you can see I have no testimonials at the moment. Lucky for you my work quality will leave you satisfied. If you have any questions or comments contact me!'
  },
  {
    id: 3,
    avatar: AVTR3,
    name: 'Still Unavailable',
    review: 'This is where a review would typically go, but as you can see I have no testimonials at the moment. Lucky for you my work quality will leave you satisfied. If you have any questions or comments contact me!'
  },
  {
    id: 4,
    avatar: AVTR4,
    name: 'Available? Sadly not.',
    review: 'This is where a review would typically go, but as you can see I have no testimonials at the moment. Lucky for you my work quality will leave you satisfied. If you have any questions or comments contact me!'
  }
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>

         {testimonialData.map((data) => (
          <SwiperSlide className="testimonial" key={data.id}>
            <div className="client__avatar">
              <img src={data.avatar} />
            </div>
            <h5 className='client__name'>
              {data.name}
            </h5>
            <small className='client__review'>
              {data.review}
            </small>
        </SwiperSlide>
         ))}
      </Swiper>
    </section>
  )
}

export default Testimonials