import React from 'react'
import {BrowserView} from 'react-device-detect';
import logo_icon from '../../Navbar/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCheck, faTruck, faHome, faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import {Animated} from "react-animated-css";
import {Button } from 'react-bootstrap';
export default function Informations({information}){
    console.log(information)
    //shipping info
    let shipping = information['shipping']
    let shippingFullName = shipping['first_name'] + ' ' + shipping['last_name']
    let shippingFullAddress = shipping['address'] + ' ' + shipping['address_line_2'];
    let shippingCityStateZip = shipping['city'] + ' ' +shipping['state'] + ' ' + shipping['Zipcode']
    //billing info
    let billing = information['billing']
    let billingFullName = billing['first_name'] + ' ' + billing['last_name']
    let billingFullAddress = billing['address'] + ' ' + billing['address_line_2'];
    let billingCityStateZip = billing['city'] + ' ' +billing['state'] + ' ' + billing['Zipcode']
    if(information.status === "Shipped" && document.querySelector(".divider-ship") ){
        document.querySelector(".divider-ship").style.borderColor = "green"
    }
    else if (information.status === "Delivered" && document.querySelector(".divider-ship")){
        document.querySelector(".divider-ship").style.borderColor = "green"
        document.querySelector(".divider-delivery").style.borderColor = "green"
    }
    return(
        <div className="information">
            <Animated animationIn="fadeInLeft" animationOut="fadeOut" animationInDuration={1500} animationOutDuration={1000} isVisible={true}>
                <BrowserView>
                    <img src = {logo_icon} alt="" className="logo pointer" onClick={event =>  window.location.href='/'}/>
                </BrowserView>
                <div className="timeline-container">
                    <h1 className="f4">Tracking Information</h1>
                    <div className="timeline">
                        <div className="timeline-icons">
                            <FontAwesomeIcon icon={faCheck}/>
                            <p className="f6">Confirm</p>
                        </div>
                        <span className="divider-ship"></span>
                        <div className="timeline-icons">
                            <FontAwesomeIcon icon={faTruck}/>
                            <p className="f6">Shipped</p>
                        </div>
                        <span className="divider-delivery"></span>
                        <div className="timeline-icons">
                            <FontAwesomeIcon icon={faHome}/>
                            <p className="f6">Delivered</p>
                        </div>
                    </div>
                </div>
                <br/>
                <div className="information-container">
                    <div className="header">
                        <p className="f5">Customer Information</p>
                    </div>
                    <div className="user-information">
                        <div className="shipping-information">
                            <h1 className="f6">Customer Email</h1>
                            <p className="f6">{information.email}</p>
                            <br/>
                            <h1 className="f6">Shipping Address</h1>
                            <p className="f6">{shippingFullName}</p>
                            <p className="f6">{shippingFullAddress}</p>
                            <p className="f6">{shippingCityStateZip}</p>
                            <p className="f6">{shipping['Phone']}</p>
                        </div>
                        <div className="billing-information">
                        <h1 className="f6">Customer Payment Card</h1>
                            <p className="f6">XXXX {information.card}</p>
                            <br/>
                            <h1 className="f6">Billing Address</h1>
                            <p className="f6">{billingFullName}</p>
                            <p className="f6">{billingFullAddress}</p>
                            <p className="f6">{billingCityStateZip}</p>
                            <p className="f6">{billing['Phone']}</p>
                        </div>
                    </div>
                </div>

                <div className="information-footer">
                <div>
                </div>
                <Button variant="dark" className="shop-more mt-4 mb-4" href="/"><FontAwesomeIcon className="FontAwesomeIcon" icon={faShoppingCart}/>  Shop More</Button>

                </div>


            </Animated>
        </div>
    )
}