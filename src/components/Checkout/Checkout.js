import React from 'react'
import './Checkout.css'
import CheckoutUserInfo from './CheckoutUserAddressInfo'
import CheckoutCart from'./CheckoutCart'
import CheckoutUserPaymentInfo from './CheckoutUserPaymentInfo'
class Checkout extends React.Component{
    constructor(){
        super()
        this.state={
            products:{},
            step:"UserAddressInfo",
            loaded:false,
            subtotal:0,
            addressInfo:{
                firstname:'',
                lastname:'',
                address:'',
                apartment:'',
                city:'',
                state:'',
                zip:'',
                email:'',
                phone:''
            },
            billingCheck:true,
            paymentInfo:{
                cn:'',
                ed:'',
                sc:''
            },
            billingInfo:{
                firstnameBilling:'',
                lastnameBilling:'',
                addressBilling:'',
                cityBilling:'',
                stateBilling:'',
                zipBilling:''
            }
        }
    }
    componentDidMount(){
        //getting cart from db
        const products={
            "1-45":{
                productimage:"./TestingImage/brown.png",
                productname:"Kaws Brown",
                quantity:1,
                total:100
            },
            "1-47":{
                productimage:"./TestingImage/black.png",
                productname:"Kaws Black",
                quantity:2,
                total:110
            }
        }

        if(Object.keys(products).length){
            this.setState({products:products})
            this.setState({loaded:true})
            let subtotal=0
            for(let i in products){
                subtotal+=(products[i].total*products[i].quantity)
            }
            this.setState({subtotal:subtotal})
        }
    }
    isEmpty=(str)=>{
        return !str.trim().length;
    }
    OnChangeAddressInput=(event)=>{
        this.setState(prevState=>{
            let addressInfo = Object.assign({},prevState.addressInfo)
            addressInfo[event.target.id]=event.target.value
            return {addressInfo}
        })
    }
    OnChangeBillingInput=(event)=>{
        this.setState(prevState=>{
            let billingInfo = Object.assign({},prevState.billingInfo)
            billingInfo[event.target.id]=event.target.value
            return {billingInfo}
        })
    }
    OnChangePaymentInput=(event)=>{
        this.setState(prevState=>{
            let paymentInfo = Object.assign({},prevState.paymentInfo)
            paymentInfo[event.target.id]=event.target.value
            return {paymentInfo}
        })
    }
    OnChangeBillingChecked=()=>{
        if(!this.state.billingCheck){
            const addressInfo=this.state.addressInfo
            const billingInfo={
                firstnameBilling:addressInfo['firstname'],
                lastnameBilling:addressInfo['lastname'],
                addressBilling:addressInfo['address']+' '+addressInfo['apartment'],
                cityBilling:addressInfo['city'],
                stateBilling:addressInfo['state'],
                zipBilling:addressInfo['zip']
            }
            this.setState({billingInfo:billingInfo},()=>{
                this.setState({billingCheck:!this.state.billingCheck})
            })
        }
        else{
            const billingInfo={
                firstnameBilling:'',
                lastnameBilling:'',
                addressBilling:'',
                cityBilling:'',
                stateBilling:'',
                zipBilling:''
            }
            this.setState({billingInfo:billingInfo},()=>{
                this.setState({billingCheck:!this.state.billingCheck})
            })
        }
    }
    OnChangeStepClick=(step)=>{
        const empty=this.isEmpty
        const addressInfo=this.state.addressInfo
        if(step==="UserPaymentInfo"){
            let allFilled=true;
            Object.keys(addressInfo).map((id,i)=>{
                if(id==='state'){
                    if(addressInfo[id].length<2){
                        allFilled=false;
                        return document.getElementById(id).classList.add("b--red")
                    }
                    else{
                        return document.getElementById(id).classList.remove("b--red")
                    }
                }
                if(id==='zip'){
                    if(addressInfo[id].length!==5){
                        allFilled=false;
                        return document.getElementById(id).classList.add("b--red")
                    }
                    else{
                        return document.getElementById(id).classList.remove("b--red")
                    }
                }
                if(id==='phone'){
                    if(addressInfo[id].length!==10){
                        allFilled=false;
                        return document.getElementById(id).classList.add("b--red")
                    }
                    else{
                        return document.getElementById(id).classList.remove("b--red")
                    }
                }
                if(id==="email"){
                    if(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(addressInfo[id].toLocaleLowerCase())){
                        return document.getElementById(id).classList.remove("b--red")
                    }
                    else{
                        allFilled=false;
                        return document.getElementById(id).classList.add("b--red")
                    }
                }
                if(empty(addressInfo[id]) && id!=="apartment"){
                    allFilled=false;
                    return document.getElementById(id).classList.add("b--red")
                }
                if(!empty(addressInfo[id])) {
                    return document.getElementById(id).classList.remove("b--red")
                }
            })
            // if(allFilled){
            //     this.setState({step:step})
            // }
            const billingInfo={
                firstnameBilling:addressInfo['firstname'],
                lastnameBilling:addressInfo['lastname'],
                addressBilling:addressInfo['address']+' '+addressInfo['apartment'],
                cityBilling:addressInfo['city'],
                stateBilling:addressInfo['state'],
                zipBilling:addressInfo['zip']
            }
            this.setState({billingInfo:billingInfo})
            this.setState({step:step})
        }
        if(step==="UserAddressInfo"){ //async function
            this.setState({step:step},()=>{
                const addressInfo=this.state.addressInfo
                if(this.state.step===step){
                    Object.keys(addressInfo).map((id,i)=>{
                        if(addressInfo.value!=="")
                        return document.getElementById(id).value=addressInfo[id]
                    })
                }
            })
        }
        if(step==='UserOverView'){
            let allFilled=true
            if(!this.state.billingCheck){
                const billingInfo=this.state.billingInfo
                Object.keys(billingInfo).map((id,i)=>{
                    if(id==='stateBilling'){
                        if(billingInfo[id].length<2){
                            allFilled=false;
                            return document.getElementById(id).classList.add("b--red")
                        }
                        else{
                            return document.getElementById(id).classList.remove("b--red")
                        }
                    }
                    if(id==='zipBilling'){
                        if(billingInfo[id].length!==5){
                            allFilled=false;
                            return document.getElementById(id).classList.add("b--red")
                        }
                        else{
                            return document.getElementById(id).classList.remove("b--red")
                        }
                    }
                    if(empty(billingInfo[id])){
                        return document.getElementById(id).classList.add("b--red")
                    }
                    if(!empty(billingInfo[id])) {
                        return document.getElementById(id).classList.remove("b--red")
                    }
                })
            }
            const paymentInfo=this.state.paymentInfo
            Object.keys(paymentInfo).map((id,i)=>{
                if(id==='cn'){
                    if(paymentInfo[id].length!==16){
                        allFilled=false;
                        return document.getElementById(id).classList.add("b--red")
                    }
                    else{
                        return document.getElementById(id).classList.remove("b--red")
                    }
                }
                if(id==='ed'){
                    if(!/^(?:0?[1-9]|1[0-2]) *\/ *[1-9][0-9]$/.test(paymentInfo[id])){
                        allFilled=false;
                        return document.getElementById(id).classList.add("b--red")
                    }
                    else{
                        return document.getElementById(id).classList.remove("b--red")
                    }
                }
                if(id==='sc'){
                    if(paymentInfo[id].length!==3){
                        allFilled=false;
                        return document.getElementById(id).classList.add("b--red")
                    }
                    else{
                        return document.getElementById(id).classList.remove("b--red")
                    }
                }
            })
        }
    }
    render(){
        if(!this.state.loaded){
            return <h1 style={{marginTop:"10%"}}>Loading</h1>
        }
        else
            return(
                <div className="checkout-container">
                    <div className="user-info">
                        {
                            this.state.step==="UserAddressInfo"
                            ?
                                <CheckoutUserInfo OnChangeStepClick={this.OnChangeStepClick} OnChangeAddressInput={this.OnChangeAddressInput} />
                            :
                                this.state.step==="UserPaymentInfo"
                            ?
                                <CheckoutUserPaymentInfo
                                    OnChangeStepClick={this.OnChangeStepClick} 
                                    billingInfo={this.state.billingInfo}
                                    OnChangeBillingInput={this.OnChangeBillingInput}
                                    OnChangePaymentInput={this.OnChangePaymentInput}
                                    OnChangeBillingChecked={this.OnChangeBillingChecked}
                                 />
                            :
                                <></>
                                // <CheckoutConfirm OnChangeStepClick={this.OnChangeStepClick} />
                        }
                    </div>
                    <div className="bag-info">
                        <CheckoutCart products={this.state.products} subtotal={this.state.subtotal}/>
                    </div>  
                </div>
            )
    }
}
export default Checkout