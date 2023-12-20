import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'


// import Swiper core and required modules
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation } from 'swiper/modules';


const data = [
  {
    avatar: AVTR1,
    name: 'Tina Snow',
    review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt dolorem, molestias, debitis amet suscipit quidem ratione ea hic quod harum dignissimos cupiditate sit autem iste sed labore, corporis ex deleniti.'
  },
  {
    avatar: AVTR2,
    name: 'Shatta Valle',
    review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt dolorem, molestias, debitis amet suscipit quidem ratione ea hic quod harum dignissimos cupiditate sit autem iste sed labore, corporis ex deleniti.'
  },
  {
    avatar: AVTR3,
    name: 'Kwame Despite',
    review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt dolorem, molestias, debitis amet suscipit quidem ratione ea hic quod harum dignissimos cupiditate sit autem iste sed labore, corporis ex deleniti.'
  },
  {
    avatar: AVTR4,
    name: 'Nana ama Bama',
    review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt dolorem, molestias, debitis amet suscipit quidem ratione ea hic quod harum dignissimos cupiditate sit autem iste sed labore, corporis ex deleniti.'
  },
  
];

const Testimonials = () => {
  return (
    <section id='Testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

    <Swiper className="container testimonials__container mySwiper" // install Swiper modules
      navigation={true} modules={[Navigation]} 
      spaceBetween={40}
      slidesPerView={1}>
      {
        data.map(({avatar, name, review}, index) => {
          return (
            <SwiperSlide key={index} className='testimonial' >
         <div className="client__avatar">
          <img src={avatar} alt="Avatar" />
         </div> 
         <h5 className='client_name'>{name}</h5>
          <small className="client_review">
            {review}
          </small>
      </SwiperSlide>
          )
        }
        )
      }

    </Swiper>
    </section>
  )
}

export default Testimonials