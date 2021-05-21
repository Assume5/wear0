import React from 'react'
import {Button, Form} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare, faMinusSquare } from '@fortawesome/free-solid-svg-icons'
import {BrowserView, MobileView} from 'react-device-detect';
class CartItem extends React.Component{
    render()
    {
        const {productid,productimage,productname,quantity,total,onRemoveClick,onIncreaseClick,onDecreaseClick,onProductImageClick} = this.props
        return(
            <div className="CartContent center" id={productid}>
                <div className="CartItem pointer dim" onClick={()=>onProductImageClick(productid)}>
                    <img src={productimage} alt=""/>
                    <p>{productname}</p>
                </div>
                <div className="CartItem" >
                    <BrowserView>
                        <hr></hr>
                        <Button variant="dark" size="sm" className="br5 dim shadow-1 grow" onClick={()=>onDecreaseClick(productid) }><FontAwesomeIcon className="FontAwesomeIcon" icon={faMinusSquare}/></Button>
                        <p className="br3 ba b--black-10 mv4 w-20 mw6 center" style={{display:'inline-block',margin:"30px"}}>{quantity}</p>
                        <Button variant="dark" size="sm" className="br5 dim shadow-1 grow" onClick={()=>onIncreaseClick(productid)} ><FontAwesomeIcon className="FontAwesomeIcon"  icon={faPlusSquare}/></Button>
                        <p className="f6 link dim black db pointer blackcart RemoveButton " onClick={()=>onRemoveClick(productid)}>REMOVE</p>
                        <hr></hr>
                    </BrowserView>
                    <MobileView>
                    <hr></hr>
                        <Button variant="dark" size="sm" className="br5 dim shadow-1 grow" onClick={()=>onDecreaseClick(productid) }><FontAwesomeIcon className="FontAwesomeIcon" icon={faMinusSquare}/></Button>
                        <p className="br3 ba b--black-10 mv4 w-20 mw6 center" style={{display:'inline-block',margin:"30px"}}>{quantity}</p>
                        <Button variant="dark" size="sm" className="br5 dim shadow-1 grow" onClick={()=>onIncreaseClick(productid)} ><FontAwesomeIcon className="FontAwesomeIcon"  icon={faPlusSquare}/></Button>
                        <p className="f6 link dim black db pointer blackcart RemoveButton " onClick={()=>onRemoveClick(productid)}>REMOVE</p>
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