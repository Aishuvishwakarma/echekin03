import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
function Footer() {
    return (
        <div className="footer">
            <div className="container h-100 d-flex flex-column align-items-center justify-content-center">
                <div className="linkSctn">
                    <div className="links p-3">
                        <h4>eCheckin</h4>
                        <p>Contact visitor system</p>
                        <div className="social">
                        <i class="ri-facebook-circle-line"></i>
                        <i class="ri-instagram-fill"></i>
                        <i class="ri-twitter-fill"></i>
                        <i class="ri-linkedin-box-fill"></i>
                        </div>
                    </div>
                    <div className="links p-3">
                        <Link className='footerLinks'>Security</Link>
                        <Link className='footerLinks'>Compliance</Link>
                        <Link className='footerLinks'>Efficiency</Link>
                        <Link className='footerLinks'>Branding</Link>
                        <Link className='footerLinks'>Enterprise services</Link>
                        <Link className='footerLinks'>Integration</Link>
                        <Link className='footerLinks'>Covid-19 features</Link>
                        <Link className='footerLinks'>All features</Link>
                    </div>
                    <div className="links p-3">
                        <h4>Contact Us</h4>
                        <Link className='footerLinks'><i class="ri-mail-fill"></i>salestecboot.mumbai@gmail.com</Link>
                        <Link className='footerLinks'><i class="ri-global-line"></i>website</Link>
                    </div>
                </div>
                <Link id='echekinRight' >2020 eCheckin. All Right Reseverd.</Link>
            </div>
        </div>
    )
}

export default Footer
