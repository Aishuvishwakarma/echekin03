import React from 'react'
import {NavLink} from 'react-router-dom'
import './Navigation.css'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"


import SwiperCore, {
  Pagination
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Pagination]);
function Navigation() {


  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark" >
  <div className="container-fluid d-flex justify-content-between">
    <NavLink className="navbar-brand" to="/home"><h2>eChekin</h2></NavLink>
    <div className="d-flex justify-content-between">
      <ul  className="navbar-nav  d-flex justify-content-center">
      <li className="nav-item">
          <NavLink exact  activeStyle={{color: '#E0B948',fontWeight:'600',textDecoration:'underline',transition:'.5s'}}  className="nav-link active" aria-current="page" to="/echekin03">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact  activeStyle={{color: '#E0B948',fontWeight:'600',textDecoration:'underline',transition:'.5s'}}  className="nav-link active" aria-current="page" to="/pricing">Pricing</NavLink>
        </li>
        <li class="nav-item">
          <NavLink exact  activeStyle={{color: '#E0B948',fontWeight:'600',textDecoration:'underline',transition:'.5s'}}  className="nav-link active" to="/product">Product</NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact  activeStyle={{color: '#E0B948',fontWeight:'600',textDecoration:'underline',transition:'.5s'}}  className="nav-link active" to="/blog">Blog</NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact  activeStyle={{color: '#E0B948',fontWeight:'600',textDecoration:'underline',transition:'.5s'}}  className="nav-link active" to="/contact">Contact</NavLink>
        </li>
      </ul>
      <button className="loginbtn">Login</button>
    </div>
  </div>
 
</nav>
      <nav id='hamburger' className="navbar navbar-dark" >
  <div className="container d-flex justify-content-center align-items-center">
  <Swiper  slidesPerView={3} spaceBetween={5} className="mySwiper">
    <SwiperSlide>
    <NavLink exact  activeStyle={{color: '#f2f2f2',fontWeight:'600',transition:'.5s'}}  className="nav-link active" aria-current="page" to="/echekin03">Home</NavLink>
    </SwiperSlide>
    <SwiperSlide>
    <NavLink exact  activeStyle={{color: '#f2f2f2',fontWeight:'600',transition:'.5s'}}  className="nav-link active" aria-current="page" to="/pricing">Pricing</NavLink>
    </SwiperSlide>
    <SwiperSlide>
    <NavLink exact  activeStyle={{color: '#E0B948',fontWeight:'600',transition:'.5s'}}  className="nav-link active" to="/product">Product</NavLink>
    </SwiperSlide>
    <SwiperSlide>
    <NavLink exact  activeStyle={{color: '#f2f2f2',fontWeight:'600',transition:'.5s'}}  className="nav-link active" to="/blog">Blog</NavLink>
    </SwiperSlide>
    <SwiperSlide>
    <NavLink exact  activeStyle={{color: '#f2f2f2',fontWeight:'600',transition:'.5s'}}  className="nav-link active" to="/contact">Contact</NavLink>
    </SwiperSlide>
    </Swiper>
  </div>
</nav>
 </>
  );
}

export default Navigation
