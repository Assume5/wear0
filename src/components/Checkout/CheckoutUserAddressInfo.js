import logo_icon from '../Navbar/logo.png'
import {Button} from 'react-bootstrap'

function CheckoutUserAddressInfo(){
    return(
        <div>
                <img src={logo_icon} alt="logo" className="checkoutLogo db pointer" onClick={event =>  window.location.href='/'}/>
                <form className="pa2 black-80 w-50 dib">
                    <div className="measure">
                        <label className="db fw6 lh-copy f6 black " htmlFor="email-address">First Name</label>
                        <input id="firstname" className="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="name-desc"/>
                    </div>
                </form>
                <form className="pa2 black-80 w-50 dib">
                    <div className="measure">
                        <label className="db fw6 lh-copy f6 black " htmlFor="email-address">Last Name</label>
                        <input id="lastname" className="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="name-desc"/>
                    </div>
                </form> 
                <form className="pa2 black-80 w-100">
                    <div>
                        <label className="db fw6 lh-copy f6 black " htmlFor="email-address">Address</label>
                        <input id="address" className="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="name-desc"/>
                    </div>
                </form> 
                <form className="pa2 black-80 w-100">
                    <div >
                        <label className="db fw6 lh-copy f6 black " htmlFor="email-address">Apartment (Optional)</label>
                        <input id="apartment" className="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="name-desc"/>
                    </div>
                </form> 
                <form className="pa2  black-80 w-33 dib">
                    <div className="measure">
                        <label className="db fw6 lh-copy f6 black  " htmlFor="email-address">City</label>
                        <input id="city" className="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="name-desc"/>
                    </div>
                </form>
                <form className="pa2  black-80 w-33 dib">
                    <div className="measure">
                        <label className="db fw6 lh-copy f6 black  " htmlFor="email-address">State</label>
                        <input id="state" className="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="name-desc"/>
                    </div>
                </form>
                <form className="pa2 black-80 w-33 dib">
                    <div className="measure">
                        <label className="db fw6 lh-copy f6 black  " htmlFor="email-address">ZipCode</label>
                        <input id="zip" className="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="name-desc"/>
                    </div>
                </form>
                <form className="pa2 black-80 w-50 dib">
                    <div className="measure">
                        <label className="db fw6 lh-copy f6 black  " htmlFor="email-address">Email</label>
                        <input id="email" className="input-reset ba b--black-20 pa2 mb2 db w-100" type="email" aria-describedby="name-desc"/>
                    </div>
                </form>
                <form className="pa2 black-80 w-50 dib">
                    <div className="measure">
                        <label className="db fw6 lh-copy f6 black  " htmlFor="email-address">Phone</label>
                        <input id="phone" className="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="name-desc"/>
                    </div>
                </form>
                <Button variant="dark"  className="shop m-3 shadow-3 grow fr w-40">Continue to Payment</Button>
        </div>
    )
}
export default CheckoutUserAddressInfo