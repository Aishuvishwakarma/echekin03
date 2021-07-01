import React from 'react'
import './Landing.css'
import LandingImg from '../../assets/3d1.png'

function Landing() {
    return (
       <div id="landing">
         <div className="container h-100"> 
         <div className="row-12">
           <div className="col">
             <div className="row-12  d-flex justify-content-center align-items-center">
               <div className="col landingCntnt">
                 <h2>Contactless visitor System</h2>
                 <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.<br />
                   Laudantium tenetur officiis voluptatum quibusdam blanditiis rerum.</p>
                   <button className='demo'>Take A Demo</button>
               </div>
             </div>
           </div>
           <div className="col">
             <div className="row-12 d-flex justify-content-center align-items-center">
             <div className="Landingimage d-flex justify-content-center align-items-center">
               <img src={LandingImg} alt="" />
             </div>
             </div>
           </div>
         </div>
        </div>
       </div>
    )
}

export default Landing;
