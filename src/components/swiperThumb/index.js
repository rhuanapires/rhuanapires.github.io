import React from 'react';
import Swiper from 'react-id-swiper';
// Version >= 2.4.0
import 'swiper/css/swiper.css';

const Gallery = ({screens, heightThumb}) => {
  console.log(heightThumb);
    const params = {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: '4',
      loop: true,
      spaceBetween: 100,
      coverflowEffect: {
        rotate: 20,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }
    }

  return (
    <Swiper {...params}>
      {screens.map(screen =><div><img src={screen} style={{height: heightThumb}}/></div>)}
    </Swiper>
  )
};
export default Gallery;

//  <Slider {...settings}>
//  {screens.map(screen => <div style={`backgroundImage:url(${screen})`}></div>
//)}