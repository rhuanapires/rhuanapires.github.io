import React from "react";
import Titles from "../../titles";
import "../../../pages/portfolio/detalhes/styles.css";
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';

  const params = {
    slidesPerView: 3,
    spaceBetween: 150,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    }
  }

function Icons({ icons }) {
  return (
    <div className="Container">
      <Titles titulo="Icons" />
      <Swiper {...params}>
        {icons.map(icon  => <div><img src={icon} style={{height: 200}}></img></div>)} 

      </Swiper>
    </div>
  );
}

export default Icons;
