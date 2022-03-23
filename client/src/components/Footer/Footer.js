import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faFacebookSquare , faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
function footer(){
    return(
        <div className="footer">
            <div className="row">
                <div className="col">
                    <p className="f5 title">About WEAR0</p>
                    <p><a href="/pages/about-us" className="f6">About Us</a></p>
                    <p><a href="/pages/mens-sitemap" className="f6">Mens SiteMap</a></p>
                    <p><a href="/pages/women-sitemap" className="f6">Women SiteMap</a></p>
                    <p><a href="/pages/kids-sitemap" className="f6">Kids SiteMap</a></p>
                    <p><a href="/pages/sale-sitemap" className="f6">Sale SiteMap</a></p>
                    <p><a href="/pages/privacy-statement" className="f6">Privacy Statement</a></p>
                    <p><a href="/pages/terms-of-use" className="f6">Terms Of Use</a></p>
                </div>
                <div className="col">
                    <p className="f5 title">Service</p>
                    <p><a href="/services/order-status" className="f6">Order Status</a></p>
                    <p><a href="/services/contact-us" className="f6">Contact Us</a></p>
                </div>

                <div className="col">
                    <p className="f5 title">Social</p>
                    <div className="social">
                        <a href="#"><FontAwesomeIcon className="FontAwesomeIcon" icon={faFacebookSquare} size="2x"/></a>
                        <a href="#"><FontAwesomeIcon className="FontAwesomeIcon" icon={faTwitter} size="2x"/></a>
                        <a href="#"><FontAwesomeIcon className="FontAwesomeIcon" icon={faInstagram} size="2x"/></a>
                    </div>
                    <br/>
                    <div className="newsletter">
                        <p className="f5 title">Join The Family</p>
                        <p className="f6">Sign Up For News And Exclusive Deals</p>
                        <div className="mt3 black-025 newsletter-button">
                        <input
                            className="pa2 input-reset ba bg-transparent hover-bg-white hover-white w-60 white"
                            type="email"
                            name="email-address"
                            id="email-address"
                            placeholder="Email"
                        />
                        <button className="pa2 input-reset ba bg-transparent hover-bg-white hover-white w-10 white"><FontAwesomeIcon className="FontAwesomeIcon" icon={faArrowRight}/></button>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}
export default footer