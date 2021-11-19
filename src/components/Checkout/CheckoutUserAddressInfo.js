import {Button} from 'react-bootstrap'

function CheckoutUserAddressInfo({OnChangeStepClick,OnChangeAddressInput}){
    return(
        <div>
                <div className="measure pa2 black-80 w-50 dib">
                        <label className="db fw6 lh-copy f6 black " htmlFor="first-name">First Name</label>
                        <input id="firstname" className="ba b--black-20 pa2 mb2 db w-100"  onChange={OnChangeAddressInput} type="text" aria-describedby="name-desc" />
                </div>
                <div className="measure pa2 black-80 w-50 dib">
                        <label className="db fw6 lh-copy f6 black " htmlFor="last-name">Last Name</label>
                        <input id="lastname" className="ba b--black-20 pa2 mb2 db w-100" onChange={OnChangeAddressInput} type="text" aria-describedby="name-desc"   />
                </div>
                <div className="pa2 black-80 w-100">
                    <label className="db fw6 lh-copy f6 black " htmlFor="address">Address</label>
                    <input id="address" className=" ba b--black-20 pa2 mb2 db w-100" onChange={OnChangeAddressInput} type="text" aria-describedby="name-desc"/>
                </div>
                <div className="pa2 black-80 w-100">
                    <label className="db fw6 lh-copy f6 black " htmlFor="apartment">Apartment (Optional)</label>
                    <input id="apartment" className=" ba b--black-20 pa2 mb2 db w-100" onChange={OnChangeAddressInput} type="text" aria-describedby="name-desc"/>
                </div>
                <div className="measure pa2  black-80 w-33 dib">
                    <label className="db fw6 lh-copy f6 black  " htmlFor="city">City</label>
                    <input id="city" className=" ba b--black-20 pa2 mb2 db w-100" onChange={OnChangeAddressInput} type="text" aria-describedby="name-desc"/>
                </div>
                <div className="measure pa2  black-80 w-33 dib">
                    <label className="db fw6 lh-copy f6 black  " htmlFor="state">State</label>
                    <input id="state" className=" ba b--black-20 pa2 mb2 db w-100" onChange={OnChangeAddressInput} type="text" aria-describedby="name-desc" placeholder="XX" maxlength="2"/>
                </div>
                <div className="measure pa2 black-80 w-33 dib">
                    <label className="db fw6 lh-copy f6 black  " htmlFor="zipcode">ZipCode</label>
                    <input id="zip" className=" ba b--black-20 pa2 mb2 db w-100" onChange={OnChangeAddressInput} type="text" aria-describedby="name-desc" placeholder="XXXXX" maxlength="5"/>
                </div>
                <div className="measure pa2 black-80 w-50 dib">
                    <label className="db fw6 lh-copy f6 black  " htmlFor="email-address">Email</label>
                    <input id="email" className=" ba b--black-20 pa2 mb2 db w-100" onChange={OnChangeAddressInput} type="email" aria-describedby="name-desc"/>
                </div>
                <div className="measure pa2 black-80 w-50 dib">
                    <label className="db fw6 lh-copy f6 black  " htmlFor="phone">Phone</label>
                    <input id="phone" className=" ba b--black-20 pa2 mb2 db w-100" onChange={OnChangeAddressInput} type="text" aria-describedby="name-desc" placeholder="XXXXXXXXXX"maxlength="10"/>
                </div>
                <label className="pa0 ma0 lh-copy f6 pointer black d-flex justify-content-start align-items-center ml-2"><input type="checkbox" className=" mr-2"/> Remember this address</label>
                <Button variant="dark"  className="shop m-3 shadow-3 grow fr w-40" onClick={()=>OnChangeStepClick("UserPaymentInfo")}>Continue to Payment</Button>
        </div>
    )
}
export default CheckoutUserAddressInfo