import React from 'react'
function CheckoutCart({products,subtotal}){
    return(
        <div>
            {
                Object.keys(products).map((id,i)=>{
                    return(
                        <div className="CheckoutCartInfo ml3">
                            <div className="CheckoutCartDetails">
                                <img src={products[id].productimage} alt="" className="dib"/>
                                <h1 className="f6 pa1 black-100">{products[id].productname}</h1>
                            </div>
                            <div className="CheckoutCartDetails">
                            <p className="f6 dib pa1 black-60">Quantity : {products[id].quantity}</p> <br></br>
                            <p className="f6 dib pa1 black-60">Size : One Size</p>
                            </div>
                            <div className="CheckoutCartDetails">
                                <h6 className="f6 pa2">Price : ${products[id].total}</h6>
                            </div>
                            <br></br>
                        </div>
                    )
                })
            }
            <hr></hr>
            <div className="CheckoutRecap">
                <p className="f6 dib fl ml4">Subtotal</p>
                <p className="f6 dib fr ml4">$ {subtotal}</p>
                <br></br><br></br>
                <p className="f6 fl ml4">Shipping</p>
                <p className="f6 fr ml4">$ 15</p>
                <br></br>
            </div>
            <hr></hr>
            <br></br>
            <div className="CheckoutRecap">
                <p className="f6 fl ml4">Total</p>
                <p className="f6 fr ml4">$ {subtotal+15}</p>
            </div>
        </div>
    )
}
export default CheckoutCart