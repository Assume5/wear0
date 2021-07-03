function OrderConfirmPage({addressInfo,billingInfo,cardNum}){
    console.log(addressInfo,billingInfo,cardNum)
    return(
        <div>

            <hr/>
            <h3 className="f3">Thank You For Your Order!</h3>
            <p className="f4">Order# : 1</p>
            <hr/>

            <p className="f6">Ship to: {addressInfo['firstname']+' '+addressInfo['lastname']}</p>
            <p className="f6">Email: {addressInfo['email']}</p>
            <p className="f6">Phone: {addressInfo['phone']}</p>
            <p className="f6">Address: {addressInfo['address']+' '+addressInfo['apartment']}</p>
            <p className="f6">{addressInfo['city']+', '+addressInfo['state']+', '+addressInfo['zip']}</p>
            <hr/>
            <p className="f6">Card: XXXX {cardNum}</p>
            <p className="f6">Card Holder: {billingInfo['firstnameBilling']+' '+billingInfo['lastnameBilling']}</p>
            <p className="f6">Billing Address: {billingInfo['addressBilling']}</p>
            <p className="f6">{billingInfo['cityBilling']+', '+billingInfo['stateBilling']+', '+billingInfo['zipBilling']}</p>
            <hr/>

        </div>
    )
}
export default OrderConfirmPage