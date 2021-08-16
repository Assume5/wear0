import {Button} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeSquare, faPhoneSquare } from '@fortawesome/free-solid-svg-icons'
import {Animated} from "react-animated-css";
export default function ContactUs(){
    return(
        <div className="services">
            <Animated animationIn="fadeIn" animationOut="fadeOut" animationInDuration={1500} animationOutDuration={1000} isVisible={true}>
                <h5 className="f3">Contact Us</h5>
                <p className="f6">Available Mon-Fri 9:00 AM - 5:30 PM EST</p>
                <div className="mt3 black-025 dib ma3">
                      <label className="db fw6 lh-copy f6 white" htmlFor="email-address">Email</label>
                      <input
                        className="pa2 input-reset ba bg-transparent hover-bg-white hover-white w-100 white"
                        type="email"
                        name="email-address"
                        id="email-address"
                      />
                </div>
                <div className="mt3 black-025 dib ma3">
                      <label className="db fw6 lh-copy f6 white" htmlFor="name">Name</label>
                      <input
                        className="pa2 input-reset ba bg-transparent hover-bg-white hover-white w-100 white"
                        type="text"
                        name="name"
                        id="fullname"
                      />
                </div>
                <div className="mt3 black-025 ma3">
                      <label className="db fw6 lh-copy f6 white" htmlFor="Phone">Phone</label>
                      <input
                        className="pa2 input-reset ba bg-transparent hover-bg-white hover-white w-100 white"
                        type="text"
                        name="Phone"
                        id="Phone"
                      />
                </div>
                <div className="mt3 black-025 ma3">
                      <label className="db fw6 lh-copy f6 white" htmlFor="Message">Message</label>
                      <textarea
                        className="pa2 input-reset ba bg-transparent hover-bg-white hover-black w-100 white"
                        type="text"
                        name="Message"
                        id="Message"
                        rows="8"
                      />
                </div>
                <Button size="md" variant="dark" className="shadow-5 grow br3 w-50">Send Message</Button>

                <div className="row" >
                    <div className="containermails">
                        <a href="#"><FontAwesomeIcon className="FontAwesomeIcon" icon={faEnvelopeSquare} size="2x"/>
                        
                            <span>Email Us</span>
                            <p>CustomerService@Wear0.com</p>

                        </a>
                    </div>
                    <div className="containermails">
                        <a href="#"><FontAwesomeIcon className="FontAwesomeIcon" icon={faPhoneSquare} size="2x"/>
                        
                            <span>Call Us</span>    
                            <p>+1 (123) 123-1234</p>
                        </a>
                    </div>
                </div>
            </Animated>
        </div>
    )
}