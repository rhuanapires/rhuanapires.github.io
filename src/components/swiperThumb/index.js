import React from 'react';
import Swiper from 'react-id-swiper';
// Version >= 2.4.0
import 'swiper/css/swiper.css';

const Gallery = ({screens, heightThumb}) => {
  console.log(heightThumb);
    const params = {
      slidesPerView: 3,
      spaceBetween: 250,
      loop: true,
      autoplay: {
        delay: 2000,
        disableOnInteraction: false
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
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