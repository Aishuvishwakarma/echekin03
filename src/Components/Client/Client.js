import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import './Client.css'

import shopify from '../../assets/shopify.png'
import square from '../../assets/square.png'
import everynote from '../../assets/evernote.png'

import SwiperCore, {
  Pagination
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Pagination]);

function Client() {
 
    return (
      <div className='client'>
     <div className="container-fluid h-100">
       <Swiper slidesPerView={3} spaceBetween={30} className="mySwiper client-list h-100">
    <SwiperSlide className='SwiperSlide'><img src={shopify} alt="" /></SwiperSlide>
    <SwiperSlide  className='SwiperSlide'><img id='everynote' src={everynote} alt="" /></SwiperSlide>
    <SwiperSlide  className='SwiperSlide'><img  id='square' src={square} alt="" /></SwiperSlide>
    <SwiperSlide className='SwiperSlide'><img src={shopify} alt="" /></SwiperSlide>
    <SwiperSlide  className='SwiperSlide'><img id='everynote' src={everynote} alt="" /></SwiperSlide>
    <SwiperSlide  className='SwiperSlide'><img  id='square' src={square} alt="" /></SwiperSlide>
    <SwiperSlide className='SwiperSlide'><img src={shopify} alt="" /></SwiperSlide>
    <SwiperSlide  className='SwiperSlide'><img id='everynote' src={everynote} alt="" /></SwiperSlide>
    <SwiperSlide  className='SwiperSlide'><img  id='square' src={square} alt="" /></SwiperSlide>
    </Swiper>
       </div>
     
      </div>
  
    )
}

export default Client

