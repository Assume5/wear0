import React from 'react'
import {BrowserView} from 'react-device-detect';
import logo_icon from '../../Navbar/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCheck, faTruck, faHome, faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import {Animated} from "react-animated-css";
import {Button } from 'react-bootstrap';
export default function Informations({information, card}){
    console.log(information)
    information = information[0]
    //shipping info
    let shippingFullName = information.shippingName
    let shippingFullAddress =`${information.shippingAddress1} ${information.shippingAddress2}`;
    let shippingCityStateZip = `${information.shippingCity} ${information.shippingState} ${information.shippingZip}`
    //billing info
    let billingFullName = information.cardHolder
    let billingFullAddress = information.billingAddress1
    let billingCityStateZip = `${information.billingCity} ${information.billingState} ${information.billingZip}`
    if(information.orderStatus === "Shipped" && document.querySelector(".divider-ship") ){
        document.querySelector(".divider-ship").style.borderColor = "green"
    }
    else if (information.orderStatus === "Delivered" && document.querySelector(".divider-ship")){
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
                            <p className="f6">{information.phone}</p>
                        </div>
                        <div className="billing-information">
                        <h1 className="f6">Customer Payment Card</h1>
                            <p className="f6">XXXX {card}</p>
                            <br/>
                            <h1 className="f6">Billing Address</h1>
                            <p className="f6">{billingFullName}</p>
                            <p className="f6">{billingFullAddress}</p>
                            <p className="f6">{billingCityStateZip}</p>
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