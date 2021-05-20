import React from 'react'
import {Button, Form} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare, faMinusSquare } from '@fortawesome/free-solid-svg-icons'
import {BrowserView, MobileView} from 'react-device-detect';
class CartItem extends React.Component{
    render()
    {
        const {productid,productimage,productname,quantity,total,onRemoveClick,onIncreaseClick,onDecreaseClick} = this.props
        return(
            <div className="CartContent center" id={productid}>
                <div className="CartItem">
                    <img src={productimage} alt=""/>
                    <p>{productname}</p>
                </div>
                <div className="CartItem" >
                    <BrowserView>
                        <hr></hr>
                        <Button variant="light" size="sm" className=" grow br3" onClick={()=>onDecreaseClick(productid) }><FontAwesomeIcon className="FontAwesomeIcon" icon={faMinusSquare}/></Button>
                        <p className="br3 ba b--black-10 mv4 w-10 mw6 center" style={{display:'inline-block',margin:"30px"}}>{quantity}</p>
                        <Button variant="light" size="sm" className="grow br3" onClick={()=>onIncreaseClick(productid)} ><FontAwesomeIcon className="FontAwesomeIcon"  icon={faPlusSquare}/></Button>
                        <p className="f6 link dim black db pointer black" onClick={()=>onRemoveClick(productid)}>REMOVE</p>
                        <hr></hr>
                    </BrowserView>
                    <MobileView>
                        <hr></hr>
                        <Button variant="light" size="sm" className=" grow br3" onClick={()=>onDecreaseClick(productid) }><FontAwesomeIcon className="FontAwesomeIcon" icon={faMinusSquare}/></Button>
                        <p className="br3 ba b--black-10 mv4 w-20 mw6 center" style={{display:'inline-block',margin:"30px"}}>{quantity}</p>
                        <Button variant="light" size="sm" className=" grow br3" onClick={()=>onIncreaseClick(productid)} ><FontAwesomeIcon className="FontAwesomeIcon"  icon={faPlusSquare}/></Button>
                        <p className="f6 link dim black db pointer black" onClick={()=>onRemoveClick(productid)}>REMOVE</p>
                        <hr></hr>

                    </MobileView>
                </div>
                <div className="CartItem">
                    <p>${total}</p>
                </div>
        </div>
        )

    }
}
export default CartItem