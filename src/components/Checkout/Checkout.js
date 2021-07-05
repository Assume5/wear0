import React from 'react'
import './Checkout.css'
import CheckoutUserInfo from './CheckoutUserAddressInfo'
import CheckoutCart from'./CheckoutCart'
import CheckoutUserPaymentInfo from './CheckoutUserPaymentInfo'
import CheckOutOverView from './CheckOutOverView'
import CheckoutConfirm from './OrderConfirmPage'
import logo_icon from '../Navbar/logo.png'
import {Animated} from "react-animated-css";

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
    OnBackToUserAddressInfo=(step)=>{
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
    OnToUserPaymentInfoClick=(step)=>{
        const empty=this.isEmpty
        const addressInfo=this.state.addressInfo
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

        const billingInfo={
            firstnameBilling:addressInfo['firstname'],
            lastnameBilling:addressInfo['lastname'],
            addressBilling:addressInfo['address']+' '+addressInfo['apartment'],
            cityBilling:addressInfo['city'],
            stateBilling:addressInfo['state'],
            zipBilling:addressInfo['zip']
        }
        this.setState({billingInfo:billingInfo})
        if(allFilled){
            this.setState({step:step})
        }
        if(this.state.paymentInfo["cn"]!==""){
            this.setState({step:'UserPaymentInfo'},()=>{
            const paymentInfo=this.state.paymentInfo
            if(this.state.step==='UserPaymentInfo'){
                Object.keys(paymentInfo).map((id,i)=>{
                    if(paymentInfo.value!=="")
                    return document.getElementById(id).value=paymentInfo[id]
                })
            }
        })
        }
    }


    OnUserOverViewClick=(step)=>{
        const empty=this.isEmpty
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
        if(allFilled){
            this.setState({step:step})
        }
    }
    OnBackToPaymentClick=()=>{
        this.setState({step:'UserPaymentInfo'},()=>{
            const paymentInfo=this.state.paymentInfo
            if(this.state.step==='UserPaymentInfo'){
                Object.keys(paymentInfo).map((id,i)=>{
                    if(paymentInfo.value!=="")
                    return document.getElementById(id).value=paymentInfo[id]
                })
            }
            if(this.state.billingCheck===false){
                const billingInfo=this.state.billingInfo
                if(this.state.step==='UserPaymentInfo'){
                    Object.keys(billingInfo).map((id,i)=>{
                        if(billingInfo.value!=="")
                        return document.getElementById(id).value=billingInfo[id]
                    })
                }
            }
        })
    }
    OnChangeStepClick=(step)=>{
        if(step==="UserPaymentInfo"){ //when user click
            this.OnToUserPaymentInfoClick(step)

        }
        if(step==="UserAddressInfo"){ //async function
            this.OnBackToUserAddressInfo(step)
        }
        if(step==='UserOverView'){
            this.OnUserOverViewClick(step)
        }
        if(step==='Confirm'){
            this.setState({step:step})
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
                        <img src={logo_icon} alt="logo" className="checkoutLogo db pointer" onClick={event =>  window.location.href='/'}/>

                        {
                            this.state.step==="UserAddressInfo"&&
                            <Animated animationIn="fadeInLeft" animationOut="fadeOut" animationInDuration={1500} animationOutDuration={1000} isVisible={true}>

                                <CheckoutUserInfo OnChangeStepClick={this.OnChangeStepClick} OnChangeAddressInput={this.OnChangeAddressInput} />

                            </Animated>
                        }

                        {
                              this.state.step==="UserPaymentInfo"&&
                              <Animated animationIn="fadeIn" animationOut="fadeOut" animationInDuration={1000} animationOutDuration={1000} isVisible={true}>
                                  <CheckoutUserPaymentInfo
                                      OnChangeStepClick={this.OnChangeStepClick} 
                                      billingInfo={this.state.billingInfo}
                                      OnChangeBillingInput={this.OnChangeBillingInput}
                                      OnChangePaymentInput={this.OnChangePaymentInput}
                                      OnChangeBillingChecked={this.OnChangeBillingChecked}
                                      billingCheck = {this.state.billingCheck}
                                   />
                              </Animated>
                        }

                        {
                             this.state.step==="UserOverView"&&
                             <Animated animationIn="fadeIn" animationOut="fadeOut" animationInDuration={1000} animationOutDuration={1000} isVisible={true}>

                                 <CheckOutOverView
                                     billingInfo={this.state.billingInfo}
                                     addressInfo={this.state.addressInfo}
                                     paymentInfo={this.state.paymentInfo}
                                     OnChangeStepClick={this.OnChangeStepClick} 
                                     OnBackToPaymentClick={this.OnBackToPaymentClick}
                                 />
                             </Animated>
                        }
   
                        {
                                this.state.step==="Confirm" &&
                                <Animated animationIn="fadeIn" animationOut="fadeOut" animationInDuration={1000} animationOutDuration={1000} isVisible={true}>

                                    <CheckoutConfirm 

                                    OnChangeStepClick={this.OnChangeStepClick}
                                    addressInfo={this.state.addressInfo}
                                    billingInfo={this.state.billingInfo}
                                    cardNum={this.state.paymentInfo.cn.substr(16-4)}

                                    />
                                 </Animated>
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