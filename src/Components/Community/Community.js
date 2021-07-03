import React from 'react'
import './Community.css'
import svg1 from '../../assets/R1.png'
import ThreeD2 from '../../assets/3D2.png'
import ThreeD3 from '../../assets/3D3.png'
import ThreeD4 from '../../assets/3D4.png'
import svg2 from '../../assets/R2.png'
import svg3 from '../../assets/R3.png'
import svg4 from '../../assets/R4.png'

function Community() {
    return (
        <>
        <div id='Community' className='d-flex flex-column justify-content-center align-items-center'>
    <img src={svg1} alt={svg1} id='svg1' />
    <img src={svg1} alt={svg1} id='svg2'  />
    <div className="row d-flex p-4  justify-content-center align-items-center text-center">
        <h2 id='txt'>Contactless visitor system</h2>
        <h3 className='mt-3' id='txt'>How do we work?</h3>
       </div>
       <div className="row  d-flex justify-content-center align-items-center">
       <div className="img">
       <img src={svg1} alt={svg1} id='svg3'/>
       <img src={ThreeD2} alt={ThreeD2} id='svg4'/>
       </div>
       </div>
       <div className="row d-flex  justify-content-center align-items-center optn">
       <div className="col d-flex flex-column justify-content-center align-items-center text-center">
       <p>Scan QR code at the front desk/Resception.</p>
       <p>Enter & verify your Phone Number. Fill your detail & click a selfie via Registration from on the Phone.</p>
       <p>Complete Check-in and recive E-badge/E-pass.</p>
       <button type="button" className="btn btn-outline-primary">Learn More</button>
       </div>
       </div>
        </div>
        <div id='Community' className='d-flex flex-column justify-content-center align-items-center'>
    <img src={svg2} alt={svg2} id='svg1' />
    <img src={svg2} alt={svg2} id='svg2'  />
    <div className="row d-flex p-4  justify-content-center align-items-center text-center">
        <h2 id='txt'>How Sodexo addressed COVID-19 <br /> challenges with eCheckin</h2>
       </div>
       <div className="row d-flex justify-content-center align-items-center">
       <div className="img">
       <img src={svg3} alt={svg3} id='svg3'/>
       <img src={ThreeD3} alt={ThreeD3} id='svg4'/>
       img
       </div>
       </div>
       <div className="row d-flex  justify-content-center align-items-center optn">
       <div className="col d-flex flex-column justify-content-center align-items-center text-center">
       <p>Learn why sodexo chose eCheckin to help the organizatiuon <br />
combat the global pandemic and reinforce health and safety<br />
across their buildings.</p>
       <button type="button" className="btn btn-outline-primary">Learn More</button>
       </div>
       </div>
        </div>
        <div id='Community'className='d-flex flex-column justify-content-center align-items-center'>
    <img src={svg2} alt={svg2} id='svg1' />
    <img src={svg2} alt={svg2} id='svg2'  />
    <div className="row p-4  d-flex justify-content-center align-items-center text-center">
        <h2 id='txt'>Got more questions to ask?</h2>
        <h2 id='txt'>Get in Touch With us?</h2>
       </div>
       <div className="row d-flex justify-content-center align-items-center">
       <div className="img">
       <img src={svg4} alt={svg4} id='svg3'/>
       <img src={ThreeD4} alt={ThreeD4} id='svg4'/>
       img
       </div>
       </div>
       <div className="row d-flex  justify-content-center align-items-center optn">
       <div className="col d-flex flex-column justify-content-center align-items-center text-center">
       <p>we'll be happy to help answer any of your questions send <br />
us an email and we'll get back to your shortly.</p>
       <button type="button" className="btn btn-outline-primary">Learn More</button>
       </div>
       </div>
        </div>
        </>
    )
}

export default Community
