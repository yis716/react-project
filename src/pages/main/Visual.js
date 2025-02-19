import React, { useEffect, useState, useRef } from 'react'; 
import "../../css/Visual.css";

import { Swiper, SwiperSlide} from "swiper/react";
import SwiperCore, { Navigation, Pagination, Scrollbar, Autoplay} from "swiper";
import { PiArrowLineLeftLight } from "react-icons/pi";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";


function Visual() {
  SwiperCore.use([Navigation, Pagination, Scrollbar, Autoplay]);



  return (
      <section className='visual'>
        
        <div className="visualInner">
          <div className='visualInfo'>
            <p>미래를 준비하고 국민행복을 완성하는 기상기후 복지 실현</p>
            <p>기상청이 함께합니다.</p>
          </div>
          
          <Swiper 
            slidesPerView={1} 
            loop={true} 
            // pagination={{clickable:true}} 
            navigation={{
              clickable:true
              
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}

            pagination= {{  
            
              type : 'progressbar',
              progressbarOpposite: true, 
              clickable:true

            }}
           
            className="mySwiper1" 
          >
              <SwiperSlide><img src={require('../../images/main/visual_img1.jpg')} alt='' /></SwiperSlide>
              <SwiperSlide><img src={require('../../images/main/visual_img2.jpg')} alt='' /></SwiperSlide>
              <SwiperSlide><img src={require('../../images/main/visual_img3.jpg')} alt='' /></SwiperSlide>
              
          </Swiper>
        </div>
      </section>     
  );
}

export default Visual;
