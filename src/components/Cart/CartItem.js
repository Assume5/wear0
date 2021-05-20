import React from 'react'
import {Button, Form} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLessThan, faGreaterThan } from '@fortawesome/free-solid-svg-icons'
import {BrowserView, MobileView} from 'react-device-detect';
class CartItem extends React.Component{
    render()
    {
        const {productid,productimage,productname,quantity,total,onRemoveClick} = this.props
        return(
            <div className="CartContent center" id={productid}>
                <div className="CartItem">
                    <img src={productimage} alt=""/>
                    <p>{productname}</p>
                </div>
                <div className="CartItem" >
                    <BrowserView>
                        <Button variant="light" size="sm" className=" grow br3"><FontAwesomeIcon className="FontAwesomeIcon" icon={faLessThan}/></Button>
                        <p className="br3 ba b--black-10 mv4 w-10 mw6 center" style={{display:'inline-block',margin:"30px"}}>{quantity}</p>
                        <Button variant="light" size="sm" className="grow br3"><FontAwesomeIcon className="FontAwesomeIcon"  icon={faGreaterThan}/></Button>
                        <p className="f6 link dim black db pointer black" onClick={()=>onRemoveClick(productid)}>REMOVE</p>
                    </BrowserView>
                    <MobileView>
                        <Form>
                        <Form.Group controlId="exampleForm.SelectCustom">
                            <Form.Control as="select" custom   defaultValue={quantity}>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            </Form.Control>
                        </Form.Group>
                        </Form>
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