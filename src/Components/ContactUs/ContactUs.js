import React from 'react'
import './ContactUs.css'
import { Link } from 'react-router-dom'
function ContactUs() {
    return (
        <>
            <div className="contact  d-flex align-items-center justify-content-center">
                <div className="container bg-light">
                    <div className="row d-flex flex-column p-2 align-items-center justify-content-center text-center">
                        <h2>Contact us</h2>
                        <p className='fw-normal mt-2'>We're here to help and always happy<br />hear from you!</p>
                        <p className='mt-4 fw-bolder text-secondary'>Contact us using the form below. if you need help<br />instantly,ckeck out our <Link to='/help'>Help center</Link>or use the chat</p>
                    </div>
                </div>
            </div>
            <div className="formSection  d-flex align-items-center justify-content-center">
                <div className="container d-flex align-items-center justify-content-center">
                    <div className="formContainer p-5">
                        <div className="crcl"><i className="ri-phone-fill"></i></div>
                            <form action="">
                                <h5 className="form-label fw-normal text-secondary mt-2">Full Name</h5>
                                <input type="text" className="form-control" />
                                <h5 className="form-label fw-normal text-secondary mt-2">Email address</h5>
                                <input type="email" className="form-control" />
                                <h5 className="form-label fw-normal text-secondary mt-2">Contact</h5>
                                <input type="email" className="form-control" />
                                <h5 className="form-label fw-normal text-secondary mt-2">Write something</h5>
                                <textarea type="email" className="form-control" />
                                <button className='btn btn-primary mt-3'>Submit</button>
                            </form>
                            
                        </div>
                    </div>
                </div>
        </>
            )
}

            export default ContactUs
