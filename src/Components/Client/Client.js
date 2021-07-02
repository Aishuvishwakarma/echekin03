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
      <>
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
  <div className="community">
    <div className="container">
      <div className="col d-flex flex-column">
       <div className="row d-flex p-5 justify-content-center align-items-center text-center">
        <h2 id='heading'>Integrated workplace management solutions</h2>
       </div>
        <div className="eChekinCmmunity row d-flex flex-wrap justify-content-center align-items-center">
        <div className="card">
        <i className="ri-user-line"></i>
        <p id='text'>eChekin<br />welcome</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        <button type="button" className="btn btn-outline-primary">Learn More</button>
        </div>
        <div className="card">
        <i className="ri-team-line"></i>
        <p id='text'>eChekin<br />Meetings</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        <button type="button" className="btn btn-outline-primary">Learn More</button>
        </div>
        <div className="card">
        <i className="ri-virus-line"></i>
        <p id='text'>eChekin<br />Combat</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        <button type="button" className="btn btn-outline-primary">Learn More</button>
        </div>
        </div>
        <div className="eChekinCmmunity row d-flex flex-wrap justify-content-center align-items-center">
        <div className="card">
        <i className="ri-health-book-line"></i>
        <p id='text'>eChekin<br />Gate</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        <button type="button" className="btn btn-outline-primary">Learn More</button>
        </div>
        <div className="card">
        <i className="ri-user-heart-line"></i>
        <p id='text'>eChekin<br />Desk</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        <button type="button" className="btn btn-outline-primary">Learn More</button>
        </div>
        <div className="card">
        <i className="ri-booklet-line"></i>
        <p id='text'>eChekin<br />One</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        <button type="button" className="btn btn-outline-primary">Learn More</button>
        </div>
        </div>
      </div>
    </div>
  </div>
    <div className="container-fluid p-5 slidersectn">
    <div className="slider container  text-light">
    <Swiper pagination={{
  "dynamicBullets": true
}} className="mySwiper">
  <SwiperSlide>
    <div className="slideBx">
      <div className="col h-100 d-flex justify-content-center align-items-center">
      <div id="slideImg">
      <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8YnVzc2luZXNzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />

      </div>
      </div>
      <div className="col h-100">
      <div id='slideContent' className="col">
      <h2>Touchless Visitor Management System</h2>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br />
Laudantium tenetur officiis voluptatum quibusdam blanditiis rerum.</p>
<button type="button" className="btn btn-outline-light">Learn More</button>
      </div>
      </div>
    </div>
  </SwiperSlide>
  <SwiperSlide>
    <div className="slideBx">
      <div className="col h-100 d-flex justify-content-center align-items-center">
      <div id="slideImg">
      <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8YnVzc2luZXNzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />

      </div>
      </div>
      <div className="col h-100">
      <div id='slideContent' className="col">
      <h2>Touchless Visitor Management System</h2>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br />
Laudantium tenetur officiis voluptatum quibusdam blanditiis rerum.</p>
<button type="button" className="btn btn-outline-light">Learn More</button>
      </div>
      </div>
    </div>
  </SwiperSlide>
  <SwiperSlide>
    <div className="slideBx">
      <div className="col h-100 d-flex justify-content-center align-items-center">
      <div id="slideImg">
      <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8YnVzc2luZXNzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />

      </div>
      </div>
      <div className="col h-100">
      <div id='slideContent' className="col">
      <h2>Touchless Visitor Management System</h2>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br />
Laudantium tenetur officiis voluptatum quibusdam blanditiis rerum.</p>
<button type="button" className="btn btn-outline-light">Learn More</button>
      </div>
      </div>
    </div>
  </SwiperSlide>
  <SwiperSlide>
    <div className="slideBx">
      <div className="col h-100 d-flex justify-content-center align-items-center">
      <div id="slideImg">
      <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8YnVzc2luZXNzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />

      </div>
      </div>
      <div className="col h-100">
      <div id='slideContent' className="col">
      <h2>Touchless Visitor Management System</h2>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br />
Laudantium tenetur officiis voluptatum quibusdam blanditiis rerum.</p>
<button type="button" className="btn btn-outline-light">Learn More</button>
      </div>
      </div>
    </div>
  </SwiperSlide>
   </Swiper>
    </div>
    </div>
  </>
    )
}

export default Client

