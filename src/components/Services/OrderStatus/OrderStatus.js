import {Button} from 'react-bootstrap';
import {Animated} from "react-animated-css";
export default function OrderStatus(){
    return(
        <div className="services">
            <Animated animationIn="fadeIn" animationOut="fadeOut" animationInDuration={1500} animationOutDuration={1000} isVisible={true}>
                <h5 className="f3">Order Status</h5>
                <div className="mt3 black-025 dib ma3">
                      <label className="db fw6 lh-copy f6 white" htmlFor="email-address">Order Number</label>
                      <input
                        className="pa2 input-reset ba bg-transparent hover-bg-white hover-white w-100 white"
                        type="email"
                        id="ordernumber"
                      />
                </div>
                <div className="mt3 black-025 dib ma3">
                      <label className="db fw6 lh-copy f6 white" htmlFor="name">Email Address</label>
                      <input
                        className="pa2 input-reset ba bg-transparent hover-bg-white hover-white w-100 white"
                        type="text"
                        id="emailorder"
                      />
                </div>
                <br/>
                <Button size="md" variant="dark" className="shadow-5 grow br3 w-30"     
                onClick={(e) => {e.preventDefault();window.location.href='/orders';}}>
                  Submit
                </Button>
            </Animated>
        </div>
    )
}