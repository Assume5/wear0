import React from 'react'
import {Animated} from "react-animated-css";
import { serverUrl } from '../../../constants/Global';

export default function OrdersCart({products,subtotal}){
    const onProductClick = (id) => {
        window.location = `/productdetails/${id}`
    }
    return(
        <div className="carts">
            <Animated animationIn="fadeInRight" animationOut="fadeOut" animationInDuration={1500} animationOutDuration={1000} isVisible={true}>
                {
                    Object.keys(products).map((id,i)=>{
                        return(
                            <div className="CheckoutCartInfo ml3">
                                <div className="CheckoutCartDetails">
                                    <img src={`${serverUrl}${products[id].productImage}`} alt="" className="dib pointer" onClick={()=>onProductClick(products[id].productid)}/>
                                    <h1 className="f6 pa1 black-100">{products[id].productName}</h1>
                                </div>
                                <div className="CheckoutCartDetails">
                                <p className="f6 dib pa1 black-60">Quantity : {products[id].quantity}</p> <br></br>
                                <p className="f6 dib pa1 black-60">Size : {`${products[id].productSize === '0' ? 'One Size' : products[id].productSize}`}</p>
                                </div>
                                <div className="CheckoutCartDetails">
                                    <h6 className="f6 pa2">Price : ${products[id].productPrice}</h6>
                                </div>
                                <br></br>
                            </div>
                        )
                    })
                }
                <hr></hr>
                <div className="CheckoutRecap">
                    <p className="f6 dib fl ml4">Subtotal</p>
                    <p className="f6 dib fr ml4">${subtotal}</p>
                    <br></br><br></br>
                    <p className="f6 fl ml4">Shipping</p>
                    <p className="f6 fr ml4">$15</p>
                    <br></br>
                </div>
                <hr></hr>
                <br></br>
                <div className="CheckoutRecap">
                    <p className="f6 fl ml4">Total</p>
                    <p className="f6 fr ml4">${subtotal+15}</p>
                </div>
            </Animated>
        </div>
    )
}