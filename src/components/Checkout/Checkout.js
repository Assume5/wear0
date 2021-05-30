import React from 'react'
import './Checkout.css'
import CheckoutUserInfo from './CheckoutUserAddressInfo'
import CheckoutCartCollapse from './CheckoutCartCollapse'
import CheckoutCart from'./CheckoutCart'
class Checkout extends React.Component{
    constructor(){
        super()
        this.state={
            products:{},
            step:"UserAddressInfo",
            loaded:false,
            subtotal:0
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
    OnChangeStepClick=(step)=>{

    }
    render(){
        if(!this.state.loaded){
            return <h1 style={{marginTop:"10%"}}>Loading</h1>
        }
        else
            return(
                <div className="checkout-container">
                    <div className="user-info">
                        <CheckoutUserInfo OnChangeStepClick={this.OnChangeStepClick} />
                    </div>
                    <div className="bag-info">
                        <CheckoutCart products={this.state.products} subtotal={this.state.subtotal}/>
                    </div>  
                </div>
            )
    }
}
export default Checkout