import {Button} from 'react-bootstrap'
function CheckOutOverView({addressInfo,billingInfo,paymentInfo,OnChangeStepClick,OnBackToPaymentClick}){
    return(
        <div>
            <hr></hr>
            <p className="f6 pa1">Name: {addressInfo['firstname']+' '+addressInfo['lastname']}</p>
            <p className="f6 pa1">Email: {addressInfo['email']}</p>
            <p className="f6 pa1">Phone: {addressInfo['phone']}</p>
            <p className="f6 pa1">Address: {addressInfo['address']+' '+addressInfo['apartment']}</p>
            <p className="f6 pa1">{addressInfo['city']+', '+addressInfo['state']+', '+addressInfo['zip']}</p>
            <hr></hr>
            <p className="f6 pa1">Card: XXXX {paymentInfo['cn'].substr(16-4)}</p>
            <p className="f6 pa1">Card Holder: {billingInfo['firstnameBilling']+' '+billingInfo['lastnameBilling']}</p>
            <p className="f6 pa1">Billing Address: {billingInfo['addressBilling']}</p>
            <p className="f6 pa1">{billingInfo['cityBilling']+', '+billingInfo['stateBilling']+', '+billingInfo['zipBilling']}</p>
            <hr></hr>
            <Button variant="dark"  className="shop m-3 shadow-3 grow fl w-40" onClick={OnBackToPaymentClick} > Back To Payment Info</Button>
            <Button variant="dark"  className="shop m-3 shadow-3 grow fr w-40" onClick={()=>OnChangeStepClick("Confirm")} > Confirm</Button>
        </div>
    )
}
export default CheckOutOverView