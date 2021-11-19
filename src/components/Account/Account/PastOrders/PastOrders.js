import React from 'react'
import { Animated } from 'react-animated-css'

export default class PastOrders extends React.Component {

    onOrderNumberClick = () => {
        console.log(1)
        window.location.href = "/orders";
    }
    render () {
        return (
            <Animated animationIn="fadeIn" animationOut="fadeOut" animationInDuration={1000} animationOutDuration={1000} isVisible={true}>
                <div className="past-orders">
                    <div className="header">
                        <div className="order-number">
                            <p className="f6">Order Number</p>
                        </div>
                        <div className="order-date">
                            <p className="f6">Date</p>
                        </div>
                        <div className="status">
                            <p className="f6">Status</p>
                        </div>
                        <div className="order-total">
                            <p className="f6">Total</p> 
                        </div>
                    </div>
    
                    <div className="order">
                        <div className="order-number">
                            <p className="f6 link dim black db pointer white underline" onClick={this.onOrderNumberClick}># 3</p>
                        </div>
                        <div className="order-date">
                            <p className="f6">July 25, 2021</p>
                        </div>
                        <div className="status">
                            <p className="f6">Confirmed</p>
                        </div>
                        <div className="order-total">
                            <p className="f6">$ 196.95</p> 
                        </div>
                    </div>

                    <div className="order">
                        <div className="order-number">
                            <p className="f6 link dim black db pointer white underline" onClick={this.onOrderNumberClick}># 2</p>
                        </div>
                        <div className="order-date">
                            <p className="f6">July 24, 2021</p>
                        </div>
                        <div className="status">
                            <p className="f6">Shipped</p>
                        </div>
                        <div className="order-total">
                            <p className="f6">$ 196.95</p> 
                        </div>
                    </div>
                    <div className="order">
                        <div className="order-number">
                            <p className="f6 link dim black db pointer white underline" onClick={this.onOrderNumberClick}># 1</p>
                        </div>
                        <div className="order-date">
                            <p className="f6">July 23, 2021</p>
                        </div>
                        <div className="status">
                            <p className="f6">Delivered</p>
                        </div>
                        <div className="order-total">
                            <p className="f6">$ 196.95</p> 
                        </div>
                    </div>
                </div>
            </Animated>
        )
    }

}