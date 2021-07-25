import React from 'react'
import { Animated } from 'react-animated-css'
import {Button} from 'react-bootstrap'
export default class AccountDeatils extends React.Component {
    constructor() {
        super()
        this.state= {
            data : {}
        }
    }
    render () {
        return (
            <Animated animationIn="fadeIn" animationOut="fadeOut" animationInDuration={1000} animationOutDuration={1000} isVisible={true}>
                <div className="measure pa2 black-80 w-30 dib">
                    <label className="db fw6 lh-copy f6 white " htmlFor="first-name">First Name</label>
                    <input id="first" className="ba b--black-20 pa2 mb2 db w-100"   type="text" aria-describedby="name-desc" />
                </div>
                <div className="measure pa2 black-80 w-30 dib">
                    <label className="db fw6 lh-copy f6 white " htmlFor="last-name">Last Name</label>
                    <input id="last" className="ba b--black-20 pa2 mb2 db w-100"  type="text" aria-describedby="name-desc"   />
                </div>
                <div className="pa2 black-80 w-60 center">
                    <label className="db fw6 lh-copy f6 white " htmlFor="address">Address</label>
                    <input id="address" className=" ba b--black-20 pa2 mb2 db w-100"  type="text" aria-describedby="name-desc"/>
                </div>
                <div className="pa2 black-80 w-60 center">
                    <label className="db fw6 lh-copy f6 white " htmlFor="address">Address Line 2</label>
                    <input id="address2" className=" ba b--black-20 pa2 mb2 db w-100"  type="text" aria-describedby="name-desc"/>
                </div>
                <div className="measure pa2  black-80 w-20 dib">
                    <label className="db fw6 lh-copy f6 white" htmlFor="city">City</label>
                    <input id="city" className=" ba b--black-20 pa2 mb2 db w-100"  type="text" aria-describedby="name-desc"/>
                </div>
                <div className="measure pa2  black-80 w-20 dib">
                    <label className="db fw6 lh-copy f6 white  " htmlFor="state">State</label>
                    <input id="state" className=" ba b--black-20 pa2 mb2 db w-100"  type="text" aria-describedby="name-desc" placeholder="XX" maxlength="2"/>
                </div>
                <div className="measure pa2 black-80 w-20 dib">
                    <label className="db fw6 lh-copy f6 white  " htmlFor="zipcode">ZipCode</label>
                    <input id="zip" className=" ba b--black-20 pa2 mb2 db w-100"  type="text" aria-describedby="name-desc" placeholder="XXXXX" maxlength="5"/>
                </div>
                <br/><br/>
                <div className="measure pa2 black-80 w-20 center">
                    <Button variant="dark"  className="shop shadow-3 w-100 grow" > Save</Button>
                </div>
            </Animated>
        )
    }

}