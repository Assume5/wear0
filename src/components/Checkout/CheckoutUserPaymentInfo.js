import {Button,Form} from 'react-bootstrap'
import React from 'react'
import {Animated} from "react-animated-css";

class CheckoutUserPaymentInfo extends React.Component{
    constructor(){
        super()
        this.state={
            checked:true
        }
    }
    onCheckClick=()=>{
        this.setState({checked:!this.state.checked})
        this.props.OnChangeBillingChecked()
    }

    componentDidMount() {
        let ed = document.getElementById("ed");
        ed.addEventListener('keydown', ev => {
            var ipLength = ev.target.value.length;
            if(ipLength ===2) {
              ev.target.value += '/';
            }
          });
    }

    render(){
        const {OnChangeStepClick,billingInfo,OnChangeBillingInput,OnChangePaymentInput,billingCheck}=this.props
        return(
            <div>
                <div className="measure pa2 black-80 w-60 dib">
                    <label className="db fw6 lh-copy f6 black " htmlFor="email-address">Card Number</label>
                    <input id="cn" onChange={OnChangePaymentInput} className="ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="name-desc" maxlength={16}/>
                </div>
                <div className="measure pa2 black-80 w-20 dib">
                    <label className="db fw6 lh-copy f6 black " htmlFor="email-address">Expiration Date</label>
                    <input id="ed" onChange={OnChangePaymentInput} className="ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="name-desc" placeholder="MM/YY" maxlength={5}  />
                </div>
                <div className="pa2 black-80 w-20 dib">
                    <label className="db fw6 lh-copy f6 black " htmlFor="email-address">Security Code</label>
                    <input id="sc" onChange={OnChangePaymentInput} className="ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="name-desc" placeholder="XXX" maxlength={3}/>
                </div>

                <hr></hr>

                <Form.Group className="mb-3 pv2" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" defaultChecked={billingCheck} onChange={this.toggleChange} onClick={this.onCheckClick} label="Billing address same as shipping" />
                </Form.Group>
                {   
                    billingCheck?
                    <div>
                        <p className="f6">{billingInfo['firstnameBilling']+' '+billingInfo['lastnameBilling'] }</p>
                        <p className="f6">{billingInfo['addressBilling']}</p>
                        <p className="f6">{billingInfo['cityBilling']+', '+billingInfo['stateBilling']+', '+billingInfo['zipBilling']}</p>
                    </div>
                    :
                    <Animated animationIn="fadeIn" animationOut="fadeOut" animationInDuration={1000} animationOutDuration={1000} isVisible={true}>
                        <div className="measure pa2 black-80 w-50 dib">
                            <label className="db fw6 lh-copy f6 black " htmlFor="first-name">First Name</label>
                            <input id="firstnameBilling" onChange={OnChangeBillingInput} className="ba b--black-20 pa2 mb2 db w-100"   type="text" aria-describedby="name-desc" />
                        </div>
                        <div className="measure pa2 black-80 w-50 dib">
                            <label className="db fw6 lh-copy f6 black " htmlFor="last-name">Last Name</label>
                            <input id="lastnameBilling" onChange={OnChangeBillingInput} className="ba b--black-20 pa2 mb2 db w-100"  type="text" aria-describedby="name-desc"   />
                        </div>
                        <div className="pa2 black-80 w-100">
                            <label className="db fw6 lh-copy f6 black " htmlFor="address">Address</label>
                            <input id="addressBilling" onChange={OnChangeBillingInput} className=" ba b--black-20 pa2 mb2 db w-100"  type="text" aria-describedby="name-desc"/>
                        </div>
                        <div className="measure pa2  black-80 w-33 dib">
                            <label className="db fw6 lh-copy f6 black  " htmlFor="city">City</label>
                            <input id="cityBilling"  onChange={OnChangeBillingInput} className=" ba b--black-20 pa2 mb2 db w-100"  type="text" aria-describedby="name-desc"/>
                        </div>
                        <div className="measure pa2  black-80 w-33 dib">
                            <label className="db fw6 lh-copy f6 black  " htmlFor="state">State</label>
                            <input id="stateBilling" onChange={OnChangeBillingInput} className=" ba b--black-20 pa2 mb2 db w-100"  type="text" aria-describedby="name-desc" placeholder="XX" maxlength="2"/>
                        </div>
                        <div className="measure pa2 black-80 w-33 dib">
                            <label className="db fw6 lh-copy f6 black  " htmlFor="zipcode">ZipCode</label>
                            <input id="zipBilling" onChange={OnChangeBillingInput} className=" ba b--black-20 pa2 mb2 db w-100"  type="text" aria-describedby="name-desc" placeholder="XXXXX" maxlength="5"/>
                        </div>
                    </Animated>
                }
      
                <hr></hr>
                <Button variant="dark"  className="shop m-3 shadow-3 grow fl w-40" onClick={()=>OnChangeStepClick("UserAddressInfo")}> Back To Contact Info</Button>
                <Button variant="dark"  className="shop m-3 shadow-3 grow fr w-40" onClick={()=>OnChangeStepClick("UserOverView")}> OverView</Button>
            </div>
        )
    }
}
export default CheckoutUserPaymentInfo